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

        <div className="skills-container">
          <div className="skills-track">
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/reactnative/reactnative-original.svg" />
            </div>

            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" />
            </div>
            <div className="skill">
              <img src="assets/skills/Firebase.svg" />
            </div>

            <div className="skill">
              <img src="assets/skills/Postman.svg" alt="Postman" />
            </div>
            <div className="skill">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
            </div>

            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
                alt="Android Studio"
              />
            </div>
            <div className="skill">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg"
                alt="Xcode"
              />
            </div>
            <div className="skill">
              <img src="assets/skills/apple.svg" alt="Apple" />
            </div>
            <div className="skill">
              <img src="assets/skills/android.svg" alt="Android " />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default About;
