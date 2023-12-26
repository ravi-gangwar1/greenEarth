import './App.css'
import { useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import About from './page/about'
import Contact from './page/Contact'
import Home from './page/Home'
import BucketPage from './page/BucketPage'
import NotFound from './page/NotFound'
import Login from './page/Login'
import PayCancel from './components/PayCancel'
import PaySuccess from './components/PaySuccess'
import OrdersList from './page/OrdersList'


import AdminScreen from './page/AdminScreen'
import AdminOrders from './components/admin/AdminOrders';
import UserList from './components/admin/UserList';
import TreeList from './components/admin/TreeList';
import AddTree from './components/admin/AddTree';

function App() {
  const userState = useSelector(state => state.loginUserReducer);
  const {currentUser} = userState;
  const isAdmin = currentUser?.data?.isAdmin === true;
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/bucket' element={<BucketPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<PaySuccess/>}/>
        <Route path='/cancel' element={<PayCancel/>}/>
        <Route path='/orders' element={<OrdersList/>}/>
        <Route path="*" element={<NotFound/>}/>

        {isAdmin ? 
        <>
        <Route path='/admin/users' element={<UserList/>}/>
        <Route path='/admin' element={<AdminScreen/>}/>
        <Route path='/admin/trees' element={<TreeList/>}/>
        <Route path='/admin/add-tree' element={<AddTree/>}/>
        <Route path='/admin/orders' element={<AdminOrders/>}/>
        </> : ""}
      </Routes>
    </BrowserRouter>
  )
}

export default App
