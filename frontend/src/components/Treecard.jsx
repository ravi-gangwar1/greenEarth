import React from 'react'
import "../style/treeCard.css"
import { Link } from 'react-router-dom'

function  Treecard({tree}) {
  return (
    <div className='main-card'>
   
        <div className='box-card'>
           <Link to={`/details/${tree.id}`}><img src={tree.imageUrl} alt="" /></Link> 
          <div className='cardInfo'>
            <h4>{tree.name}</h4>
            <p>Price:&#x20B9;{tree.price}</p>
          </div>
          <div className='cardBtns'>
            <button className='plantBtn'>Plant</button>
            <button className='bucketBtn'>Add Bucket</button>
          </div>
        </div>
    </div>
  )
}

export default Treecard;
