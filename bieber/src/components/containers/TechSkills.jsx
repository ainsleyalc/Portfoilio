import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getTechskills } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { ProgressCircle } from "../elements";
import axios from 'axios';
import { useState, useEffect } from "react";

const TechSkills = () => {



      const data = [
        {
        "id": 1,
        "percentage": 90,
        "title": "Back-End Development"
        },
        {
        "id": 2,
        "percentage": 95,
        "title": "Frontend Development"
        },
        {
        "id": 3,
        "percentage": 89,
        "title": "UI/UX Design"
        },
        {
        "id": 4,
        "percentage": 60,
        "title": "Mobile App Development"
        }
  ]

  return (
  
    <div className="grid grid-cols-4 gap-7">
      {data?.map((skill, index) => (
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 * index }}
          variants={childrenAnimation}
          className="col-span-4 sm:col-span-2 lg:col-span-1"
          key={skill.id}
        >
          <ProgressCircle skill={skill} />
        </motion.div>
       
      ))}
       
    </div>
  );  
};

export default TechSkills;
