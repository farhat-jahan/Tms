"""
Database queries relating to user operations.
"""
import json
import os
import sys

from flask import jsonify
from sqlalchemy.exc import *
from flask_bcrypt import Bcrypt
from sqlalchemy.orm import session

_CURRDIR = os.path.dirname(__file__)
_APPDIR = os.path.join(_CURRDIR, "..")
sys.path.append(_APPDIR)

from models import *
from TMSExceptions import *
from query import serializers

bcrypt = Bcrypt(app)


def _validate_user(user):
    # TODO
    pass


def find_user_by_credentials(email, password):
    """returns the user by email and password.
      @params: email and password
      @returns: user with matching email and password.
      @raise: InvalidInputException, TimeoutException, QueryException, ItemNotFoundException
    """
    if email is None or password is None:
        raise InvalidInputException("None email or password provided.")

    db_user = None
    try:
        db_user = User.query.filter_by(email=email).first()
    except TimeoutError as e:
        raise TimeoutException("Timeout error. Failed to get user by email and password. Error {}".format(e))
    except Exception as e:
        raise QueryException("Failed to find user by email and password {}. Error {}".format(id, e))

    if db_user and bcrypt.check_password_hash(db_user.password, password) and db_user.is_active:
        return db_user

    raise ItemNotFoundException("User not found.")


def create_user(user):
    """create a new user in database.
     @params: user dictionary
     @returns new database user created.
     raise: DuplicateEntryException, CreateNewItemException
    """
    # prechecks
    _validate_user(user)
    print(user)

    try:
        checkUser = find_user_by_credentials(user['email'], user['password'])
        if checkUser:
            raise DuplicateEntryException("user with email is already registered")
    except ItemNotFoundException as e:
        """
          it means new user.
        """
        print((user['role'].upper()))
        print(UserType(user['user_type'].upper()))

        try:
            password_hash = bcrypt.generate_password_hash(user['password'])
            new_user = User(first_name=user['first_name'], last_name=user['last_name'],
                            email=user['email'], password=password_hash,
                            role=user['role'].upper(),
                            user_type=UserType(user['user_type'].upper()),
                            employee_id=user['employee_id'])

            db.session.add(new_user)
            db.session.commit()
            return new_user
        except Exception as exc:
            raise CreateNewItemException("Failed to create new user. Reason {}".format(exc))
    except Exception as e:
        print(e)


def find_user_by_id(id):
    """find user by id.
    @params id: user_id as id
    @returns db_user if user exist, else None
    raise: InvalidInputException, TimeoutException, QueryException
    """
    if id is None:
        raise InvalidInputException(" None id is provided ")

    db_user = None
    try:
        print("find_user_by_id--:", id)
        db_user = User.query.get(id)
        if not db_user:
            raise InvalidInputException("user with id {} not found.".format(id))
    except InvalidInputException as e:
        raise e
    except TimeoutException as e:
        raise TimeoutException("Timeout error. Failed to get user by id. Error {}".format(e))
    except Exception as e:
        raise QueryException("Failed to find user by id. Error {}".format(e))

    return db_user


def find_active_user_by_id(id):
    """find active user by id.
    @params id: user_id
    @returns db_user if user exist, else Raise ItemNotFoundException
    raise: InvalidInputException, TimeoutException, QueryException
    """
    print("find_active_user_by_id--:", id)
    user = find_user_by_id(id)
    if not user.is_active:
        raise ItemNotFoundException("User, with id {} not found".format(id))

    return user


def check_user_role(user):
    """checks the user role
    :param user:
    :return: True is user is ADMIN else return False
    """
    print(user)
    if user and user.role == Role.ADMIN:
        return True
    return False


def find_user_by_email(user_email):
    """This function will check user by email and also checks if user is still active or not.
    :param user_email:
    :return: db_user (user object if user is active) else False
    """
    # if user_email is None:
    #     raise InvalidInputException("None Email is provided ")

    db_user = None
    try:
        db_user = User.query.filter_by(email=user_email).one()
    except TimeoutException as e:
        raise TimeoutException("Timeout error. Failed to get user by email-{}. Error {}".format(user_email, e))
    except Exception as e:
        raise QueryException("Failed to get user by email-{}. Error {}".format(user_email, e))

    if db_user and db_user.is_active is True:
        return db_user

    db_user = None
    return db_user





def update_user_by_id(user_new_details):
    """updates the existing user in the DB
    :param : new user data to update the existing user as 'users_new_details'
    :return:user
    """
    user_id = user_new_details['id']
    user = find_active_user_by_id(user_id)
    if not user:
        raise ItemNotFoundException("User with id {} not found".format(id))

    try:
        user.role = Role(user_new_details['role'].upper())
        user.user_type = UserType(user_new_details['user_type'].upper())
        user.employee_id = user_new_details['employee_id'],
        user.is_active = user_new_details['is_active']
        db.session.commit()

    except TimeoutError as e:
        raise TimeoutException("Timeout error. Failed to update user by email {}. Error {}".
                               format(users_new_details['email'], e))
    except Exception as e:
        raise UpdateException("Failed to update user , error-{}".format(e))

    return user


def delete_user_by_id(user_id):
    """Deletes the user.
        @params id: id
        raise: ItemNotFoundException, DeleteException, TimeoutException
        :return; user
    """

    try:
        # user = find_user_by_id(id)
        user = find_active_user_by_id(user_id)
        if not user:
            raise ItemNotFoundException("User with id {} not found".format(id))
        user.is_active = False
        db.session.commit()
    except ItemNotFoundException as e:
        raise e
    except TimeoutError as e:
        raise TimeoutException("Timeout error. Failed to delete user by id {}. Error {}".
                               format(id, e))
    except Exception as e:
        raise DeleteException("Failed to delete user , error-{}".format(e))

    return user


def get_department_list():
    """Returns Departments list
    :param:None
    :return: serialized departments detail
    """

    try:
        db_department = Department.query.all()
        if not db_department:
            raise QueryException("Failed to find departments")

    except TimeoutError as e:
        raise TimeoutException("Timeout error. Failed to find departments. Error {}".format(e))

    serialized_department_data = serializers.department_schema.dump(db_department)

    return serialized_department_data


def get_user_list():
    """Return users list
    :param:
    :return: serialized users details
    """

    try:
        db_user = User.query.all()
        if not db_user:
            raise QueryException("Failed to find users")

    except TimeoutError as e:
        raise TimeoutException("Timeout error. Failed to find user.Error {}".format(e))

    serialized_user_data = serializers.user_schema.dump(db_user)

    return serialized_user_data


def get_department_wise_team_list(dept_id):
    """Return team list details of each departments
    :param:
    :return: serialized users details
    """

    try:
        db_dept = Department.query.get(dept_id)
        if not db_dept:
            raise QueryException("Failed to find the department")

        emp_dept_mapping = EmployeeDepartmentMapping.query.with_entities(EmployeeDepartmentMapping.user_id)\
            .filter_by(dept_id=db_dept.id).all()
        emp_dept_mapping_user_id = [id for val in emp_dept_mapping for id in val]
        db_teams_users = User.query.filter(User.id.in_(emp_dept_mapping_user_id)).all()

        serialized_teams_users = serializers.user_schema.dump(db_teams_users)
        if len(serialized_teams_users) == 0:
            raise ItemNotFoundException("Employee-department mapping does not exist")

        else:
            for i, v in enumerate(serialized_teams_users):
                v['department_name']=db_dept.department_name

    except TimeoutError as e:
        raise TimeoutException("Timeout error. Failed to find department.Error {}".format(e))

    return serialized_teams_users


def get_employee_department_for_userid(id):
    """Checks Employee-department mapping in EmployeeDepartmentMapping model.
    it returns the department details for this user's id
    :param id:
    :return: department object as user_department
    """
    try:
        user = find_active_user_by_id(id)
        if not user:
            raise ItemNotFoundException("User with id {} not found".format(id))

        dept = EmployeeDepartmentMapping.query.filter_by(user_id=user.id).one()

        if not dept:
            raise ItemNotFoundException("Employee-department mapping does not exist")

        user_department = Department.query.filter_by(id=dept.dept_id).one()

    except NoResultFound:
        raise NoResultFound("Employee-department mapping does not exist")

    return user_department


def get_assigned_task_to_user(id):
    """
    Queries the all assigned task to this id and return task details like:
     ('task_title', 'description', 'task_type', 'task_state', 'task_priority', 'department_id','originator_id')
    :param id: user's id as id
    :return: assigned task details to this user
    """
    try:
        user = find_active_user_by_id(id)
        if not user:
            raise ItemNotFoundException("User with id {} not found".format(id))

        db_user_task = Task.query.filter_by(assignee_id=id).all()
        serialized_user_task = serializers.task_schema.dump(db_user_task)
        if len(serialized_user_task) == 0:
            raise ItemNotFoundException("Tasks is not assigned to user-{}".format(user.id))

    except ItemNotFoundException:
        raise ItemNotFoundException("Tasks is not assigned to user-{}".format(user.id))

    return serialized_user_task


def create_new_departments(department):
    """ Creates new department in department table.
        :return: department object
        """
    try:
        new_department = Department(department_name=department['department_name'],
                                    department_email=department['department_email'])
        db.session.add(new_department)
        db.session.commit()
        return new_department
    except Exception as exc:
        raise CreateNewItemException("Failed to create departments. Reason {}".format(exc))


def forgot_password_reset(data):
    """ validates the active user based on email and then resets the password.
    :param data: email, password, confirm-password
    :return: db_user
    """
    db_user = find_user_by_email(data['email'])
    try:
        if db_user is None:
            raise QueryException("Failed to get user by email-{}".format(data['email']))

        password_hash = bcrypt.generate_password_hash(data['password'])
        db_user.password = password_hash
        db.session.commit()
        return db_user

    except Exception as exc:
        raise CreateNewItemException("Failed to reset new password. Reason {}".format(exc))


def update_new_password(data):
    """ validates the active user based on email and then updates the old password with new password
        :param data: email, old-password, new--password
        :return: db_user
        """
    try:
        db_user = find_user_by_credentials(data["email"], data["old-password"])
        if db_user is None:
            raise QueryException("Failed to get user by email-{}".format(data['email']))

        password_hash = bcrypt.generate_password_hash(data['new-password'])
        db_user.password = password_hash
        db.session.commit()
        return db_user

    except UnauthorizedUserException as e:
        raise UnauthorizedUserException("Unauthorized user. Error {}".format(e))
