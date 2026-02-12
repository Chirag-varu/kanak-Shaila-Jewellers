import React, { useState, useEffect } from "react";
import { getProducts, addProduct, updateProduct, deleteProduct } from "../utils/product.service";
import { getAllOrders } from "../utils/order.service";
import { seedDatabase } from "../utils/seed";
import type { Product, Order } from "../types";

const emptyForm = { name: "", brand: "", price: 0, quantity: 0, image: "", description: "" };

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [activeTab, setActiveTab] = useState<"inventory" | "orders">("inventory");
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(true);
  const [seeding, setSeeding] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const [prods, ords] = await Promise.all([getProducts(), getAllOrders()]);
    setProducts(prods);
    setOrders(ords);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    await addProduct({
      name: formData.name,
      brand: formData.brand,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      image: formData.image || "/img/products/f1.jpeg",
      description: formData.description,
      status: Number(formData.quantity) > 0 ? "Active" : "Out of Stock",
    });
    setFormData(emptyForm);
    setShowAddForm(false);
    await fetchData();
  };

  const handleUpdateProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    await updateProduct(editingProduct.id, {
      name: formData.name,
      brand: formData.brand,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      image: formData.image,
      description: formData.description,
      status: Number(formData.quantity) > 0 ? "Active" : "Out of Stock",
    });
    setEditingProduct(null);
    setFormData(emptyForm);
    await fetchData();
  };

  const handleDeleteProduct = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    await deleteProduct(id);
    await fetchData();
  };

  const startEdit = (product: Product) => {
    setEditingProduct(product);
    setShowAddForm(false);
    setFormData({
      name: product.name,
      brand: product.brand,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
      description: product.description || "",
    });
  };

  const handleSeed = async () => {
    if (!window.confirm("This will add 19 sample products to Firestore. Continue?")) return;
    setSeeding(true);
    await seedDatabase();
    await fetchData();
    setSeeding(false);
  };

  const cancelForm = () => {
    setShowAddForm(false);
    setEditingProduct(null);
    setFormData(emptyForm);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading dashboard...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded font-semibold ${activeTab === "inventory" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("inventory")}
        >
          Inventory ({products.length})
        </button>
        <button
          className={`px-4 py-2 rounded font-semibold ${activeTab === "orders" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("orders")}
        >
          Orders ({orders.length})
        </button>
      </div>

      {/* Inventory Tab */}
      {activeTab === "inventory" && (
        <div>
          <div className="flex gap-2 mb-4">
            <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              onClick={() => { setShowAddForm(true); setEditingProduct(null); setFormData(emptyForm); }}
            >
              + Add Product
            </button>
            {products.length === 0 && (
              <button
                className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 disabled:opacity-50"
                onClick={handleSeed}
                disabled={seeding}
              >
                {seeding ? "Seeding..." : "Seed Sample Products"}
              </button>
            )}
          </div>

          {/* Add/Edit Form */}
          {(showAddForm || editingProduct) && (
            <form
              onSubmit={editingProduct ? handleUpdateProduct : handleAddProduct}
              className="bg-gray-50 border rounded p-4 mb-4 grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              <h3 className="col-span-full font-semibold text-lg">
                {editingProduct ? "Edit Product" : "Add New Product"}
              </h3>
              <input
                className="border rounded px-3 py-2"
                placeholder="Product Name"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Brand"
                value={formData.brand}
                onChange={e => setFormData({ ...formData, brand: e.target.value })}
                required
              />
              <input
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Price"
                value={formData.price || ""}
                onChange={e => setFormData({ ...formData, price: Number(e.target.value) })}
                required
                min="0"
              />
              <input
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Stock Quantity"
                value={formData.quantity || ""}
                onChange={e => setFormData({ ...formData, quantity: Number(e.target.value) })}
                required
                min="0"
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Image URL (e.g. /img/products/f1.jpeg)"
                value={formData.image}
                onChange={e => setFormData({ ...formData, image: e.target.value })}
              />
              <input
                className="border rounded px-3 py-2"
                placeholder="Description"
                value={formData.description}
                onChange={e => setFormData({ ...formData, description: e.target.value })}
              />
              <div className="col-span-full flex gap-2">
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  {editingProduct ? "Update" : "Add"}
                </button>
                <button type="button" className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500" onClick={cancelForm}>
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Products Table */}
          <div className="bg-white rounded shadow overflow-x-auto">
            <table className="w-full text-sm border">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-2 border text-left">Image</th>
                  <th className="p-2 border text-left">Product</th>
                  <th className="p-2 border text-left">Brand</th>
                  <th className="p-2 border text-right">Price</th>
                  <th className="p-2 border text-right">Stock</th>
                  <th className="p-2 border text-center">Status</th>
                  <th className="p-2 border text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(product => (
                  <tr key={product.id} className="border-b hover:bg-gray-50">
                    <td className="p-2 border">
                      <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded" />
                    </td>
                    <td className="p-2 border font-medium">{product.name}</td>
                    <td className="p-2 border">{product.brand}</td>
                    <td className="p-2 border text-right">Rs. {product.price}</td>
                    <td className="p-2 border text-right">{product.quantity}</td>
                    <td className="p-2 border text-center">
                      <span className={`px-2 py-1 rounded text-xs ${product.quantity > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {product.quantity > 0 ? "Active" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="p-2 border text-center">
                      <button
                        className="text-blue-600 hover:underline mr-2"
                        onClick={() => startEdit(product)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-600 hover:underline"
                        onClick={() => handleDeleteProduct(product.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
                {products.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-4 text-center text-gray-500">
                      No products found. Add a product or seed sample data.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === "orders" && (
        <div className="bg-white rounded shadow overflow-x-auto">
          <table className="w-full text-sm border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border text-left">Order ID</th>
                <th className="p-2 border text-left">Customer</th>
                <th className="p-2 border text-left">Date</th>
                <th className="p-2 border text-right">Total</th>
                <th className="p-2 border text-center">Payment</th>
                <th className="p-2 border text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 border font-mono text-xs">{order.id?.slice(0, 8)}</td>
                  <td className="p-2 border">{order.userEmail}</td>
                  <td className="p-2 border">{order.date}</td>
                  <td className="p-2 border text-right font-medium">Rs. {order.total}</td>
                  <td className="p-2 border text-center text-xs">{order.paymentMethod}</td>
                  <td className="p-2 border text-center">
                    <span className={`px-2 py-1 rounded text-xs ${
                      order.status === "Delivered" ? "bg-green-100 text-green-700" :
                      order.status === "Processing" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-4 text-center text-gray-500">
                    No orders yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
