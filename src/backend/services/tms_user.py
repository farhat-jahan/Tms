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
def delete_user_by_id():
    """This function will make make existing user inactive
    :param: email id
    :return: json message after making flag 'is_active=false'
    """
    user_id = request.json["id"]
    try:
        userquery.delete_user_by_id(user_id)
    except Exception as exc:
        return jsonify({"error": "Internal server error. {}".format(exc)}), 500

    return jsonify({"success": "User deleted"}), 200



@app.route('/api/v1/update', methods=["PUT"])
@login_required
def update_user():
    """This function updated the existing user
    :param:id, email, role, user_type, itu_id, is_active
    :return: json message
    """
    user_details = request.json

    validated_user = userquery.find_user_by_id(user_details['id'])
    if validated_user == None:
        return jsonify({"Error": "Failed to find user by id"})

    try:
        user_updated = userquery.update_validated_user(validated_user, user_details)
    except Exception as exc:
        return jsonify({"error": str(exc)})

    return {"id": user_updated}, 200
