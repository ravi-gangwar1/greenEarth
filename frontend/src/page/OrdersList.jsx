import { cancelOrderAction, getUserOrders } from "../actions/orderAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../style/orderList.css";
import Loader from "../components/Loader.jsx";

function OrdersList() {
  const { orders, loading, error } = useSelector((state) => state.getUserOrdersReducer);
  const dispatch = useDispatch();

  const cancelOrderState = useSelector((state) => state.cancelOrderReducer);
  const { cancelLoading } = cancelOrderState;

  function handleRating(){
    alert("This feature not available");
  }
  function handleCancelOrder (orderId) {
    dispatch(cancelOrderAction(orderId));
  }

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div className="orderList-page">
      {loading ? (
        <Loader/>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        orders && orders.length === 0 ? <h1 className="zero-orders">You have <span>ZERO</span> orders.</h1> :
        <table className="order-page-table">
          <thead>
            <tr>
              <th>
                  <td>
                    Trees
                  </td>
                  <td>
                    Amount
                  </td>
                  <td>
                    Quantity
                  </td>
              </th>
              <th>Total Amount</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((odr, index) => (
              <tr key={index} className={ odr.isCancelled ? "cancelOrderClass" : index % 2 === 0 ? 'table-row-light' : 'table-row-dark'}>
                {/* Tree details */}
                <td>
                  {odr.orderTrees.map((trees, treeIndex)  => (
                    <tr key={treeIndex}>
                      <td>{trees.name}</td>
                      <td>Rs.{trees.price}/-</td>
                      <td>{trees.quantity}</td>
                    </tr>
                  ))}
                </td>

                {/* Total Amount */}
                <td>Rs.{odr.orderAmount}/-</td>

                {/* Address */}
                <td>
                  <p>Email: {odr.shippingAddress.email}</p>
                  <p>Phone: {odr.shippingAddress.phone}</p>
                  <p>City: {odr.shippingAddress.city}</p>
                  <p>Landmark: {odr.shippingAddress.landmark}</p>
                  <p>Pincode: {odr.shippingAddress.pincode}</p>
                  <p>State: {odr.shippingAddress.state}</p>
                </td>

                {/* Status */}
                <td>Delivered: {odr.isDelivered ? "Yes✅" : "No❌"}</td>

                {/* Action */}
                <td className="cancel-order-order-list">
                  {odr.isDelivered ? 
                  <button onClick={()=> handleRating()}>Give Ratings⭐</button> : 
                  <button onClick={()=> handleCancelOrder(odr._id)}>{ odr.isCancelled ? "Cancelled": cancelLoading ? "Loading...":"Cancel Order"}</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default OrdersList;
