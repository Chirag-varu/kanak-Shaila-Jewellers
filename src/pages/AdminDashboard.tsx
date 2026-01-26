import React from "react";

const AdminDashboard: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Admin/Staff Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Inventory Management */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Inventory Management</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Product</th>
                <th className="p-2 border">Stock</th>
                <th className="p-2 border">Price</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Gold Bracelet</td>
                <td className="p-2 border">12</td>
                <td className="p-2 border">Rs. 4500</td>
                <td className="p-2 border text-green-600">Active</td>
              </tr>
              <tr>
                <td className="p-2 border">Diamond Earrings</td>
                <td className="p-2 border">5</td>
                <td className="p-2 border">Rs. 12000</td>
                <td className="p-2 border text-green-600">Active</td>
              </tr>
              <tr>
                <td className="p-2 border">Silver Rings</td>
                <td className="p-2 border">0</td>
                <td className="p-2 border">Rs. 2500</td>
                <td className="p-2 border text-red-500">Out of Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Content Management */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Content Management</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Type</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Banner</td>
                <td className="p-2 border">Winter Sale</td>
                <td className="p-2 border text-green-600">Published</td>
              </tr>
              <tr>
                <td className="p-2 border">Blog</td>
                <td className="p-2 border">Jewelry Trends 2026</td>
                <td className="p-2 border text-yellow-600">Draft</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Promotions */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Promotions</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Code</th>
                <th className="p-2 border">Discount</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">WINTER10</td>
                <td className="p-2 border">10%</td>
                <td className="p-2 border text-green-600">Active</td>
              </tr>
              <tr>
                <td className="p-2 border">NEWUSER</td>
                <td className="p-2 border">15%</td>
                <td className="p-2 border text-green-600">Active</td>
              </tr>
              <tr>
                <td className="p-2 border">SUMMER</td>
                <td className="p-2 border">5%</td>
                <td className="p-2 border text-red-500">Expired</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* Orders */}
        <div className="bg-white rounded shadow p-4 overflow-x-auto">
          <h3 className="font-semibold mb-2">Order Management</h3>
          <table className="w-full text-sm mb-2 border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">Customer</th>
                <th className="p-2 border">Total</th>
                <th className="p-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">ORD123456</td>
                <td className="p-2 border">John Doe</td>
                <td className="p-2 border">Rs. 28500</td>
                <td className="p-2 border text-green-600">Delivered</td>
              </tr>
              <tr>
                <td className="p-2 border">ORD123457</td>
                <td className="p-2 border">Jane Smith</td>
                <td className="p-2 border">Rs. 12000</td>
                <td className="p-2 border text-yellow-600">Processing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
