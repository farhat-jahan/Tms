import os, sys


_CURRDIR = os.path.dirname(__file__)
_APPDIR = os.path.join(_CURRDIR, "..")
sys.path.append(_APPDIR)

from flask_marshmallow import Marshmallow
from models import app
from models import *

ma = Marshmallow(app)


class DepartmentSchema(ma.Schema):
    class Meta:
       # model = Department
        fields = ('id', 'department_name', 'department_email')


department_schema = DepartmentSchema(many=True)
