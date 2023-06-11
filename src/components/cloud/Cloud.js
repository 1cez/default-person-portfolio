import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import * as Styled from "./Cloud.styled";
import { MainContext } from "../../context/context";

function Cloud({ children, isBg }) {
  const { theme, setTheme } = useContext(MainContext);

  const onChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const [isClicked, setIsClicked] = useState(false);
  const [pathIndex, setPathIndex] = useState(0);
  const paths = [
    "M0,224L34.3,213.3C68.6,203,137,181,206,181.3C274.3,181,343,203,411,218.7C480,235,549,245,617,213.3C685.7,181,754,107,823,106.7C891.4,107,960,181,1029,208C1097.1,235,1166,213,1234,192C1302.9,171,1371,149,1406,138.7L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
    "M0,64L34.3,58.7C68.6,53,137,43,206,69.3C274.3,96,343,160,411,181.3C480,203,549,181,617,165.3C685.7,149,754,139,823,154.7C891.4,171,960,213,1029,218.7C1097.1,224,1166,192,1234,192C1302.9,192,1371,224,1406,240L1440,256L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z",
  ];

  const handleSVGClick = () => {
    onChange();
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    setIsClicked(true);

    const interval = setInterval(() => {
      setPathIndex((prevIndex) => (prevIndex + 1) % paths.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Styled.Container className={theme}>
      {children}
      <div>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          onClick={handleSVGClick}
        >
          <motion.path
            fill={isClicked ? "red" : "#0099ff"}
            fillOpacity="1"
            d={paths[pathIndex]}
            initial={false}
            animate={isClicked ? { d: paths[pathIndex] } : {}}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
          />
        </motion.svg>
      </div>
    </Styled.Container>
  );
}

export default Cloud;
