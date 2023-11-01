import os
from flask import Flask , make_response , jsonify  , session, request
from flask_migrate import Migrate
from model import db, TechSkills, Services, Portfolio, LanguageSkills
from flask_sqlalchemy import SQLAlchemy
from flask_wtf import CSRFProtect

from sqlalchemy import MetaData

from flask_cors import CORS
from flask_restful import Api, Resource


app = Flask(__name__)
api = Api(app)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
migrate = Migrate(app,db,render_as_batch=True)




CORS(app)

db.init_app(app)


@app.route("/")
def home():
    return "<h1>hello<h1>"



class TechSkill(Resource):
    def get(self):
        techskills = []

        for skill in  TechSkills.query.all():
            techskills.append(skill.to_dict())
        return make_response(jsonify(techskills), 201)

api.add_resource(TechSkill,"/techskills")



class Languages(Resource):
    def get(self):
        languages = []
        for lang in LanguageSkills.query.all():
            languages.append(lang.to_dict())

        return make_response(jsonify(languages), 201)

api.add_resource(Languages, "/languages")





class Service(Resource):
    def get(self):
        services = []
        for service in Services.query.all():
            services.append(service.to_dict())
        return make_response(jsonify(services), 200)

api.add_resource(Service, "/services")
if __name__ == "__main__":
    app.run(debug=True)