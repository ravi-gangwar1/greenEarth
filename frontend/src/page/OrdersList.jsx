import { getUserOrders } from "../actions/orderAction.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function OrdersList() {
  const { orders, loading, error } = useSelector((state) => state.getUserOrdersReducer);
  console.log(orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return <div>OrdersList</div>;
}

export default OrdersList;
