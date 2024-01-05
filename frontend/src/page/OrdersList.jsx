import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrderAction, getUserOrders } from "../actions/orderAction.js";
import Loader from "../components/Loader.jsx";
import "../style/orderList.css";

function OrdersList() {
  const { orders, loading, error } = useSelector((state) => state.getUserOrdersReducer);
  const dispatch = useDispatch();

  const cancelOrderState = useSelector((state) => state.cancelOrderReducer);
  const { cancelLoading } = cancelOrderState;

  function handleRating() {
    alert("This feature not available");
  }

  function handleCancelOrder(orderId) {
    dispatch(cancelOrderAction(orderId));
  }

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <div className="orderList-page">

      {loading ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : orders && orders.length === 0 ? (
        <h1 className="zero-orders">You have <span>ZERO</span> orders.</h1>
      ) : (
        <>
        <h1 className="orders-heading">Your Orders</h1>
        <table className="order-page-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((odr, index) => (
              <React.Fragment key={index}>
                {odr.orderTrees.map((trees, treeIndex) => (
                  <tr key={treeIndex}>
                    <td>{trees.name}</td>
                    <td>Rs.{trees.price}/-</td>
                    <td>{trees.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <td>
                    <p>Email: {odr.shippingAddress.email}</p>
                    <p>Phone: {odr.shippingAddress.phone}</p>
                    <p>City: {odr.shippingAddress.city}</p>
                    <p>Landmark: {odr.shippingAddress.landmark}</p>
                    <p>Pincode: {odr.shippingAddress.pincode}</p>
                    <p>State: {odr.shippingAddress.state}</p>
                  </td>
                  <td>Delivered: {odr.isDelivered ? "Yes✅" : "No❌"}</td>
                  <td className="cancel-order-order-list">
                    {odr.isDelivered ? (
                      <button onClick={() => handleRating()} className="rate-button-orders">Rate</button>
                    ) : (
                      <button onClick={() => handleCancelOrder(odr._id)}>
                        {odr.isCancelled ? "Cancelled" : cancelLoading ? "Loading..." : "Cancel Order"}
                      </button>
                    )}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
        </>
      )}
    </div>
  );
}

export default OrdersList;
