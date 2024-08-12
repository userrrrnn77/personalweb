import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const lokasi = useLocation();
  const [judul, setJudul] = useState("About Me");

  useEffect(() => {
    const path = lokasi.pathname;
    switch (path) {
      case "/":
        setJudul("About Me");
        break;
      case "/res":
        setJudul("Resume");
        break;
      case "/port":
        setJudul("Portofolio");
        break;
      case "/cntct":
        setJudul("Contact");
        break;
      default:
        setJudul("About Me");
    }
  }, [lokasi.pathname]);
  return (
    <div className="navbar">
      <div className="navbarNavbar">
        <div className="navKiri">
          <h1 className="navbarJudul">{judul}</h1>
          <hr className="navHrKiri" />
        </div>
        <div className="navKanan">
          <div className="navLinks">
            <Link className="navLink" to="/">
              About
            </Link>
            <Link className="navLink" to="/res">
              Resume
            </Link>
            <Link className="navLink" to="/port">
              Portofolio
            </Link>
            <Link className="navLink" to="/cntct">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
