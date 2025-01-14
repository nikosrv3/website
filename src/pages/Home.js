import React from "react";
import '../styles/Home.css'; 
import { TypeAnimation } from 'react-type-animation';



const Homepage = () => {
    const scrollToBio = () => {
        const bioSection = document.getElementById("bio");
        if (bioSection) {
            bioSection.scrollIntoView({ behavior: "smooth" });
        }
        };
  return (
    <div>
      {/* Name Section */}
      <section id="home" className="name">
        <div className="name-container">
        <a id="main-title">Hi, I'm Nikos.</a>
            <TypeAnimation
            sequence={[
                "I'm a computer science student at Georgia Tech",
                1000,
                () => {
                console.log('Sequence completed');
                },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ whiteSpace: 'pre-line', display: 'inline-block', fontSize: '2em', color: '#f0ddd5' }}
            />
            </div>
      </section>
      {/*<button id="more" onClick={scrollToBio}>Learn More<br />▼</button>

      <section id="bio" className="bio">
        <h2>About Me</h2>
        <p>
          I am a dedicated computer science student at Georgia Tech with a passion for software development
          and innovative technology solutions. In my spare time, I enjoy exploring new programming languages,
          working on personal projects, and contributing to open-source initiatives.
        </p>
      </section>
        */}
    </div>
  );
};

export default Homepage;
