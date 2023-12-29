// UserList.jsx

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../actions/userAction";
import "../../style/adminCSS/userList.css"; // Import the CSS file for styling

function UserList() {
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.getAllUsersReducer);
  const { users } = userState;

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);

  return (
    <div className="user-list-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Created Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={index} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                <td>
                  <button className="delete-button">Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
