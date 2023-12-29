import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTree } from '../../actions/treeAction';
import "../../style/adminCSS/treesList.css"
import { deleteTree } from "../../actions/treeAction";
function TreeList() {
  const dispatch = useDispatch();
  const treestate = useSelector(state => state.treeReducer);
  const { trees, loading, error } = treestate;
  const deleteTreeState = useSelector((state) => state.deleteTreeByIdReducer);
  const {/*deleteError,*/ deleteLoading, deleteSuccess} = deleteTreeState;

  useEffect(() => {
    dispatch(getAllTree());
  }, [dispatch]);

  const handleDeleteTree = (deleteTreeId)=>{
    dispatch(deleteTree(deleteTreeId));
    if(deleteSuccess){
      alert("Tree Deleted Successfully");
    }
  }

  return (
    <>
      <table className="tree-table">
        <thead>
          <tr className='heads'>
            <th>S/N</th>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Discription</th>
            <th>Categeory</th>
            <th className='actionHead'>Action</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="6">Loading...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="6" className="error-row">
                {error}
              </td>
            </tr>
          ) : (
            trees &&
            trees.map((tree, index) => (
              <tr key={tree._id} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{index + 1}</td>
                <td><a href={tree.imageUrl} target='_blanck'>Image</a></td>
                <td>{tree.name}</td>
                <td>{tree.price}</td>
                <td>{tree.discription}</td>
                <td>{tree.categeory}</td>
                <td>
                <Link to={`/admin/edit-tree/${tree._id}`}><button className="edit-btn">Edit</button></Link>
                <button className="delete-btn" onClick={() => handleDeleteTree(tree._id)}>{deleteLoading ? "Deleting..." : "Delete"}</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default TreeList;
