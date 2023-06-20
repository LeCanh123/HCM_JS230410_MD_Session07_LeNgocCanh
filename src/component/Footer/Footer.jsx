import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='container bg-secondary'>
        <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    <div class="me-5 d-none d-lg-block">
      <div className="row">
        <div className="col-md-3">Blog</div>
        <div className="col-md-3">FAQS</div>
        <div className="col-md-6">Contact Us</div>

      </div>
    </div>

    <div>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-google"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
      </a>
      <a href="" class="me-4 text-reset">
        <i class="fab fa-github"></i>
      </a>
    </div>
  </section>

  
  <div className="text-center p-4 item-1">
    © 2018 All Right Reserverd .This template is made with by <span className='text-danger'>Quintus Labs</span>
    
  </div>
    </div>
  )
}
