import React from 'react'
import trees_list  from '../data'
import Treecard from '../components/Treecard'
import "../style/home.css"


function Home() {
  return (

    <div className='home'>
      <div className='search-div'>
      <input className='input-search' type="text" id="search" name="q" placeholder="Type your search"/>
      </div>
      <div className='card-div'>
      {trees_list.map((tree)=>(
        <Treecard key={tree.id} tree={tree}/>
      ))}
      </div>
    </div>
  )
}

export default Home
