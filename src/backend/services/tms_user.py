import json
import os
import sys
from functools import wraps

_CURRDIR = os.path.dirname(__file__)
_APPDIR = os.path.join(_CURRDIR, "..")
sys.path.append(_APPDIR)

from flask_login import LoginManager, current_user, login_user, logout_user, login_required
from flask import request, jsonify, session
from models import app, db
from query import userquery
from TMSExceptions import *

login_manager = LoginManager(app)


@login_manager.user_loader
def load_user(id):
    """
    Flask-Login knows nothing about databases, it needs the application's
    help in loading a user.
    For that reason, the extension expects that the application will configure a
    user loader function, that can be called to load a user given the ID
    NOTE: input id will be string. If database is using int as it, we need to
    convert it.
    """
    try:
        user = userquery.find_active_user_by_id(int(id))
        return user
    except Exception as e:
        return None


def _login_user(user):
    if current_user and current_user.is_authenticated:
        return 200

    try:
        db_user = userquery.find_user_by_credentials(user["email"], user["password"])
        login_user(db_user)
        return 200
    except UnauthorizedUserException as e:
        raise UnauthorizedUserException("Unauthorized user. Error {}".format(e))


def _logout_user():
    logout_user()
    return 200


def requires_admin_auth(func):
    @wraps(func)
    def admin_check(*args, **kwargs):
        session_current_role = userquery.check_user_role(current_user)
        if session_current_role is False:
            return jsonify({"Unauthorized": "Admin authorization is required"}), 401
        return func(*args, **kwargs)

    return admin_check


@app.route('/api/v1/register', methods=["POST"])
# TODO:WE can add decorator "requires_admin_auth" here also.
def register_user():
    user_json = request.json
    try:
        db_user = userquery.create_user(user_json)
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500

    return {"id": db_user.id}, 200


@app.route('/api/v1/login', methods=["POST"])
def login():
    login_details = request.json
    try:
        val = _login_user(login_details)
        return jsonify({"status": "in progress"}), val
    except UnauthorizedUserException as e:
        return jsonify({"error": str(e)}), 401
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/v1/logout', methods=["POST"])
def logout():
    return jsonify({"status": "ok"}), _logout_user()


@app.route("/api/v1/auth_check", methods=["GET"])
@login_required
@requires_admin_auth
def auth_check():
    return jsonify({"status": "ok"}), 200


@app.route('/api/v1/delete', methods=["DELETE"])
@login_required
@requires_admin_auth
def delete_user():
    """This function handles soft delete(will set flag(is_active=False) if is_active is True for existing user.)
    :param: id
    :return: json message after making flag 'is_active=false'
    """
    user_id = request.json['id']
    if user_id is None or len(user_id.strip()) is 0:
        return jsonify({"error": "id can not be empty"}), 400

    try:
        user = userquery.delete_user_by_id(user_id)
    except Exception as exc:
        return jsonify({"error": "{}".format(exc)}), 404

    return jsonify({"success": "User id- {} deleted".format(user.id)}), 200


@app.route('/api/v1/update', methods=["PUT"])
@login_required
@requires_admin_auth
def update_user():
    """This function updated the existing user active user.
    :param:id, role, user_type, itu_id, is_active
    :return: json message
    """
    user_id = request.json['id']
    if user_id is None or len(user_id.strip()) is 0:
        return jsonify({"error": "id can not be empty"}), 400

    user_new_details = request.json
    try:
        user = userquery.update_user_by_id(user_new_details)
    except Exception as exc:
        return jsonify({"error": str(exc)})

    return jsonify({"success": "User id {} updated".format(user.id)}), 200


@app.route('/api/v1/dprtlist', methods=["GET"])
@login_required
def department_list():
    """
    :return: department id, name and email
    """
    try:
        db_department = userquery.get_department_list()
    except Exception as exc:
        return jsonify({"error": str(exc)})

    # return jsonify({"success": db_department}), 200
    return jsonify(db_department), 200


@app.route('/api/v1/userlist', methods=["GET"])
@login_required
def users_list():
    """
    :return:  id, first_name, last_name, email, user_role, user_type, employee_id, student_id, is_active
    """
    try:
        db_user = userquery.get_user_list()
    except Exception as exc:
        return jsonify({"error": str(exc)})

    # return jsonify({"success": db_department}), 200
    return jsonify(db_user), 200


@app.route('/api/v1/empdeptmap', methods=["POST"])
@login_required
def employee_department():
    """This function return Employee-department mapping details
    :param: user's id as id
    :return: user_id, dept_id, department_email, department_name
    """
    user_id = request.json['id']
    if user_id is None or len(user_id.strip()) is 0:
        return jsonify({"error": "id can not be empty"}), 400

    try:
        user_dept = userquery.get_employee_department_for_userid(user_id)
    except Exception as exc:
        return jsonify({"error": str(exc)})

    response = {
        "user_id": user_id,
        "dept_id": user_dept.id,
        "department_name": user_dept.department_name,
        "department_email": user_dept.department_email
    }

    return jsonify(response), 200
