import './App.css'
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

function App() {

  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="*" element={<NotFound/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/bucket' element={<BucketPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/success' element={<PaySuccess/>}/>
        <Route path='/cancel' element={<PayCancel/>}/>
        <Route path='/orders' element={<OrdersList/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
