import React from "react";
import { BookOpen, Briefcase } from "lucide-react";
import "./Pages.css";
import "./Resume.css";

const Resume = () => {
  return (
    <article className="article resume fade-in">
      <header>
        <h2 className="article-title">Resume</h2>
      </header>

      {/* Education */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOpen size={20} />
          </div>
          <h3 className="timeline-title">Education</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">
              Bachelor of Computer Applications (BCA)
            </h4>
            <span>2021 — 2024</span>
            <p className="timeline-text">
              Studied computer science fundamentals including programming,
              database systems, web technologies and software engineering.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Intermediate (Science)</h4>
            <span>2018 — 2020</span>
            <p className="timeline-text">
              Completed higher secondary education with focus on mathematics.
            </p>
          </li>
        </ol>
      </div>

      {/* Experience */}

      {/* <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Briefcase size={20} />
          </div>
          <h3 className="timeline-title">Experience</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">
              React Native Developer (Freelance)
            </h4>
            <span>2023 — Present</span>
            <p className="timeline-text">
              Developing cross-platform mobile applications using React Native.
              Worked on multiple apps including service booking platforms and
              vehicle service applications with Firebase backend.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Full Stack Developer</h4>
            <span>2022 — 2023</span>
            <p className="timeline-text">
              Built web applications using React.js and Node.js. Integrated REST
              APIs, authentication systems, and Firebase services for scalable
              backend solutions.
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Mobile App Publishing</h4>
            <span>2023 — Present</span>
            <p className="timeline-text">
              Experience publishing and managing applications on Google Play
              Store and Apple App Store including app optimization, store
              listing, screenshots, and metadata.
            </p>
          </li>
        </ol>
      </div> */}
    </article>
  );
};

export default Resume;
