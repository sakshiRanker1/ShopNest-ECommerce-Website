import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers ON Your Email</h1>
        <p>Subscribe to our NewsLetter and Stay Updated</p>
        <div>
            <input type="email" placeholder='Your Email ID'/>
            <button><strong>Subscribe</strong></button>
        </div>
    </div>
  )
}

export default Newsletter