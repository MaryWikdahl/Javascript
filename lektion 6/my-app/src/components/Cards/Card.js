import React from 'react'

const Card = ({item}) => {
    return (
<div className="card" style= {{width: 18 + 'rem'}}>
     <img src={item} className="card-img-top" alt="..."/>
     <div className="card-body">
    <h5 className="card-title">70" 4K UHD LED-TV med Alexa och Ambilight</h5>
   <p className= "card-text"> 
    <ul>
        <li> Philips P5-processor</li>
        <li> Stöd för HDR10+</li>
        <li> Dolby Vision och Dolby Atmos</li>
    </ul>
   </p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <i class="fal fa-cart-plus"></i>
  </div>
  </div>

    )
}

export default Card
