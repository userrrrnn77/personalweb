import React from "react";
import "./About.css";
import { FaLaptopCode } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiMongodb } from "react-icons/si";
import { SiXampp } from "react-icons/si";
import { SiTestcafe } from "react-icons/si";
import Testi1 from "../../assets/avatar-1.png";
import Testi2 from "../../assets/avatar-2.png";
import Testi3 from "../../assets/avatar-3.png";
import Testi4 from "../../assets/avatar-4.png";

const About = () => {
  return (
    <div className="about">
      <div className="aboutParagraf">
        <p className="aboutParagrafPertama">
          A web developer is responsible for developing and maintaining a
          website, ensuring functionality and an attractive appearance. They use
          programming languages ​​such as HTML, CSS, and JavaScript to build
          responsive user interfaces. Web developers also often work with
          backend technology to manage data and ensure optimal site performance.
        </p>
        <p className="aboutParagrafDua">
          Apart from technical skills, web developers must have problem-solving
          skills to overcome challenges in development. They work closely with
          designers and other teams to ensure the site meets user needs and is
          compatible across devices and browsers. Good communication skills are
          also important for explaining technical concepts to non-technical team
          members, ensuring effective collaboration. This expertise helps them
          create functional and aesthetic solutions.
        </p>
      </div>
      <div className="aboutTeknologi">
        <div className="aboutTekTitle">
          <FaLaptopCode className="aboutIconTitle" />
          <h1 className="aboutTekJudul">Technology</h1>
        </div>
        <div className="aboutTekRincian">
          <div className="tekRincian">
            <div className="tekIcon">
              <FaHtml5 className="iconTekRincian" />
            </div>
            <div className="tekRincianText">
              <p className="tekTitleRincian">HTML</p>
              <p className="tekTitleDesc">
                HTML is a markup language used to create the structure of web
                pages.
              </p>
            </div>
          </div>
          <div className="tekRincian">
            <div className="tekIcon">
              <FaCss3Alt className="iconTekRincian css" />
            </div>
            <div className="tekRincianText">
              <p className="tekTitleRincian">CSS</p>
              <p className="tekTitleDesc">
                CSS is used to regulate the appearance and layout of elements on
                a web page.
              </p>
            </div>
          </div>
          <div className="tekRincian">
            <div className="tekIcon">
              <IoLogoJavascript className="iconTekRincian js" />
            </div>
            <div className="tekRincianText">
              <p className="tekTitleRincian">JavaScript</p>
              <p className="tekTitleDesc">
                JavaScript is a programming language used to add interactivity
                to web pages.
              </p>
            </div>
          </div>
          <div className="tekRincian">
            <div className="tekIcon">
              <FaReact className="iconTekRincian react" />
            </div>
            <div className="tekRincianText">
              <p className="tekTitleRincian">React</p>
              <p className="tekTitleDesc">
                HTML5 is the latest version of HTML that introduces new elements
                and supports multimedia without the need for additional plugins.
              </p>
            </div>
          </div>
          <div className="tekRincian">
            <div className="tekIcon">
              <FaNodeJs className="iconTekRincian nodejs" />
            </div>
            <div className="tekRincianText ">
              <p className="tekTitleRincian">Node JS</p>
              <p className="tekTitleDesc">
                Node.js is a JavaScript runtime that allows executing JavaScript
                code on the server side.
              </p>
            </div>
          </div>
          <div className="tekRincian">
            <div className="tekIcon">
              <GrMysql className="iconTekRincian mysql" />
            </div>
            <div className="tekRincianText">
              <p className="tekTitleRincian">My SQL</p>
              <p className="tekTitleDesc">
                MySQL is a relational database management system used to store
                and manage data efficiently.
              </p>
            </div>
          </div>
          <div className="tekRincian">
            <div className="tekIcon">
              <SiMongodb className="iconTekRincian mongodb" />
            </div>
            <div className="tekRincianText">
              <p className="tekTitleRincian">Mongo DB</p>
              <p className="tekTitleDesc">
                MongoDB is a NoSQL database that stores data in JSON document
                format, enabling high flexibility and scalability.
              </p>
            </div>
          </div>
          <div className="tekRincian">
            <div className="tekIcon">
              <SiXampp className="iconTekRincian xampp" />
            </div>
            <div className="tekRincianText">
              <p className="tekTitleRincian">XAMPP</p>
              <p className="tekTitleDesc">
                XAMPP is a software package that provides a local server
                environment for web development, including Apache, MySQL, and
                PHP.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutTesti">
        <div className="aboutTekTitle">
          <div className="aboutTekTitle">
            <SiTestcafe className="aboutIconTitle" />
            <h1 className="aboutTekJudul">Testimonials</h1>
          </div>
        </div>
        <div className="testiTestimonials">
          <div className="testiTest">
            <div className="testiImage">
              <img className="testImageFace" src={Testi1} alt="test1" />
            </div>
            <div className="testiRincian">
              <h3 className="testNama">Jumari</h3>
              <p className="testIsi">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                deserunt!
              </p>
            </div>
          </div>
          <div className="testiTest">
            <div className="testiImage">
              <img className="testImageFace" src={Testi2} alt="test1" />
            </div>
            <div className="testiRincian">
              <h3 className="testNama">Juminten</h3>
              <p className="testIsi">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                deserunt!
              </p>
            </div>
          </div>
          <div className="testiTest">
            <div className="testiImage">
              <img className="testImageFace" src={Testi3} alt="test1" />
            </div>
            <div className="testiRincian">
              <h3 className="testNama">Juleha</h3>
              <p className="testIsi">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                deserunt!
              </p>
            </div>
          </div>
          <div className="testiTest">
            <div className="testiImage">
              <img className="testImageFace" src={Testi4} alt="test1" />
            </div>
            <div className="testiRincian">
              <h3 className="testNama">Junet</h3>
              <p className="testIsi">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis,
                deserunt!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
