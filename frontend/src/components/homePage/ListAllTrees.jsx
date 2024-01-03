import { useState } from 'react';
import { useEffect } from 'react';
// import Treecard from '../../components/Treecard'
import Treecard from '../Treecard'
import "../../style/home.css"
import {useDispatch, useSelector} from 'react-redux';
import { getAllTree } from '../../actions/treeAction';
import Loader from '../Loader';




function ListAllTress() {
  const dispatch = useDispatch();
  const treestate = useSelector(state => state.treeReducer);
  const { trees, loading, error } = treestate;
  const {totalDocuments, treeList} = trees;

  const [page, setPage] = useState(1);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page*15 > totalDocuments) {
        alert("No more data to show");
        return;
    }else{
      setPage(page + 1);
    }

  };

  useEffect(() => {
    dispatch(getAllTree(page));
  }, [page]);

  return (
    <div className='home'>
      {loading ? (
        // <h1 className='loading'>Loading...</h1>
         <Loader className='loading'/>
      ) : error ? (
        <h1 className='error'>Server Error or data not fetched</h1>
      ) : (
        <>
          <div className='card-div'>
            {Array.isArray(treeList) && treeList.map((tree) => (
              <Treecard key={tree.id} tree={tree} />
            ))}
          </div>
        </>
      )}
      <div className='loadmoreBtns'>
        <button className='prevNext' onClick={handlePrev}>
          Prev
        </button>
        <button className={page * 15 > totalDocuments ? "preNextDanger" : "prevNext"} onClick={handleNext}>
          {page * 15 > totalDocuments ? "No more data to show" : "Next"}
        </button>

      </div>
    </div>
  );
}

export default ListAllTress;
