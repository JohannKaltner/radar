import React from "react";
import "./index.css";
// import { Container } from './styles';

function Footer() {
  return (
    <div className="footer-container">
      <ul className="footer-ul">
        <li className="footer-li">
          <a href="https://www.linkedin.com/in/johann-kaltner-d-oliveira-b3877015b/">
            LinkedIn
          </a>
        </li>

        <li className="footer-li">
          <a href="mailto:johannkaltnerdev@gmail.com">Email</a>
        </li>

        <li className="footer-li">
          <a href="https://github.com/JohannKaltner">Github</a>
        </li>
        <li className="footer-li">
          <p>👋</p>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
