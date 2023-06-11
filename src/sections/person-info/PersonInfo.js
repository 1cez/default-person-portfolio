import React, { useEffect } from "react";
import { useTypewriter } from "react-simple-typewriter";
import * as Styled from "./PersonInfo.styled";
import PersonImage from "../../assets/default-person.avif";

function PersonInfo({ theme, setTheme }) {
  const [text, setText] = useTypewriter({
    words: ["Default Person", "a Developer."],
    loop: Infinity,
    delay: 100,
    onLoopDone: () => {
      const titleElement = document.querySelector("title");
      if (titleElement) {
        titleElement.style.color = "green";
      }
    },
  });
  const getColorForWord = (word) => {
    if (word === "Default Person") {
      return "red";
    } else if (word === "a Developer") {
      return "lime";
    }
    return theme === "dark" ? "black" : "white";
  };

  return (
    <Styled.Container id="about-me">
      <div>
        <span>
          <span className="title-bold">Hello, </span>{" "}
          <span className="title" style={{ color: getColorForWord(text) }}>
            I am {text}
          </span>
        </span>
      </div>

      <div className="person-info-container">
        <div className="person-image-container">
          <img src={PersonImage} alt="images" />
        </div>
        <div className="person-description-container">
          <span>
            <span className="person-description-first-letter">L</span>
            orem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            numquam maxime quasi molestiae culpa tempore minima architecto amet,
            dolorem consequatur, commodi doloremque. Perspiciatis sint quis
            earum ratione dolor non maiores. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Nihil sit explicabo aliquam voluptatem
            delectus dicta laboriosam, aut exercitationem, eveniet tempora quo
            adipisci iste ad! Reprehenderit voluptatibus eius alias! Asperiores,
            laboriosam. consectetur adipisicing elit. Nihil sit explicabo
            aliquam voluptatem delectus dicta laboriosam, aut exercitationem,
            eveniet tempora quo adipisci iste ad! Reprehenderit voluptatibus
            eius alias! Asperiores, laboriosam. consectetur adipisicing elit.
            Nihil sit explicabo aliquam voluptatem delectus dicta laboriosam,
            aut exercitationem, eveniet tempora quo adipisci iste ad!
            Reprehenderit voluptatibus eius alias! Asperiores, laboriosam.
            consectetur adipisicing elit. Nihil sit explicabo aliquam voluptatem
            delectus dicta laboriosam, aut exercitationem, eveniet tempora quo
            adipisci iste ad! Reprehenderit voluptatibus eius alias! Asperiores,
            laboriosam.
          </span>
        </div>
      </div>
    </Styled.Container>
  );
}

export default PersonInfo;
