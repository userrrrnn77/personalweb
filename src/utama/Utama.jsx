import React from 'react'
import './Utama.css'
import Sidebar from '../components/sidebar/Sidebar'
import Main from '../components/main/Main'

const Utama = () => {
  return (
    <div className='utama'>
      <div className='sidebarUtama'>
        <Sidebar />
      </div>
      <div className="mainUtama">
        <Main />
      </div>
    </div>
  )
}

export default Utama
