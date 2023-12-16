import { useEffect } from 'react';
import Treecard from '../components/Treecard'
import "../style/home.css"
import {useDispatch, useSelector} from 'react-redux';
import { getAllTree } from '../actions/treeAction';



function Home() {
  const dispatch = useDispatch();
  const treestate = useSelector(state => state.treeReducer);
  const {trees,loading, error } = treestate;
  useEffect(()=> {dispatch(getAllTree()); console.log("Welcome to greenEarth's Console!!");}, [dispatch]);

  return (
    <div className='home'>
      
    {loading ? (<h1 className='loading'>Loading...</h1>) 
      : error ? (<h1 className='error'>Server Error or data not fetched</h1>)
      :(<> <div className='search-div'>
      <input className='input-search' type="text" id="search" name="q" placeholder="Type your search"/>
      <div className='cetageory'>
        <span>Cetageory:</span>
        <label htmlFor="fruit">Fruit:</label>
        <input type="radio" name='sort'/>
        <label htmlFor="fruit">NoneFruit:</label>
        <input type="radio" name='sort'/>
        <label htmlFor="fruit">Indoor:</label>
        <input type="radio" name='sort'/>
        <label htmlFor="fruit">Outdoor:</label>
        <input type="radio" name='sort'/>
        <label htmlFor="fruit">Flower:</label>
        <input type="radio" name='sort'/>
      </div>
      </div>
      <div className='card-div'>
      {trees.map((tree)=>(
        <Treecard key={tree.id} tree={tree}/>
      ))}
      </div> </>)
    }
    </div>
  )
}

export default Home
