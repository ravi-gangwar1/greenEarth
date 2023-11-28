import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { addAction, deleteFromCart } from '../actions/bucketAction';
import '../style/bucketPage.css'


function BucketPage() {
  const bucketState = useSelector((state) => state.bucketReducer);
  const bucketItems = bucketState.bucketItems;
  const dispatch = useDispatch();
  const total = bucketItems.reduce((x, item) => x + item.price*item.quantity, 0)

  return (
    <div className='bucketPage'>
      <h1>Your Bucket!!</h1>
      {bucketItems.map((tree) => (
        <div className='bucketItemContainer' key={tree.id}>
          <img className='bucketItemImg' src={tree.imageUrl} alt="notFound" />
          <div className='titile-dis-div'>
            <h1>{tree.name}</h1>
            <p>{tree.discription}</p>
            <h4>Price: &#x20B9;{tree.quantity*tree.price}</h4>
          </div>
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
      <div className='totalPriceDiv'> 
      <h3>Total Amount: &#x20B9;{total}/-</h3>
      <button className='order-btn'>Place</button>
      </div>
    </div>
  );
}

export default BucketPage;
