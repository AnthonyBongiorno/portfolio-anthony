import styled from "styled-components";
import { useState } from "react";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    window.alert("Thanks for reaching out!");
  };

  return (
    <div id="contact-section">
      <ContactDiv>
        <h1>Contact me!</h1>
        <h2>Get in touch</h2>
        <p>
          <span>Email</span> : bongiornoanthony6@gmail.com
        </p>
        <p>Thanks for checking out my portfolio!</p>
        <form onSubmit={handleSubmit}>
          <FormDiv>
            <StyledInput
              name="name"
              onChange={handleChange}
              placeholder="Name"
              value={formData.name}
            />
            <StyledInput
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email"
              value={formData.email}
            />
            <MessageAndSend>
              <StyledInput
                name="message"
                placeholder="Message"
                onChange={handleChange}
                value={formData.message}
              />
              <StyledButton type="submit">Send</StyledButton>
            </MessageAndSend>
          </FormDiv>
        </form>
      </ContactDiv>
    </div>
  );
};

const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 0 auto 100px;
  width: 55%;
  background-color: #05092e;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.3);
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }

  p {
    text-align: center;
  }
`;

const FormDiv = styled.div`
  background-color: #020724;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  justify-content: center;
  align-content: center;
  padding: 30px;
  border-radius: 10px;
`;
const StyledInput = styled.input`
  font-size: 1em;
  color: salmon;
  background-color: #05092e;
  border: salmon solid 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
`;

const StyledButton = styled.button`
  font-size: 1em;
  color: salmon;
  background-color: #05092e;
  border: salmon solid 1px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  width: 200px;
`;

const MessageAndSend = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  input {
    padding: 30px;
  }
`;

export default Contacts;
