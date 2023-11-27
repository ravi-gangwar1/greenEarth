import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
import { addAction } from '../actions/bucketAction';

function BucketPage() {
  const bucketState = useSelector((state) => state.bucketReducer);
  const bucketItems = bucketState.bucketItems;
  const dispatch = useDispatch();

  return (
    <>
      {bucketItems.map((tree) => (
        <div key={tree.id}>
          <img src={tree.imageUrl} alt="notFound" />
          <div>
            <h1>{tree.name}</h1>
            <h4>Price: &#x20B9;{tree.quantity*tree.price}</h4>
          </div>
          <div>
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
        </div>
      ))}
    </>
  );
}

export default BucketPage;
