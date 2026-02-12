import React, { useEffect, useState } from "react";
import { getOrdersByUser } from "../utils/order.service";
import { useAuth } from "../Components/AuthContext";
import type { Order } from "../types";

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user?.uid) {
      getOrdersByUser(user.uid).then((data) => {
        setOrders(data);
        setLoading(false);
      }).catch(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) {
    return <div className="text-center p-6 text-gray-500">Loading orders...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      {orders.length === 0 ? (
        <div className="text-gray-500">No orders found.</div>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="border rounded p-4 bg-white shadow">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Order #{order.id?.slice(0, 8)}</span>
                <span className="text-gray-500">{order.date}</span>
              </div>
              <div className="mb-2">
                <span className={`text-xs px-2 py-1 rounded ${
                  order.status === "Delivered" ? "bg-green-100 text-green-700" :
                  order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {order.status}
                </span>
              </div>
              <ul className="mb-2">
                {order.items.map((item, idx) => (
                  <li key={idx} className="flex justify-between text-sm">
                    <span>{item.name} x{item.quantity}</span>
                    <span>Rs. {item.price * item.quantity}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right font-bold">Total: Rs. {order.total}</div>
              <div className="text-right text-xs text-gray-400 mt-1">
                Payment: {order.paymentMethod}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
