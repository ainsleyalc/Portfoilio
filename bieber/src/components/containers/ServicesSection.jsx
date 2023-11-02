import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getServices } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { Service } from "../elements";
import { useState, useEffect } from "react";
import axios from "axios";
const ServicesSection = () => {


const services  =[
  {
  "icon": "/icons/quill-pen-line.svg",
  "id": 1,
  "text": "I possess the expertise to adeptly craft web page front-end designs that are characterized by interactivity and user-friendliness. My proficiency extends to the realm of user experience design, ensuring that the digital interfaces I create are not only visually engaging but also tailored to offer a seamless and intuitive user experience.",
  "title": "Ui/Ux Design"
  },
  {
  "icon": "/icons/code-s-slash-line.svg",
  "id": 2,
  "text": "My skillset encompasses proficiency in both front-end and back-end web applications. I possess the capability to adeptly diagnose and resolve issues, as well as enhance web applications through the integration of immersive and efficient code, with the ultimate aim of enhancing user experiences and simplifying operational processes.",
  "title": "Web Development"
  },
  {
  "icon": "/icons/code-s-slash-line.svg",
  "id": 3,
  "text": "My expertise extends to the realm of databases and RESTful APIs, enabling me to proficiently manage data and develop robust application interfaces that adhere to industry standards. This knowledge empowers me to seamlessly bridge the gap between data management and user interaction, facilitating a more streamlined and efficient digital ecosystem.",
  "title": "Database"
  }
  ]


  return (
    <div className="services-wrapper grid grid-cols-3 gap-7">
      {services?.map((service, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 * index }}
          variants={childrenAnimation}
          className="col-span-3 lg:col-span-1"
          key={service.id}
        >
          <Service service={service} />
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesSection;
