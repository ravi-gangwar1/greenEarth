import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTree } from '../../actions/treeAction';
import "../../style/adminCSS/treesList.css"
function TreeList() {
  const dispatch = useDispatch();
  const treestate = useSelector(state => state.treeReducer);
  const { trees, loading, error } = treestate;

  useEffect(() => {
    dispatch(getAllTree());
  }, [dispatch]);

  return (
    <>
      <table className="tree-table">
        <thead>
          <tr className='heads'>
            <th>S/N</th>
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
                <td>{tree.name}</td>
                <td>{tree.price}</td>
                <td>{tree.discription}</td>
                <td>{tree.categeory}</td>
                <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
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
