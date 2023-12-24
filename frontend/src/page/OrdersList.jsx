import { getUserOrders } from "../actions/orderAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import "../style/orderList.css"

function OrdersList() {
  const { orders, loading, error } = useSelector((state) => state.getUserOrdersReducer);
  console.log(orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        orders.map((order) => (
          <div className="mainOrderDiv" key={order._id}>
            <div className="Orderdiv">
              <div className="items">
                {order.orderTrees.map((item) => (
                  <div className="itemDetails" key={item._id}>
                    <h1>{item.name}</h1>
                    <h1>{item.price}</h1>
                    <h1>{item.quantity}</h1>
                  </div>
                ))}
              </div>
              <div className="address">
                <h1>Shipping Address</h1>
                <p>Phone: {order.shippingAddress.phone}</p>
                <p>Address:{order.shippingAddress.address}</p>
                <p>City:{order.shippingAddress.city}</p>
                <p>State:{order.shippingAddress.state}</p>
                <p>PinCode :{order.shippingAddress.pincode}</p>
              </div>
            </div>
            <div className="amtDiv">
              <h1 className="amt">
                Total Amount : {order.orderAmount}
              </h1>
              <h2 className="deliveryStatus">
                Delivered: {order.isDelivered ? "Yes✅" : "No❌"}
              </h2>
              <button>
                Cancel Now
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default OrdersList;
