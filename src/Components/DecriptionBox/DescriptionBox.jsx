import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='DescriptionBox'>
        <div className="DescriptionBox-navigator">
            <div className="DescriptionBox-nav-box">
            Description
            </div>
            <div className="DescriptionBox-nav-box fade">
            Reviews (122)
            </div>
        </div>
        <div className="DescriptionBox-description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods,
                 services, and digital products over the internet rather than at a brick-and-mortar location. 
                 Through an e-commerce website, a business can process orders, accept payments,
                 manage shipping and logistics, and provide customer service.</p>
                 <p>Much like a traditional physical retail store, e-commerce websites allow consumers and 
                    businesses to buy and sell 
                    to one another on a designated platform.
                     The main difference between e-commerce and physical commerce, however,
                     is that e-commerce transactions occur entirely over the internet rather than at 
                     a brick-and-mortar location.</p>
        </div>
    </div>
  )
}

export default DescriptionBox