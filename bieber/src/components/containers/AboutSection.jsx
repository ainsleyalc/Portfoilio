import Image from "next/image";
import { imageLoader, shimmer, toBase64 } from "../../lib/utils";
import { motion } from "framer-motion";
import { childrenAnimation } from "../../lib/motion";
import { getInformation } from "../../fetchers";
import { useQuery } from "react-query";

const AboutSection = () => {
 

 

  return (
    <div className="grid grid-cols-2 items-center gap-7">
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          variants={childrenAnimation}
          className="about-image overflow-hidden rounded-lg"
        >
          <div className="about-image-inner fiximage relative border-10 border-primary border-opacity-20">
            <span className="absolute -top-2.5 left-0 z-10 h-2.5 w-10 animate-ledgerleftright rounded-full bg-gradient-to-r from-transparent to-primary"></span>
            <span className="absolute top-auto -bottom-2.5 left-auto z-10 h-2.5 w-10 animate-ledgerrightleft rounded-full bg-gradient-to-r from-primary to-transparent"></span>
            <span className="absolute -left-2.5 top-auto z-10 h-10 w-2.5 animate-ledgerbottomtop rounded-full bg-gradient-to-t from-transparent to-primary"></span>
            <span className="absolute left-auto -right-2.5 z-10 h-10 w-2.5 animate-ledgertopbottom rounded-full bg-gradient-to-b from-transparent to-primary"></span>
            <Image
              loader={imageLoader}
              unoptimized={true}
              src={"https://media.licdn.com/dms/image/D4E35AQHOC84JPh5BeA/profile-framedphoto-shrink_400_400/0/1682360635723?e=1698433200&v=beta&t=4HstfbfNd5r55cohUOjZH1IaibDcfxEa7pgJxUMCzbw"}
              height={422}
              width={660}
              layout="responsive"
              alt={"AinsleyAcl"}
              placeholder="blur"
              blurDataURL={`data:image/svg+xml;base64,${toBase64(
                shimmer(660, 422)
              )}`}
            />
          </div>
        </motion.div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 }}
          variants={childrenAnimation}
          className="about-content"
        >
          <h3>
            Hi, I am <span className="text-primary">Ainsley Alceme</span>
          </h3>
          <ul className="styledlist">
            {"Ainsley" && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  First Name{" "}
                </strong>
                : Ainsley 
              </li>
            )}
            {"Alceme" && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Last Name{" "}
                </strong>
                : {"Alceme"}
              </li>
            )}
            {"20" && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Age{" "}
                </strong>
                : {"20"} years
              </li>
            )}
            {"Haitian-American" && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Nationality{" "}
                </strong>
                : {"Haitian-American"}
              </li>
            )}
            {3 ? (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Languages{" "}
                </strong>
                : {"English, Creole"}
              </li>
            ) : null}
            {"Palm Beach, Florida" && (
              <li className="text-lg">
                <strong className="inline-block min-w-[120px] font-medium">
                  Address{" "}
                </strong>
                : {"Palm Beach, Florida"}
              </li>
            )}
           
          </ul>
          <a href="/resume.pdf" className="btn mt-3">
            <span>Download Resume</span>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
