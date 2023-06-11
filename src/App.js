import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as Styled from "./App.styled";
import { MainContext } from "./context/context";

import Cloud from "./components/cloud/Cloud";
import Timelines from "./components/timelines/Timelines";
import ContentContainer from "./components/content-container/ContentContainer";
import PersonInfo from "./sections/person-info/PersonInfo";
import Socials from "./sections/socials/Socials";
import Contact from "./sections/contact/Contact";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [personInfoRef, personInfoInView] = useInView();
  const [socialsRef, socialsInView] = useInView();
  const [contactRef, contactInView] = useInView();
  const timeline = useRef();
  const [selectedSection, setSelectedSection] = useState(0);
  const [theme, setTheme] = useState("light");
  const [localTheme, setLocalTheme] = useState();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setTheme(storedTheme || "light");
    setLocalTheme(storedTheme || "light");
  }, []);

  const data = {
    theme,
    setTheme,
  };

  const springConfig = { damping: 45, stiffness: 1000 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  const handleMouseMove = (e) => {
    cursorX.set(e.clientX - 16);
    cursorY.set(e.clientY - 16);
  };

  const handleSectionChange = (index) => {
    setSelectedSection(index);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <MainContext.Provider value={data}>
      <Styled.MainContainer
        theme={theme}
        setTheme={setTheme}
        id="timeline100500"
        ref={timeline}
        className="timeline"
      >
        <motion.div
          className={`cursor ${isClicked ? "clicked" : ""}`}
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
          onClick={handleClick}
        />
        <Cloud isBg={true} theme={theme} setTheme={setTheme} />

        <Timelines
          selectedSection={selectedSection}
          onSectionChange={handleSectionChange}
          theme={theme}
          setTheme={setTheme}
        />
        <ContentContainer>
          <motion.div
            ref={personInfoRef}
            initial={{ opacity: 0, y: 100 }}
            animate={personInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <PersonInfo theme={theme} setTheme={setTheme} />
          </motion.div>
        </ContentContainer>
        <motion.div
          ref={socialsRef}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            position: "fixed",
            bottom: "50%",
            left: "50%",
            transform: "translate(-50%, 50%)",
          }}
        >
          <Socials theme={theme} setTheme={setTheme} />
        </motion.div>

        <ContentContainer>
          <motion.div
            ref={contactRef}
            initial={{ opacity: 0, y: 100 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Contact theme={theme} setTheme={setTheme} />
          </motion.div>
        </ContentContainer>
      </Styled.MainContainer>
    </MainContext.Provider>
  );
}

export default App;
