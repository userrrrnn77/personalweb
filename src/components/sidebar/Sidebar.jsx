import React from 'react'
import './Sidebar.css'
import myAvatar from '../../assets/my-avatar.png'
import { HiOutlineMail } from "react-icons/hi";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";
import { FaFacebook,FaTwitter,FaGithub } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarPhotos">
        <img className='sidebarImage' src={myAvatar} alt="profile" />
      </div>
      <div className="sidebarTitle">
        <h1 className="sidebarNama">Rendy Agus S</h1>
        <p className="sidebarGelar">Web Developer</p>
      </div>
      <div className="sidebarProfile">
        <div className="sidebarContainer">
            <div className="sidebarIcons">
                <HiOutlineMail className='sidebarIcon' />
            </div>
            <div className="sidebarKeterangan ketikaMuncul">
                <p className="sidebarJudul">EMAIL</p>
                <p className="sidebarRincian emailRincian">rendyharvest@gmail.com</p>
            </div>
        </div>
        <div className="sidebarContainer">
            <div className="sidebarIcons">
                <IoPhonePortraitOutline className='sidebarIcon' />
            </div>
            <div className="sidebarKeterangan ketikaMuncul">
                <p className="sidebarJudul">PHONE</p>
                <p className="sidebarRincian phoneRincian">+6281234567890</p>
            </div>
        </div>
        <div className="sidebarContainer">
            <div className="sidebarIcons">
                <IoLocationOutline className='sidebarIcon' />
            </div>
            <div className="sidebarKeterangan ketikaMuncul">
                <p className="sidebarJudul">LOCATION</p>
                <p className="sidebarRincian lokasiRincian">Semarang, Indonesia</p>
            </div>
        </div>
        <div className="sidebarContainer">
            <div className="sidebarIcons">
                <VscVscode className='sidebarIcon' />
            </div>
            <div className="sidebarKeterangan ketikaMuncul">
                <p className="sidebarJudul">HOBBY</p>
                <p className="sidebarRincian hobbyRincian">Write Code</p>
            </div>
        </div>
      </div>
      <div className="sidebarSocial">
        <FaFacebook  className='iconsSocial fb' />
        <FaGithub className='iconsSocial gh' />
        <FaTwitter className='iconsSocial tw' />
      </div>
    </div>
  )
}

export default Sidebar
