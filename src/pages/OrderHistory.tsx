import React, { useEffect, useState } from "react";

interface Order {
  id: string;
  date: string;
  items: { name: string; quantity: number; price: number }[];
  total: number;
}

const OrderHistory: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    // Demo: Load from localStorage or use sample data
    const stored = localStorage.getItem("orderHistory");
    if (stored) {
      setOrders(JSON.parse(stored));
    } else {
      setOrders([
        {
          id: "ORD123456",
          date: "2026-01-25",
          items: [
            { name: "Gold Bracelet", quantity: 1, price: 4500 },
            { name: "Diamond Earrings", quantity: 2, price: 12000 }
          ],
          total: 28500
        }
      ]);
    }
  }, []);

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
                <span className="font-semibold">Order #{order.id}</span>
                <span className="text-gray-500">{order.date}</span>
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
