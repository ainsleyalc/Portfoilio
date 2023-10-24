import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getTechskills } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { ProgressCircle } from "../elements";
import axios from 'axios';
import { useState, useEffect } from "react";

const TechSkills = () => {
  const { data } = useQuery("tech-skills", getTechskills);
  const [techSkills, setTechSkills] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/techskills')
      .then((response) => {
        setTechSkills(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  return (
  
    <div className="grid grid-cols-4 gap-7">
      {techSkills?.map((skill, index) => (
        
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
       {console.log(techSkills)}
    </div>
  );  
};

export default TechSkills;
