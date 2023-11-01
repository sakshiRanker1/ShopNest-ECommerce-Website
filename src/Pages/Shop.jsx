import React from 'react'
import Hero from '../Components/Hero/Hero'
import Item from '../Components/Item/Item'
import Popular from '../Components/Popular/Popular'
import Offer from '../Components/Offer/Offer'
import NewCollection from '../Components/NewCollections/NewCollection'
import Newsletter from '../Components/Newsletter/Newsletter'


const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
     < NewCollection/>
     <Newsletter/>
    </div>
  )
}

export default Shop