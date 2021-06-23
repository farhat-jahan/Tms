"""
Database queries relating to user operations.
"""
import os
import sys
from sqlalchemy.exc import *
from flask_bcrypt import Bcrypt

_CURRDIR = os.path.dirname(__file__)
_APPDIR = os.path.join(_CURRDIR, "..")
sys.path.append(_APPDIR)

from models import *
from TMSExceptions import *

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
        print(Role.from_str(user['role'].upper()))
        print(UserType.from_str(user['user_type'].upper()))
        try:
            password_hash = bcrypt.generate_password_hash(user['password'])
            new_user = User(first_name=user['first_name'], last_name=user['last_name'],
                            email=user['email'], password=password_hash,
                            role=Role.from_str(user['role'].upper()),
                            user_type=UserType.from_str(user['user_type'].upper()),
                            itu_id=user['itu_id'])

            db.session.add(new_user)
            db.session.commit()
            return new_user
        except Exception as exc:
            raise CreateNewItemException("Failed to create new user. Reason {}".format(exc))


def find_user_by_id(id):
    """find user by id.
    @params id: user_id
    @returns db_user if found else None
    raise: InvalidInputException, TimeoutException, QueryException
    """
    if id is None:
        raise InvalidInputException(" None id is provided ")

    db_user = None
    try:
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
    @returns db_user if found else Raise ItemNotFoundException
    raise: InvalidInputException, TimeoutException, QueryException
    """
    user = find_user_by_id(id)
    if not user.is_active:
        raise ItemNotFoundException("User with id {} not found".format(id))

    return user


def check_user_role(user):
    print(user.role)
    if user and user.role == Role.ADMIN:
        return True
    return False


### This function can be used as '_validate_user'
def find_user_by_email(user_email):
    """This function will check user by email and also checks if user is still active or not.
    :param user_email:
    :return: db_user (user object if user is active) else False
    """
    if user_email is None:
        raise InvalidInputException(" None Email is provided ")

    db_user = None
    try:
        db_user = User.query.filter_by(email=user_email).one()
    except TimeoutException as e:
        raise TimeoutException("Timeout error. Failed to get user by email-{}. Error {}".format(user_email,e))
    except Exception as e:
        raise QueryException("Failed to get user by email-{}. Error {}".format(user_email,e))

    if db_user and db_user.is_active is True:
        return db_user

    return False


def update_validated_user(validated_user, users_new_details):
    """This function updated the user in the DB
    :param validated_user: existing user object
    :param users_new_details: new user data to update the existing user
    :return:user id
    """
    try:
        validated_user.email = users_new_details['email']
        validated_user.role = Role.from_str(users_new_details['role'].upper())
        validated_user.user_type = UserType.from_str(users_new_details['user_type'].upper())
        validated_user.itu_id = users_new_details['itu_id'],
        validated_user.is_active = users_new_details['is_active']
        db.session.commit()

    except TimeoutError as e:
        raise TimeoutException("Timeout error. Failed to update user by email {}. Error {}".
                               format(users_new_details['email'], e))
    except Exception as e:
        raise UpdateException("Failed to update user , error-{}".format(e))

    return validated_user.id


def delete_user_by_id(id):
    """
        This funtion deletes the user by id.
        @params id: id
        raise: ItemNotFoundException, DeleteException, TimeoutException
    """
    try:
        user = find_user_by_id(id)
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
