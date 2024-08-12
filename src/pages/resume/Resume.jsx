import React from "react";
import "./Resume.css";
import { FaGraduationCap } from "react-icons/fa6";
import { FaUserCheck } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Resume = () => {
  return (
    <div className="resume">
      <div className="aboutTekTitle">
        <FaGraduationCap className="aboutIconTitle" />
        <h1 className="aboutTekJudul">Education</h1>
      </div>
      <div className="resumeEdukasi">
        <div className="garisResume"></div>
        <div className="linkarResume"></div>
        <div className="resumeRincian">
          <h1 className="resumeJudul">
            SMK N 11 SEMARANG <span className="resumeSpan">2013 - 2016</span>
          </h1>
          <p className="resumeJurusan">Graphic Design</p>
          <p className="resumeDesc">
            As a Graphic Design graduate, I have skills in creating attractive
            and communicative visuals, with a focus on detail and aesthetics. I
            am experienced in using various design software such as Adobe
            Creative Suite, and have a strong understanding of color theory,
            typography, and layout.
          </p>
          <p className="resumeDesc">
            I am enthusiastic about applying my creative abilities to
            challenging projects, and I always strive to produce work that is
            not only visually beautiful, but also effective in conveying a
            message. I am ready to contribute to a dynamic creative team and
            continue learning to improve my skills.
          </p>
        </div>
      </div>
      <div className="resumeEdukasi">
        <div className="garisResume"></div>
        <div className="linkarResume"></div>
        <div className="resumeRincian">
          <h1 className="resumeJudul">
            Universitas Dian Nuswantoro{" "}
            <span className="resumeSpan">2016 - 2020</span>
          </h1>
          <p className="resumeJurusan">Visual Communication Design</p>
          <p className="resumeDesc">
            As a Visual Communication Design graduate, I have expertise in
            combining visual and communication elements to create effective and
            attractive work. My experience includes creating graphic design,
            illustration, branding, and interactive media with a deep
            understanding of design principles, composition, and aesthetics.
          </p>
          <p className="resumeDesc">
            I am ready to apply my creative skills to projects that require
            innovation and impactful design solutions. With the enthusiasm to
            continue learning and developing, I hope to contribute to creating
            strong and meaningful visual communication in the world of creative
            industries.
          </p>
        </div>
      </div>
      <div className="resumeEdukasi">
        <div className="garisResume persen"></div>
        <div className="linkarResume"></div>
        <div className="resumeRincian">
          <h1 className="resumeJudul">
            Universitas Negeri Semarang{" "}
            <span className="resumeSpan">2020 - 2023</span>
          </h1>
          <p className="resumeJurusan">Infomatics Engineering</p>
          <p className="resumeDesc">
            As an Informatics Engineering graduate, I have expertise in software
            development, data analysis, and network systems. I am experienced in
            various programming languages ​​such as Python, JavaScript, and
            C++,PHP, TypeScript. and have a strong understanding of algorithms,
            data structures, and system design.
          </p>
          <p className="resumeDesc">
            I am ready to apply my technical knowledge in challenging projects,
            both in application development and innovative IT solutions. With a
            passion for continuing to learn and adapt to the latest technology,
            I hope to contribute to a dynamic team and help develop effective
            and efficient technology solutions.
          </p>
        </div>
      </div>
      <div className="aboutTekTitle marginBottom">
        <FaUserCheck className="aboutIconTitle" />
        <h1 className="aboutTekJudul">Experience</h1>
      </div>
      <div className="resumeEdukasi">
        <div className="garisResume"></div>
        <div className="resumeBulat"></div>
        <div className="resumeRincian">
          <h1 className="resumeJudul">
            Team Creative <span className="resumeSpan">2017 - 2019</span>
          </h1>
          <p className="resumeDesc">
            Our creative team consists of professionals dedicated to producing
            innovative ideas and stunning design solutions. With diverse
            backgrounds in graphic design, UI/UX, copywriting, and marketing
            strategy, we work collaboratively to create campaigns and products
            that are not only visually appealing, but also effective in
            achieving business goals. We believe that creativity combined with a
            deep understanding of your audience can produce impactful and
            memorable work.
          </p>
        </div>
      </div>
      <div className="resumeEdukasi">
        <div className="garisResume"></div>
        <div className="resumeBulat"></div>
        <div className="resumeRincian">
          <h1 className="resumeJudul">
            Junior Frontend <span className="resumeSpan">2019 - 2020</span>
          </h1>
          <p className="resumeDesc">
            As a Junior Frontend Developer, I have expertise in building
            responsive and intuitive user interfaces using HTML, CSS, and
            JavaScript. I am experienced in working with frameworks such as
            React and have a basic understanding of UI/UX design principles.
            With a passion for continuous learning and development, I am ready
            to contribute to the development team by producing clean and
            functional code and ensuring an optimal user experience.
          </p>
        </div>
      </div>
      <div className="resumeEdukasi">
        <div className="garisResume"></div>
        <div className="resumeBulat"></div>
        <div className="resumeRincian">
          <h1 className="resumeJudul">
            Senior Frontend <span className="resumeSpan">2020 - 2023</span>
          </h1>
          <p className="resumeDesc">
            As a Senior Frontend Developer, I not only focus on developing
            quality code, but also on building a cohesive and collaborative
            team. I believe that a solid, mutually supportive team is the key to
            creating great products. With my experience in leading projects, I
            always strive to create an open work environment, where every team
            member feels heard and valued. I encourage collaboration and shared
            learning, and ensure that everyone has the tools and support they
            need to succeed.
          </p>
        </div>
      </div>
      <div className="resumeEdukasi">
        <div className="garisResume persen2"></div>
        <div className="resumeBulat"></div>
        <div className="resumeRincian">
          <h1 className="resumeJudul">
            Freelance Web Developer{" "}
            <span className="resumeSpan">2023 - Present</span>
          </h1>
          <p className="resumeDesc">
            As a Freelance Website Developer, I have the flexibility and skills
            to deliver web solutions tailored to clients' needs. With experience
            in various technologies such as HTML, CSS, JavaScript, and
            frameworks such as React and WordPress, I am able to build
            responsive, functional, and visually appealing websites. I am
            committed to delivering optimal results and ensuring every project
            is completed on time, with clear and transparent communication
            throughout the process.
          </p>
        </div>
      </div>
      <div className="resumeSkills marginBottom">
        <div className="aboutTekTitle">
          <GiSkills className="aboutIconTitle" />
          <h1 className="aboutTekJudul">Skills</h1>
        </div>
        <div className="resumeContainer">
          <div className="resumeSkill">
            <h1 className="resumeSkilJudul">Web Design</h1>
            <div className="garisPersen">
              <hr className="hrBelakang" />
              <hr className="hrDepan" />
            </div>
          </div>
          <div className="resumeSkill">
            <h1 className="resumeSkilJudul">Web Development</h1>
            <div className="garisPersen ">
              <hr className="hrBelakang" />
              <hr className="hrDepan tujunamPersen" />
            </div>
          </div>
          <div className="resumeSkill">
            <h1 className="resumeSkilJudul">Graphic Design</h1>
            <div className="garisPersen">
              <hr className="hrBelakang" />
              <hr className="hrDepan sempatPersen" />
            </div>
          </div>
          <div className="resumeSkill">
            <h1 className="resumeSkilJudul">Photographer</h1>
            <div className="garisPersen">
              <hr className="hrBelakang" />
              <hr className="hrDepan ganamPersen" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
