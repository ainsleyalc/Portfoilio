import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getLanguageskills } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { ProgressBar } from "../elements";
import axios from "axios";
import { useState, useEffect } from "react";

const LanguageSkills = () => {
  const { data } = useQuery("language-skills", getLanguageskills);


  const langSkills = [
    {
    "id": 1,
    "percentage": 95,
    "title": "Javascript"
    },
    {
    "id": 2,
    "percentage": 99,
    "title": "React Js"
    },
    {
    "id": 3,
    "percentage": 90,
    "title": "HTML & CSS"
    },
    {
    "id": 4,
    "percentage": 70,
    "title": "Node JS (learning)"
    },
    {
    "id": 5,
    "percentage": 90,
    "title": "Python"
    },
    {
    "id": 6,
    "percentage": 99,
    "title": "Flask"
    },
    {
    "id": 7,
    "percentage": 98,
    "title": "SQL"
    }
    ]

  return (
    <div className="grid grid-cols-2 gap-7">
      {langSkills?.map((skill, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 * index }}
          variants={childrenAnimation}
          className="col-span-2 md:col-span-1"
          key={skill.id}
        >
          <ProgressBar skill={skill} />
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageSkills;
