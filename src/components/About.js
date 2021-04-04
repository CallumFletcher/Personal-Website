import React from "react";
import { Fade } from "@material-ui/core";
import "./MainContent.css";

function About({ aboutRef, aboutInView }) {
  return (
    <Fade in={aboutInView} timeout={1000}>
      <div className="section">
        <p className="text" id="about" ref={aboutRef}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          in porttitor justo. Quisque vitae massa risus. Pellentesque in dictum
          llis rhoncus. Mauris vulputate eros eget dui rhoncus ullamcorper. Nam
          imperdiet dui non justo aliquet, quis interdum nibh dignissim. Aenean
          orci ipsum, finibus ut enim sed, congue hendrerit andit nisl vitae
          fermentum. Sed accumsan nec tellus vel pharetra. Donec tincidunt
          dapibus metus, nec consectetur est scelerisque et. Proin sit amet
          tellus tortor.t. Nam viverra leo a tincidunt ornare. Integer vehicula
          sem euismod nulla imperdiet, nec euismod nisi faucibus. Praesent
          sodales id risus nec ornare. Nullam egestas quam id dapibus malesuada.
          Suspendisse vitae porta elit. Donec dapibus convallis pulvinar.
          Suspendisse congue nulla sed lectus mollis rhoncus. Mauris vulputate
          eros eget dui rhoncus ullamcorper. Nam imperdiet dui non justo
          aliquet, quis interdum nibh dignissim. Aenean orci ipsum, finibus ut
          enim sed, congue hendrerit andit nisl vitae fermentum. Sed accumsan
          nec tellus vel pharetra.v
        </p>
      </div>
    </Fade>
  );
}

export default About;
