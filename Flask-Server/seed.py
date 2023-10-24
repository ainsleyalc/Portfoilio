from sqlalchemy.orm import sessionmaker
from model import db, TechSkills, Services, Portfolio, LanguageSkills
from app import app
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate






def delete_records():
        TechSkills.query.delete()
        Services.query.delete()
        Portfolio.query.delete()
        LanguageSkills.query.delete()
        db.session.commit()

def create_sample_data():
    with app.app_context():
        backend = TechSkills(title="Back-End Development",percentage=90)
        frontend = TechSkills(title="Frontend Development", percentage=95)
        UIux = TechSkills(title="UI/UX Design",percentage=89)
        MobilApp = TechSkills(title="Mobile App Development", percentage=60)


        javascript = LanguageSkills(title="Javascript",percentage=95)
        react = LanguageSkills(title="React Js", percentage=99)
        htmlCss = LanguageSkills(title="HTML & CSS", percentage=90)
        Node = LanguageSkills(title="Node JS (learning)",percentage=70)
        python = LanguageSkills(title="Python", percentage=90)
        flask = LanguageSkills(title="Flask", percentage=99)
        sql = LanguageSkills(title="SQL", percentage=98)
     
        db.session.add(backend)
        db.session.add(frontend)
        db.session.add(UIux)
        db.session.add(MobilApp)
        db.session.add(javascript)
        db.session.add(react)
        db.session.add(htmlCss)
        db.session.add(Node)
        db.session.add(python)
        db.session.add(flask)
        db.session.add(sql)
        db.session.commit()
       

if __name__ == '__main__':
    with app.app_context():
        delete_records()
        create_sample_data()