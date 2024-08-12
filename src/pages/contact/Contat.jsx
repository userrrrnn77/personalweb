import React, { useState } from "react";
import "./Contact.css";
import { IoIosSend } from "react-icons/io";

const Contat = () => {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const diSubmit = (e) => {
    e.preventDefault();

    if (!nama || !email || !deskripsi) {
      alert("Isi Yang lengkap");
      return;
    }

    setNama("");
    setEmail("");
    setDeskripsi("");

    alert("Oke Terkirim");
  };
  return (
    <div className="contact">
      <div className="contactMap">
        <iframe
          className="contactMapRinci"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.79661812767!2d110.33466223677328!3d-7.0247226075141525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sKota%20Semarang%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1723465696409!5m2!1sid!2sid"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <form action="" onSubmit={diSubmit}>
        <form className="contactForm" onSubmit={diSubmit}>
          <input
            className="contactInput"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            type="text"
            placeholder="Your Name"
          />
          <input
            className="contactInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="example@gmail.com"
          />
        </form>
        <form className="contactInputDesc" onSubmit={diSubmit}>
          <textarea
            className="textareaInputContact"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            placeholder="Description"
          />
          <button type="submit" className="contactBtn">
            Submit
          </button>
          <IoIosSend className="btnIcon" />
        </form>
      </form>
    </div>
  );
};

export default Contat;
