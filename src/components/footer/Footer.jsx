import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          🎬 Welcome to the CineScout! 🍿 🚀 Developed by Akash Kulkarni, this
          website showcases the perfect blend of creativity and technical
          expertise. Tech stack for this website includes React, SCSS, Redux,
          and Redux Toolkit, ensuring a seamless and engaging user experience.
          🌟 As movie enthusiasts myself, I have poured my efforts and passion
          into creating this platform. Here, you'll find information about your
          favorite films, from plot summaries to cast details and more. 🤝 I am
          on the lookout for an internship opportunity to further enhance my
          skills and contribute to exciting projects. If you're interested in
          collaborating with a motivated student developer, I'd love to hear
          from you! Feel free to reach out via the contact information provided.
        </div>
        <div className="infoText" >
        EmailId : akashkulkarni4444@gmail.com        Phone Number: +91 9834947924
        </div>
        <div className="socialIcons">
          <a href="https://github.com/AkashKulkarni4444">
            <span className="icon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.instagram.com/akashkulkarni4444/">
            <span className="icon">
              <FaInstagram />
            </span>
          </a>
          {/* <a href="akashkulkarni4444@gmail.com">
            <span className="icon">
              <FaEnvelope />
            </span>
          </a> */}
          <a href="https://www.linkedin.com/in/akashkulkarni4444/">
            <span className="icon">
              <FaLinkedin />
            </span>
          </a>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
