import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin,X } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src="/assets/profile_avatar.png" alt="Pranav Kumar" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Pranav Kumar">
            Pranav Kumar
          </h1>
          <p className="title">Mobile App Developer</p>
        </div>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Mail size={18} />
            </div>

            <div className="contact-info">
              <p className="contact-title">EMAIL</p>
              <a href="mailto:pranavmandal213@gmail.com" className="contact-link">
                pranavmandal213@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <Phone size={18} />
            </div>

            <div className="contact-info">
              <p className="contact-title">PHONE</p>
              <a href="tel:+917488610183" className="contact-link">
                +91 74886 10183
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <MapPin size={18} />
            </div>

            <div className="contact-info">
              <p className="contact-title">LOCATION</p>
              <address>Patna, Bihar, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/pranav-kumar-3930b9256/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              {/* <Linkedin size={20} />   */}
              <img
                src="/assets/socials/linkedin.svg"
                alt="LinkedIn"
                width={25}
                height={25}
              />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://github.com/pranavK911"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              {/* <Github size={20} /> */}
              <img
                src="/assets/socials/github.svg"
                alt="GitHub"
                width={25}
                height={25}
              />
            </a>
          </li>

          <li className="social-item">
            <a
              href="https://x.com/pranavK911"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              {/* <X size={20} /> */}
              <img
                src="/assets/socials/x.svg"
                alt="X (Twitter)"
                width={25}
                height={25}
              />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
