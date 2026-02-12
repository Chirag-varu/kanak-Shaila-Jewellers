import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { getAllOrders } from "../utils/order.service";
import { getProducts } from "../utils/product.service";
import type { Order, Product } from "../types";

declare module "jspdf" {
  interface jsPDF {
    autoTable: (options: any) => jsPDF;
  }
}

const OwnerDashboard: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getAllOrders(), getProducts()]).then(([ords, prods]) => {
      setOrders(ords);
      setProducts(prods);
      setLoading(false);
    });
  }, []);

  const today = new Date().toISOString().slice(0, 10);
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const monthAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);

  const todaysOrders = orders.filter(o => o.date === today);
  const weekOrders = orders.filter(o => o.date >= weekAgo);
  const monthOrders = orders.filter(o => o.date >= monthAgo);

  const todaysRevenue = todaysOrders.reduce((sum, o) => sum + o.total, 0);
  const weekRevenue = weekOrders.reduce((sum, o) => sum + o.total, 0);
  const monthRevenue = monthOrders.reduce((sum, o) => sum + o.total, 0);

  // Find top-selling product
  const productSales: Record<string, number> = {};
  orders.forEach(o => {
    o.items.forEach(item => {
      productSales[item.name] = (productSales[item.name] || 0) + item.quantity;
    });
  });
  const topProduct = Object.entries(productSales).sort((a, b) => b[1] - a[1])[0];

  const handleDownloadSales = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Sales Report - Kanak Shaila Jewellers", 105, 15, { align: "center" });
    doc.setFontSize(11);
    doc.text(`Date: ${today}`, 14, 25);
    doc.autoTable({
      startY: 35,
      head: [["Period", "Orders", "Revenue"]],
      body: [
        ["Today", String(todaysOrders.length), `Rs. ${todaysRevenue.toLocaleString()}`],
        ["This Week", String(weekOrders.length), `Rs. ${weekRevenue.toLocaleString()}`],
        ["This Month", String(monthOrders.length), `Rs. ${monthRevenue.toLocaleString()}`],
      ],
    });
    doc.save(`Sales_Report_${today}.pdf`);
  };

  const handleDownloadInventory = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Inventory Report - Kanak Shaila Jewellers", 105, 15, { align: "center" });
    doc.setFontSize(11);
    doc.text(`Date: ${today}`, 14, 25);
    doc.autoTable({
      startY: 35,
      head: [["Product", "Brand", "Stock", "Price", "Status"]],
      body: products.map(p => [
        p.name,
        p.brand,
        String(p.quantity),
        `Rs. ${p.price}`,
        p.quantity > 0 ? "Active" : "Out of Stock",
      ]),
    });
    doc.save(`Inventory_Report_${today}.pdf`);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading dashboard...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Business Owner Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sales Overview */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Sales Overview</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Period</th>
                <th className="p-2 border">Orders</th>
                <th className="p-2 border">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Today</td>
                <td className="p-2 border">{todaysOrders.length}</td>
                <td className="p-2 border">Rs. {todaysRevenue.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="p-2 border">This Week</td>
                <td className="p-2 border">{weekOrders.length}</td>
                <td className="p-2 border">Rs. {weekRevenue.toLocaleString()}</td>
              </tr>
              <tr>
                <td className="p-2 border">This Month</td>
                <td className="p-2 border">{monthOrders.length}</td>
                <td className="p-2 border">Rs. {monthRevenue.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Reports */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Reports</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Report</th>
                <th className="p-2 border">Date</th>
                <th className="p-2 border">Download</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Sales Report</td>
                <td className="p-2 border">{today}</td>
                <td className="p-2 border"><button className="text-blue-600 underline" onClick={handleDownloadSales}>Download</button></td>
              </tr>
              <tr>
                <td className="p-2 border">Inventory Report</td>
                <td className="p-2 border">{today}</td>
                <td className="p-2 border"><button className="text-blue-600 underline" onClick={handleDownloadInventory}>Download</button></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Strategic Growth */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Strategic Growth</h3>
          <ul className="list-disc pl-5 text-gray-700 text-sm mb-2">
            <li>Total products: <span className="font-semibold">{products.length}</span></li>
            <li>Total orders: <span className="font-semibold">{orders.length}</span></li>
            {topProduct && (
              <li>Top-selling product: <span className="font-semibold">{topProduct[0]}</span> ({topProduct[1]} units sold)</li>
            )}
            <li>Out of stock items: <span className="font-semibold text-red-600">{products.filter(p => p.quantity === 0).length}</span></li>
          </ul>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded shadow p-4">
          <h3 className="font-semibold mb-2">Inventory Summary</h3>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="bg-blue-50 rounded p-3 text-center">
              <div className="text-2xl font-bold text-blue-600">{products.length}</div>
              <div className="text-gray-600">Products</div>
            </div>
            <div className="bg-green-50 rounded p-3 text-center">
              <div className="text-2xl font-bold text-green-600">{products.filter(p => p.quantity > 0).length}</div>
              <div className="text-gray-600">In Stock</div>
            </div>
            <div className="bg-red-50 rounded p-3 text-center">
              <div className="text-2xl font-bold text-red-600">{products.filter(p => p.quantity === 0).length}</div>
              <div className="text-gray-600">Out of Stock</div>
            </div>
            <div className="bg-purple-50 rounded p-3 text-center">
              <div className="text-2xl font-bold text-purple-600">Rs. {monthRevenue.toLocaleString()}</div>
              <div className="text-gray-600">Monthly Revenue</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
