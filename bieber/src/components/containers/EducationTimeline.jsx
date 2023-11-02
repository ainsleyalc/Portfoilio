import { motion } from "framer-motion";
import { RiBookLine } from "react-icons/ri";
import { useQuery } from "react-query";

import { childrenAnimation } from "../../lib/motion";
import { TimelineItem } from "../elements";

const EducationTimeline = () => {
 
    const data = [
        {
         "title":"High School Diploma",
         "meta":"Royal Palm Beach High School",
         "year":"2021"
        },
        {
            "title":"Coding BootCamp",
            "meta":"Flatiron School",
            "year":"03/2023 - 09/2023",
            "text":"I have undergone an intensive six-month Flatiron bootcamp, where I received comprehensive education in both frontend and backend web development. This experience not only equipped me with a deep understanding of these domains but also instilled in me the importance of effective teamwork and collaboration within a professional environment."
        }
    ]


    return (
        <div className="education-timeline">
            <h4>
                <RiBookLine className="mr-2 inline-block text-primary" />
                Educational Qualification
            </h4>
            {data?.map((timeline, index) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 * index }}
                    variants={childrenAnimation}
                    className="timeline-wrap"
                    key={timeline.id}
                >
                    <TimelineItem timeline={timeline} />
                </motion.div>
            ))}
        </div>
    );
};

export default EducationTimeline;
