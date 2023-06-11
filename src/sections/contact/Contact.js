import React from "react";
import * as Styled from "./Contact.styled";
import ContactVector from "../../assets/contact.png";
function Contact({ theme, setTheme }) {
  return (
    <Styled.MainContainer id="contact">
      <h2>Contact</h2>
      <form>
        <Styled.Container theme={theme}>
          <div>
            <img src={ContactVector} alt="" />
          </div>
          <div className="contact-input-container">
            <div className="contacts">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>
            <div className="contacts">
              <label htmlFor="name">E-mail</label>
              <input type="email" id="name" placeholder="Enter your email" />
            </div>
            <div className="contacts">
              <label htmlFor="name">Subject</label>
              <textarea
                cols={40}
                rows={4}
                id="name"
                placeholder="Enter your subject"
              />
            </div>
            <div className="contacts-btn">
              <div>
                <button type="submit">Send</button>
              </div>
            </div>
          </div>
        </Styled.Container>
      </form>
    </Styled.MainContainer>
  );
}

export default Contact;
