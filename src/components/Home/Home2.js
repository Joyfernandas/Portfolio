import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with Cyber Security and I have at least learnt
              something, I think… 🤷‍♂️ <br/>
              I am a dedicated Cyber Security professional with over a year of part-time experience in the field. My primary goal is to assist companies in fortifying their infrastructure and identifying potential vulnerabilities in products and applications, ensuring the security of both the company and its clients. I am committed to safeguarding data and reputation from malicious hackers and global cyber threats
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> React, Javascript ,python. </b>
              </i>
              <br />
              <br />
              Possessing a Bachelor's degree in Computer Science I specialize in penetration testing, vulnerability assessments, and securing web/mobile applications and infrastructure. My day typically commences with in-depth research on various security aspects, and I actively seek out vulnerabilities in applications to preempt cyber threats&nbsp;
              <i>
                <b className="purple">  <br/> Engaging in bug bounty , Capture The Flag (CTF) events, and discussing cybersecurity topics are integral parts of my professional life. I thrive on staying abreast of the latest technologies and consistently strive to expand my skill set.</b> 
               {""}
                <b className="">
                I am eager to contribute my creative methodologies  and out-of-the-box thinking to an organization that values teamwork.
                </b>
              </i>
              <br />
              <br />
              If you have any relevant opportunities, please feel free to contact me at  . 
              with <b className="purple"> (+91)6384612873</b> or
              <i>
                <b className="purple">
                  {" "}
                  joyfernandas186@gmail.com
                </b>
              </i>
              &nbsp; I appreciate your consideration. Thank you.
              <i>
                <b className="purple"> </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Joyfernandas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/i_joyfernandas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joy-fernandas/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/__mr._blackk/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
