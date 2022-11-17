import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {

  let navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem("wishlist") == null) {
      localStorage.setItem("wishlist", "[]");
    }
  }, [])

  return (
    <div id='superdiv'>
      <div id='maindiv'>
        <div id='subdiv'>
          <div>
            <h1 style={{ color: "black" }} >Log-in as</h1> <br />
          </div>
          <div>
            <button className='admin' onClick={() => { navigate('/admin') }} >Admin</button> <br /> <br />
          </div>
          <div>
            <button className='admin' onClick={() => { navigate('/customer') }} >Customer</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home