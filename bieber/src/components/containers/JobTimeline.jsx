import { motion } from "framer-motion";
import { RiBriefcaseLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { getJobExperience } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { TimelineItem } from "../elements";

const JobTimeline = () => {


    const data = [
        {
            "id": 1,
            "title": "Xfinity Technician",
            "meta": "Xfinity/Comcast",
            "text": "My prior role as a technician at Xfinity involved daily responsibilities centered around troubleshooting and diagnosing issues within residential settings. This experience significantly contributed to the refinement of my teamwork and communication skills. Furthermore, it has served to enhance my leadership abilities, augmenting my proficiency in problem-solving and customer service.",
            "year": "2021 - 2023"
        },
    ]


    return (
        <div className="job-experience">
            <h4>
                <RiBriefcaseLine className="mr-2 inline-block text-primary" />
                Working Experience
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

export default JobTimeline;
