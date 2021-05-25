import { Button, Fade } from "@material-ui/core";
import { Email, GitHub, LinkedIn, Phone } from "@material-ui/icons";
import React from "react";
import ContactForm from "./ContactForm";
import { DevpostIcon } from "./Icons";
import "./MainContent.css";

function Contact({ contactRef, contactInView }) {
  return (
    <Fade in={contactInView} timeout={1000}>
      <div
        className="section"
        id="contact"
        ref={contactRef}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <ContactForm />
        <Button
          onClick={() =>
            (window.location.href = "mailto:callum.fletcher@uwaterloo.ca")
          }
        >
          <Email className="material-icon" />
          <p className="button-text" style={{ textTransform: "lowercase" }}>
            callum.fletcher@uwaterloo.ca
          </p>
        </Button>
        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/callumfletcher", "_blank")
          }
        >
          <LinkedIn className="material-icon" />
          <p className="button-text" style={{ textTransform: "none" }}>
            LinkedIn
          </p>
        </Button>
        <Button
          onClick={() =>
            window.open("https://github.com/CallumFletcher", "_blank")
          }
        >
          <GitHub className="material-icon" />
          <p className="button-text" style={{ textTransform: "none" }}>
            @CallumFletcher
          </p>
        </Button>
        <Button
          onClick={() => window.open("https://devpost.com/CallumFletcher")}
        >
          <DevpostIcon className="material-icon" />
          <p className="button-text" style={{ textTransform: "none" }}>
            DevPost
          </p>
        </Button>
        <Button onClick={() => (window.location.href = "tel:7788381925")}>
          <Phone className="material-icon" />
          <p className="button-text" style={{ textTransform: "lowercase" }}>
            (778)-838-1925
          </p>
        </Button>
      </div>
    </Fade>
  );
}

export default Contact;
