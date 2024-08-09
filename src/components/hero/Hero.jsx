import React from 'react'
import './style.css'

function Hero() {
  return (
    <div className='container-fluid p-4 p-md-5 hero'>
      <div className="row align-items-center">
        <div className="col-md-7">
        <h1 className="display-5 fw-bold heading1"> <span className="text-main">Welcome to the Virtual ID Card</span> System for Karnataka Bangalore Police Officers</h1>
        <p className="fs-5 text-secondary">The Virtual ID Card System is designed to provide Karnataka Bangalore police officers with a secure, efficient, and modern way to manage and maintain their identification credentials. This innovative solution eliminates the need for physical ID cards and offers a streamlined process for generating, updating, and accessing your ID information.</p>
        <div className="d-flex gap-3 w-100 flex-wrap">
          <a href="#" className="blue-btn m-0 d-block">Learn More</a>
          <a href="#" className="outline-btn d-block">Get Started</a>
        </div>
      </div>
      <div className="col-md-5 d-flex align-items-center justify-content-center h-100 mt-3">
       <img src="https://cdn-icons-png.freepik.com/256/1599/1599740.png?semt=ais_hybrid" alt="id-card" className="w-75" />
      </div>
      </div>
    </div>
  )
}

export default Hero