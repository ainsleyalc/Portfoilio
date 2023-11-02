import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getPortfolios } from "../../fetchers";
import { Portfolio } from "../elements";
import { PortfolioFilters } from "../utils";

const PortfoliosSection = () => {

  const data = [
    {
        "id": 1,
        "title": "Car Rental Template",
        "subtitle": "I have created a front-page template for a car rental website, showcasing my proficiency in HTML, CSS, and React. This template serves as a testament to my ability to design visually appealing and user-friendly websites, encapsulating the essence of a seamless and engaging online experience for potential car rental customers",
        "coverimage": "/images/portfolios/ss2.png",
        "imagegallery": [
            "/images/portfolios/ss2.png",
            "/images/portfolios/ss1.png",
            "/images/portfolios/portfolio-image-lg-17.jpg"
        ],
        "videogallery": true,
        "url": "https://carrental-1jor.onrender.com/",
        "filters": ["react"]
    },
    {
      "id": 1,
      "title": "Event-Hoster",
      "subtitle": "I have designed and developed a user-friendly and interactive website that facilitates the planning, attendance, and hosting of events by multiple users. This project prominently showcases my expertise in React, CSS, and HTML for the front-end, while concurrently featuring a robust back-end that exemplifies my proficiency in SQL, Python, database management, and the implementation of RESTful APIs. The website seamlessly incorporates full CRUD (Create, Read, Update, Delete) functionality, emphasizing my comprehensive skill set in both front-end and back-end web development.",
      "coverimage": "/images/portfolios/ss4.png",
      "imagegallery": [
          "/images/portfolios/ss4.png",

      ],
      "videogallery": true,
      "url": "https://carrental-1jor.onrender.com/",
      "filters": ["react"]
  }
  ]
  // States
  const [visiblePortfolios, setVisiblePortfolios] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("");
  const [pageNumber, setPageNumber] = useState(1);



  useEffect(() => {
    if (data) setVisiblePortfolios(data.slice(0, 6));
  }, [data]);

  // Portfolio Filter function
  const handleFilter = useCallback(
    (value) => {
      setCurrentFilter(value);
      if (value === "") {
        setVisiblePortfolios(data.slice(0, pageNumber * 6));
      } else {
        setVisiblePortfolios(
          data
            .slice(0, pageNumber * 6)
            .filter((portfolio) => portfolio.filters.includes(value))
        );
      }
    },
    [data, pageNumber]
  );

  // Load more function
  const handleLoadmore = useCallback(() => {
    setPageNumber((prevNumber) => prevNumber + 1);
    if (currentFilter === "") {
      setVisiblePortfolios(data.slice(0, (pageNumber + 1) * 6));
    } else {
      setVisiblePortfolios(
        data
          .slice(0, (pageNumber + 1) * 6)
          .filter((portfolio) => portfolio.filters.includes(currentFilter))
      );
    }
  }, [currentFilter, data, pageNumber]);

  

  return (
    <>
      <PortfolioFilters
        currentFilter={currentFilter}
        filterHandler={handleFilter}
      />
      <motion.div layout className="mt-12 grid grid-cols-6 gap-7">
        {visiblePortfolios?.map((portfolio) => (
          <motion.div
            layout
            exit={{ scale: 0 }}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.4,
            }}
            className="col-span-6 sm:col-span-3 lg:col-span-2"
            key={portfolio.id}
          >
            <Portfolio portfolio={portfolio} />
          </motion.div>
        ))}
      </motion.div>
      {visiblePortfolios < data ? (
        <div className="mt-12 text-center">
          <button className="btn btn-small" onClick={() => handleLoadmore()}>
            <span>Load More</span>
          </button>
        </div>
      ) : null}
    </>
  );
};

export default PortfoliosSection;
