import { useState, useEffect, useRef } from "react";
import { Timeline } from "antd";
import * as Styled from "./Timelines.styled";

const Timelines = ({ theme, sethTheme, selectedSection, onSectionChange }) => {
  const timelineRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;

      if (sectionRefs.current.length === 0) return;

      const sectionPositions = sectionRefs.current.map((ref) => {
        return ref.offsetTop;
      });

      const selectedSectionIndex = sectionPositions.findIndex(
        (position) => scrollPosition >= position
      );

      onSectionChange(selectedSectionIndex);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [onSectionChange]);

  const handleSectionRef = (ref, index) => {
    if (!sectionRefs.current[index]) {
      sectionRefs.current[index] = ref;
    }
  };

  const handleTimelineItemClick = (id, index) => {
    const sectionElement = document.getElementById(id);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop,
        behavior: "smooth",
      });
      onSectionChange(index);
    }
  };

  return (
    <Styled.TimelineContainer theme={theme}>
      <Timeline
        ref={timelineRef}
        style={{
          position: "fixed",
          left: "2%",
          top: "30%",
        }}
      >
        {[
          { id: "about-me", children: "About Me" },
          { id: "contact", children: "Contact" },
        ].map((item, index) => (
          <Timeline.Item
            key={item.id}
            ref={(ref) => handleSectionRef(ref, index)}
            data-section={item.id}
            color={selectedSection === index ? "blue" : "red"}
            onClick={() => handleTimelineItemClick(item.id, index)}
            style={{
              height: "300px",
            }}
          >
            {item.children}
          </Timeline.Item>
        ))}
      </Timeline>
    </Styled.TimelineContainer>
  );
};

export default Timelines;
