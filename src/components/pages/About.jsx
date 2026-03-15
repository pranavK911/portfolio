import React from "react";
import { Layers, Globe, Smartphone, Monitor } from "lucide-react";
import "./Pages.css";

const About = () => {
  return (
    <article className="article about fade-in">
      <header>
        <h2 className="article-title">About Me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm <b>Pranav Kumar</b>, a passionate Software Developer based in
          Patna, Bihar, India. I specialize in building scalable mobile
          applications, modern web platforms, and{" "}
          <b>cross-platform solutions</b>.
        </p>

        <p>
          My work focuses on React, React Native, Node.js, and Firebase. I enjoy
          developing high-performance apps, solving real-world problems, and
          creating smooth user experiences across{" "}
          <b>mobile, web, and cross-platform</b> applications.
        </p>
      </section>

      <section className="service">
        <h3 className="service-title">What I'm Doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <Globe size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">Web Development</h4>
              <p className="service-item-text">
                Developing fast and responsive web applications using React and
                modern frontend technologies.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Smartphone size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">Mobile App Development</h4>
              <p className="service-item-text">
                Building cross-platform mobile apps using React Native for
                Android and iOS.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Layers size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">Backend Development</h4>
              <p className="service-item-text">
         
                Firebase, and REST APIs. Experienced in authentication,
                real-time databases, cloud functions, and mobile app
                integration.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <Monitor size={40} />
            </div>

            <div className="service-item-info">
              <h4 className="service-item-title">App Deployment</h4>
              <p className="service-item-text">
                Publishing and managing applications on Google Play Store and
                Apple App Store.
              </p>
            </div>
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <h3 className="skills-title">Skills</h3>

        <div className="skills-item-box">
          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <span>JavaScript</span>
          </div>
          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <span>React</span>
          </div>

          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg"
              alt="React Native"
            />
            <span>React Native</span>
          </div>
          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
              alt="iOS"
            />
            <span>iOS</span>
          </div>

          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
              alt="Android"
            />
            <span>Android</span>
          </div>

          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
              alt="Xcode"
            />
            <span>Xcode</span>
          </div>
          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
              alt="Android Studio"
            />
            <span>Android Studio</span>
          </div>
          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
              alt="SwiftUI"
            />
            <span>SwiftUI</span>
          </div>
          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
            <span>Node.js</span>
          </div>

          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
              alt="Firebase"
            />
            <span>Firebase</span>
          </div>

          <div className="skills-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
              alt="Git"
            />
            <span>Git</span>
          </div>
          {/* <div className="skills-item"> */}
            {/* <img
              src="https://assets.codepen.io/16327/gsap-logo.svg"
              alt="GSAP"
            />
            <span>GSAP</span> */}
          {/* </div> */}
        </div>
      </section>
    </article>
  );
};

export default About;
