import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { garderAction } from '../actions/gadernAction';
import "../style/garden.css"
function Garden() {
    const dispatch = useDispatch();
    const userId = useParams();
    const gardenState = useSelector((state) => state.gardenReducer);
    const {gadernTrees, loading, error} = gardenState;
    var allTrees = [];
    if(gadernTrees){
        gadernTrees.map((tree) => tree.orderTrees.map((tree)=> {
          allTrees.push(tree);
        }));
    }
    console.log(allTrees);
    useEffect(()=>{
        if(userId){
          dispatch(garderAction(userId))
        }
    }, [])



    
  return (
    <div className='garden-page'>
      <h2 className=''>Your Garden</h2>
    {loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> : 
    <div className='garden-page2'>
      {
        allTrees.map((tree) => 
        (<>
          <div className='garden-card'>
            <img className='garden-tree-img' src={tree.imageUrl} alt={tree.name}></img>
            <h1 className='garden-h1'>{tree.name}</h1>
          </div>
          </>
        )
      )}
    </div>
}
    </div>
  )
}

export default Garden
