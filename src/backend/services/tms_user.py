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
from backend.constants import TASK_TYPE_MAPPING, TASK_PRIORITY_MAPPING, ROLE_MAPPING, USER_TYPE_MAPPING

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
        if current_user.is_anonymous:
             return jsonify({"Unauthorized": "Login as admin to perform action"}), 401

        session_current_role = userquery.check_user_role(current_user)
        # print("session_current_role{admin decorator}->", session_current_role)
        if session_current_role is False:
            return jsonify({"Unauthorized": "Admin authorization is required"}), 401
        
        return func(*args, **kwargs)

    return admin_check


@app.route('/api/v1/register', methods=["POST"])
@requires_admin_auth
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
    """Handles soft delete(it will set flag(is_active=False), if is_active is True for existing user.)
    :param: id
    :return: json message after making flag 'is_active=false'
    """
    user_id = request.json['id']
    if user_id is None:
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
    """Updates the existing active-user.
    :param:id, role, user_type, employee_id, is_active
    :return: json message
    """
    user_id = request.json['id']
    if user_id is None:
        return jsonify({"error": "id can not be empty"}), 400

    user_new_details = request.json
    try:
        user = userquery.update_user_by_id(user_new_details)
    except Exception as exc:
        return jsonify({"error": str(exc)})

    return jsonify({"success": "User id {} updated".format(user.id)}), 200


@app.route('/api/v1/department-list', methods=["GET"])
@login_required
def department_list():
    """
    return: department id, name and email
    """
    try:
        db_department = userquery.get_department_list()
    except Exception as exc:
        return jsonify({"error": str(exc)})

    return jsonify(db_department), 200


@app.route('/api/v1/user-list', methods=["GET"])
@login_required
def users_list():
    """return all the added/registered staff/students details.
    return:  id, first_name, last_name, email, user_role, user_type, employee_id, student_id, is_active
    """
    try:
        db_user = userquery.get_user_list()
    except Exception as exc:
        return jsonify({"error": str(exc)})

    return jsonify(db_user), 200


@app.route('/api/v1/teams', methods=["POST"])
#@login_required
def departments_teams_list():
    """ return all users details, group by department.
    return:  first_name, last_name, email, user_role, user_type, employee_id, student_id, department_name
    """
    department_name = request.json['department']
    if department_name is None:
        return jsonify({"error": "department name can not be empty"}), 400
    try:
        db_teams = userquery.get_department_wise_team_list(department_name)
    except Exception as exc:
        return jsonify({"error": str(exc)})

    return jsonify(db_teams), 200


@app.route('/api/v1/task-type-list', methods=["GET"])
@login_required
def task_type_list():
    """
    :return: task-type lists
    """
    try:
        task_type = TASK_TYPE_MAPPING
        return jsonify(task_type), 200
    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/task-priority-list', methods=["GET"])
@login_required
def task_priority_list():
    """
    :return: Tasks priority lists
    """
    try:
        task_priority = TASK_PRIORITY_MAPPING
        return jsonify(task_priority), 200
    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/emp-dept-mapping', methods=["POST"])
@login_required
def employee_department():
    """Returns Employee-department mapping details
    :param: user's id as id
    :return: user_id, dept_id, department_email, department_name
    """
    user_id = request.json['id']
    if user_id is None:
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


@app.route('/api/v1/create-task-staff', methods=["POST"])
@login_required
def create_task_staff():
    """stores the task created by staffs"""
    task = request.json
    try:
        db_task = userquery.task_createdby_staff(task)
        return jsonify({'taskId': db_task.id}), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/staff-task-list', methods=["POST"])
@login_required
def staff_task_list():
    """Takes staff's id as id and returns task: created by this staff and also assigned task to this staff
    :return:'task_title', 'description', 'task_type', 'task_state', 'task_priority', 'department_id','originator_id'
    """
    user_id = request.json['id']
    if user_id is None:
        return jsonify({"error": "id can not be empty"}), 400

    try:
        user_task = userquery.get_staff_task_list(user_id)
        return jsonify(user_task), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/create-department', methods=["POST"])
@login_required
@requires_admin_auth
def create_departments():
    """ Creates new department in department table.
    :return: department-id
    """
    departments_json = request.json
    if len((departments_json['department_name']).strip()) == 0 or len(
            (departments_json['department_email']).strip()) == 0:
        return jsonify({"error": "department_name and department_email are required fields"}), 400

    try:
        db_departments = userquery.create_new_departments(departments_json)
    except Exception as exc:
        return jsonify({"error": str(exc)}), 500

    return {"department-id": db_departments.id}, 200


@app.route('/api/v1/predefined-role-list', methods=["GET"])
@login_required
def predefined_role_details():
    """ to show the pre-defined role types:ADMIN OR REGULAR
    :return: Role
    """
    try:
        predefined_roles = ROLE_MAPPING
        return jsonify(predefined_roles), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/predefined-userrole-list', methods=["GET"])
@login_required
def predefined_userrole_details():
    """ to show the pre-defined user role types:STUDENT OR EMPLOYEEE
    :return: PRE-DEFINED USER ROLE
    """
    try:
        predefined_user_roles = USER_TYPE_MAPPING
        return jsonify(predefined_user_roles), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/forgot-password', methods=["POST"])
@login_required
def forgot_password():
    """ validates the active user based on email and then resets the password.
    :param data: email, password, confirm-password
    :return: success or failure
    """
    password_reset_data = request.json
    if password_reset_data['password'] != password_reset_data['confirm-password']:
        return jsonify({"error": "Password and confirm password are different"})

    try:
        password_reset = userquery.forgot_password_reset(password_reset_data)
        return jsonify({"success": "Password is changed"}), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/update-password', methods=["POST"])
@login_required
def update_password():
    """ validates the active user based on email and then updates the new the password.
    :param data: email, old-password, new-password
    :return: success or failure
    """
    password_reset_data = request.json
    try:
        password_update = userquery.update_new_password(password_reset_data)
        return jsonify({"success": "Password is updated"}), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/create-task-student', methods=["POST"])
@login_required
def create_task_student():
    """stores the task created by students"""
    task = request.json
    try:
        db_task = userquery.task_createdby_student(task)
        return jsonify({'taskId': db_task.id}), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/student-task-list', methods=["POST"])
@login_required
def student_task_list():
    """takes student id as id and returns created task details like:
    :return:'task_title', 'description', 'task_type', 'task_state', 'task_priority', 'department_id','originator_id'
    """
    user_id = request.json['id']
    if user_id is None:
        return jsonify({"error": "id can not be empty"}), 400

    try:
        user_task = userquery.get_task_createdby_student(user_id)
        return jsonify(user_task), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})


@app.route('/api/v1/admin-task-list', methods=["GET"])
@login_required
def admin_task_list():
    """return all tasks for admin dashboard
    :return:'task_title', 'description', 'task_type', 'task_state', 'task_priority',
    assignee_id, 'department_id','originator_id'
    """
    try:
        db_task = userquery.get_admin_task_list()
        return jsonify(db_task), 200

    except Exception as exc:
        return jsonify({"error": str(exc)})
