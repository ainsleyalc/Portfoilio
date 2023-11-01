from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy import Column, Integer, String 
from sqlalchemy.ext.hybrid import hybrid_property

convention = {
    "ix": 'ix_%(column_0_label)s',
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}
metadata = MetaData(naming_convention=convention)
db = SQLAlchemy(metadata=metadata)




class TechSkills(db.Model, SerializerMixin):
     __tablename__ = "techskills"
     id = db.Column(db.Integer, primary_key=True)
     title = db.Column (db.String)
     percentage = db.Column(db.Integer)


class Services(db.Model, SerializerMixin):
    __tablename__ = "services"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column (db.String)
    icon = db.Column (db.String)
    text = db.Column(db.String)



class Portfolio(db.Model,SerializerMixin):
    __tablename__ = 'portfolios'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    subtitle = db.Column(db.String)
    coverimage = db.Column(db.String)
    url = db.Column(db.String)
    filters = db.Column(db.String)


class LanguageSkills(db.Model, SerializerMixin):
    __tablename__= "languageskills"
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    percentage = db.Column(db.Integer)



