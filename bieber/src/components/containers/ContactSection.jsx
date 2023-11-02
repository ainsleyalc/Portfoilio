import { motion } from "framer-motion";
import Link from "next/link";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { getInformation } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import ContactForm from "./ContactForm";
import { SocialIcons } from "../elements";

const ContactSection = () => {
 const data = {
  "firstName": "Ainsley",
  "lastName": "Alceme",
  "fullName": "Ainsley Alceme",
  "thumbImage": "/images/formal-image.png",
  "largeImage": "/images/about-image.jpg",
  "bio": "I am a frontend web developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
  "age": 220,
  "nationality": "Haitian-American",
  "languages": [
      "English",
      "Creole"
  ],
 
  "freelance": "Available",
  "socialAddress": {
      "facebook": "https://facebook.com",
      "twitter": "https://twitter.com",
      "github": "https://github.com",
      "linkedin": "https://linkedin.com",
      "dribbble": "https://dribbble.com"
  },
  "phoneNumbers": [
      "561-358-5753",
      "561-358-5753"
     
  ],
  "emailAddress": [
      "AinsleyAlcSe@gmail.com",
    
  ]
}

 

  return (
    <div className="grid grid-cols-9 gap-7">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.2 }}
        variants={childrenAnimation}
        className="col-span-9 lg:col-span-4"
      >
        <div className="contact-information">
          <h4>Contact Information</h4>
          <p>
          Feel free to contact me for anything
          </p>
          <span className="inline-block h-1 w-20 rounded-full bg-primary bg-opacity-20"></span>
          <div className="contact-blocks mt-5 space-y-5">
            <div className="contact-block card flex p-4 md:p-5">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                <RiPhoneLine />
              </span>
              <div className="content">
                <h5 className="mb-2">Contact on phone</h5>
                {data.phoneNumbers.map((number, index) => (
                  <p className="mb-0" key={index}>
                    <Link href={`tel:${number.split("-").join("")}`}>
                      <a className="no-underline">{number}</a>
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div className="contact-block card flex p-4 md:p-5">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                <RiMailLine />
              </span>
              <div className="content">
                <h5 className="mb-2">Contact on mail</h5>
                {data.emailAddress.map((email, index) => (
                  <p className="mb-0" key={index}>
                    <Link href={`mailto:${email}`}>
                      <a className="no-underline">{email}</a>
                    </Link>
                  </p>
                ))}
              </div>
            </div>
            <div className="contact-block card flex p-4 md:p-5">
              <span className="icon mr-4 inline-flex h-16 w-16 shrink-0 grow-0 basis-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-3xl text-primary">
                <RiMapPinLine />
              </span>
              <div className="content">
                <h5 className="mb-2">Links</h5>
                
                  <SocialIcons  />
              
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        variants={childrenAnimation}
        className="col-span-9 lg:col-span-5"
      >

      </motion.div>
    </div>
  );
};

export default ContactSection;
