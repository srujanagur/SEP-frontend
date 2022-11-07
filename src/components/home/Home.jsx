import React from 'react'
import Navbar1 from '../Navbar'

import './Home.css'

export default function Home() {
  return (
    <div className='container'>
      <Navbar1 />
      <div style={{ padding: '25%' }}>
        <h1 style={{ fontSize: '6rem' }}>SEP BUSINESS</h1>
      </div>
    </div>
  )
}
