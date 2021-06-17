from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:password12@localhost/tms'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Base(db.Model):
    __abstract__ = True
    created_date = db.Column(db.DateTime, index=False, unique=False, nullable=False)
    modified_date = db.Column(db.DateTime, index=False, unique=False, nullable=False)


class Departments(db.Model):
    """ Model for Departments list """

    __tablename__ = 'departments'
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
    """ Model for Task Types list """

    __tablename__ = 'role'
    id = db.Column(db.Integer, primary_key=True)
    role_type = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return '<Role  %r>' % self.role_type
