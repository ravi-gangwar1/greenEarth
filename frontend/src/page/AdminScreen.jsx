import { Link, Routes, Route } from 'react-router-dom';
import '../style/adminScreen.css';
import UserList from '../components/admin/UserList';
import OrderList from '../components/admin/OrderList';
import TreeList from '../components/admin/TreeList';
import AddTree from '../components/admin/AddTree';

function AdminScreen() {
  return (
    <div className='admin-screen'>
      <div className='admin-controllers'>
        <ul>
          <li><Link to="/admin/orders" className='adminBtns'>Orders</Link></li>
          <li><Link to="/admin/users" className='adminBtns'>Users</Link></li>
          <li><Link to="/admin/trees" className='adminBtns'>Trees</Link></li>
          <li><Link to="/admin/add-tree" className='adminBtns'>Add Trees</Link></li>
        </ul>
      </div>
      <div className='display-controllers'>
        <Routes>
          <Route path='/admin/users' element={<UserList />} />
          <Route path='/admin/orders' element={<OrderList />} />
          <Route path='/admin/trees' element={<TreeList />} />
          <Route path='/admin/add-tree' element={<AddTree />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminScreen;
