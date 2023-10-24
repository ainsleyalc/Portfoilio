import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getLanguageskills } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { ProgressBar } from "../elements";
import axios from "axios";
import { useState, useEffect } from "react";

const LanguageSkills = () => {
  const { data } = useQuery("language-skills", getLanguageskills);
  const [langSkills, setLangSkills] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/languages')
      .then((response) => {
        setLangSkills(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

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
