from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from sqlalchemy_utils import PasswordType

app = Flask(__name__)
# Below is the set up for database where database=tms, db_password=password12, db_user=root, db_host=localhost
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password12@localhost/tms'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Base(db.Model):
    __abstract__ = True
    created_date = db.Column(db.DateTime, index=False, unique=False, nullable=False)
    modified_date = db.Column(db.DateTime, index=False, unique=False, nullable=False)


class Department(db.Model):
    """ Model for Departments list """

    __tablename__ = 'department'
    id = db.Column(db.Integer, primary_key=True)
    department_name = db.Column(db.String(80), unique=True, nullable=False)
    department_email = db.Column(db.String(120), unique=True, nullable=False)

    def __repr__(self):
        return '<Department Name  %r>' % self.department_name


class TaskType(Base):
    """ Model for Task Types list """

    __tablename__ = 'task_type'
    id = db.Column(db.Integer, primary_key=True)
    task_type = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<Task-Type  %r>' % self.task_type


class TaskPriority(Base):
    """ Model for Task Priority list """

    __tablename__ = 'task_priority'
    id = db.Column(db.Integer, primary_key=True)
    task_priority = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<Task-Priority-  %r>' % self.task_priority


class TaskState(Base):
    """ Model for Task State list """

    __tablename__ = 'task_state'
    id = db.Column(db.Integer, primary_key=True)
    task_state = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<Task-state  %r>' % self.task_state


class Role(Base):
    """ Model for staff Role list """

    __tablename__ = 'role'
    id = db.Column(db.Integer, primary_key=True)
    role_type = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<Role  %r>' % self.role_type


class User(Base):
    """ Model for User details """

    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(50), unique=False, nullable=False)
    last_name = db.Column(db.String(50), unique=False, nullable=True)
    email = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(PasswordType(
        schemes=[
            'pbkdf2_sha512',
            'md5_crypt'
        ],

        deprecated=['md5_crypt']
    ), nullable=False)

    role_id = db.Column(db.Integer, db.ForeignKey('role.id'), unique=False, nullable=False)

    def __repr__(self):
        return '<User(Firstname=%s, Email=%s)>' % (self.first_name, self.email)


class Employee(Base):
    """ Model for Employees list """

    __tablename__ = 'employee'
    id = db.Column(db.Integer, primary_key=True)
    itu_emp_id = db.Column(db.Integer, unique=True, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=True, nullable=False)

    def __repr__(self):
        return '<Itu-EMP-ID  %d>' % self.itu_emp_id


class EmployeeDepartment(Base):
    """ Model for Employee's Department """

    __tablename__ = 'employee_department'
    id = db.Column(db.Integer, primary_key=True)
    dept_id = db.Column(db.Integer, db.ForeignKey('department.id'), unique=True, nullable=False)
    emp_id = db.Column(db.Integer, db.ForeignKey('employee.id'), unique=True, nullable=False)

    def __repr__(self):
        return '<EmpDpt(DeptId=%d, EmpId=%d)>' % (self.dept_id, self.emp_id)


class Task(Base):
    """ Model for Task """

    __tablename__ = 'task'
    id = db.Column(db.Integer, primary_key=True)
    task_title = db.Column(db.String(50), unique=False, nullable=False)
    description = db.Column(db.String(100), unique=False, nullable=True)
    task_state_id = db.Column(db.Integer, db.ForeignKey('task_state.id'), unique=True, nullable=False)
    task_priority_id = db.Column(db.Integer, db.ForeignKey('task_priority.id'), unique=True, nullable=False)
    department_id = db.Column(db.Integer, db.ForeignKey('department.id'), unique=True, nullable=False)
    assignee_id = db.Column(db.Integer, db.ForeignKey('employee.id'), unique=True, nullable=False)
    originator_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=True, nullable=False)

    def __repr__(self):
        return '<(TaskTitle=%d)>' % (self.task_title)


class Discussion(Base):
    """ Model for Discussion  """

    __tablename__ = 'discussion'
    id = db.Column(db.Integer, primary_key=True)
    discussion_text = db.Column(db.String(100), unique=False, nullable=True)
    originator_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)
    task_id = db.Column(db.Integer, db.ForeignKey('task.id'), unique=True, nullable=False)


class Attachment(Base):
    """ Model for Attachment  """

    __tablename__ = 'attachment'
    id = db.Column(db.Integer, primary_key=True)
    attachment_text = db.Column(db.String(100), unique=False, nullable=True)
    attachment_url = db.Column(db.Integer, unique=True, nullable=True)
    originator_id = db.Column(db.Integer, db.ForeignKey('user.id'), unique=False, nullable=True)

    def __repr__(self):
        return '<(Attachment URL=%r)>' % (self.attachment_url)
