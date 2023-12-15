import { useDispatch, useSelector } from 'react-redux';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { addAction, deleteFromCart } from '../actions/bucketAction';
import '../style/bucketPage.css'
import {loadStripe} from '@stripe/stripe-js';
import { useState } from 'react';


function BucketPage() {
  const bucketState = useSelector((state) => state.bucketReducer);
  const bucketItems = bucketState.bucketItems;
  const dispatch = useDispatch();
  const total = bucketItems.reduce((x, item) => x + item.price*item.quantity, 0)
  console.log(bucketItems)


// address 
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [state, setState] = useState("");
const [city, setCity] = useState("");
const [pincode, setPincode] = useState("");
const [address, setAddress] = useState("");
const [landmark, setLandmark] = useState("");


// 

const addressHandler = ()=>{
  if(name && email && phone && state && city && pincode && address && landmark){
    makePayment();
  }else{
    alert("Please fill all the fields")
  }

}


// payment
const makePayment = async () => {
  const stripe = await loadStripe('pk_test_51OHyz1SB7yI7Si8Nh90kpRQBPIDSidKNxyKSdT49idzoM8IcAULsXJdJzFQ8l95bJ9M3xis06Xu2WUIDU5W4EFnM00xOnAp5Vi');
  const reqBody = {
    bucketItems: bucketItems,
    address: {
      name: name,
      email: email,
      phone: phone,
      state: state,
      city: city,
      pincode: pincode,
      address: address,
      landmark: landmark,
    }
    
  };
  const response = await fetch('http://localhost:5000/api/orders/placeorder', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reqBody)
    
  });
  const data = await response.json();
  const { result } = await stripe.redirectToCheckout({ sessionId: data.id });
  if (result.error) {
    console.log("Error",result.error);
  }
}


  return (
    <div className='bucket-main'>
      <div className='bucketPage'>
        {bucketItems.length === 0 ? (<h1>Bucket is Empty.</h1>) : ("")}
        {bucketItems.map((tree) => (
          <div className='bucketItemContainer' key={tree.id}>
            <img className='bucketItemImg' src={tree.imageUrl} alt="notFound" />
              <h1>{tree.name}</h1>
              <h4>Price: &#x20B9;{tree.quantity*tree.price}</h4>
            <div className='inc-dec-btn'>
              <FaPlusCircle
                onClick={() => {
                  if (tree.quantity < 10) {
                    dispatch(addAction(tree, tree.quantity + 1));
                  }
                }}
              />
              <div>{tree.quantity}</div>
              <FaMinusCircle
                onClick={() => {
                  if (tree.quantity > 1) {
                    dispatch(addAction(tree, tree.quantity - 1));
                  }
                }}
              />
            </div>
            <button className='deleteItem' onClick={()=> {
              dispatch(deleteFromCart(tree))
            }}>Delete</button>
          </div>
        ))}
      </div>
      <div className='address-div'>

        <h1>ADDRESS DETAILS</h1>
        <input className="inp" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter Name'/>
        <input className="inp" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'/>
        <input className="inp" type="text" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Enter Phone'/>
        <input className="inp" type="text" value={state} onChange={(e)=>setState(e.target.value)} placeholder='Enter State'/>
        <input className="inp" type="text" value={city} onChange={(e)=>setCity(e.target.value)} placeholder='Enter City'/>
        <input className="inp" type="text" value={pincode} onChange={(e)=>setPincode(e.target.value)} placeholder='Enter Pincode'/>
        <input className="inp" type="text" value={address} onChange={(e)=>setAddress(e.target.value)} placeholder='Enter Address'/>
        <input className="inp" type="text" value={landmark} onChange={(e)=>setLandmark(e.target.value)} placeholder='Enter Landmark'/>
        <div className='totalPriceDiv'> 
        <h3>Total Amount: &#x20B9;{total}/-</h3>
        <button className='pay-btn' onClick={addressHandler}>Pay Now</button>
      </div>
        
      </div>
      
    </div>
  );
}

export default BucketPage;
