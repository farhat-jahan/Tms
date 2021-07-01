import os, sys


_CURRDIR = os.path.dirname(__file__)
_APPDIR = os.path.join(_CURRDIR, "..")
sys.path.append(_APPDIR)

from flask_marshmallow import Marshmallow
from marshmallow_enum import EnumField
from models import app
from models import User, Role, UserType, Department

ma = Marshmallow(app)


class DepartmentSchema(ma.Schema):
    class Meta:
        model = Department
        fields = ('id', 'department_name', 'department_email')


department_schema = DepartmentSchema(many=True)

class UserSchema(ma.Schema):
    user_role = EnumField(Role, by_value=True)
    user_type = EnumField(UserType, by_value=True)

    class Meta:
        model = User
        ordered=True
        fields = ('first_name', 'last_name', 'email', 'user_role', 'user_type', 'employee_id', 'student_id', 'is_active')


user_schema = UserSchema(many=True)





