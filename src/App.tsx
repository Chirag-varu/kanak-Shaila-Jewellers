import AdminDashboard from "./pages/AdminDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import History from "./pages/HistoryPage";
import { CartProvider } from "./Components/CartContext";
import { AuthProvider, useAuth } from "./Components/AuthContext";
import { Cart } from "./pages/Cart";
import { ScrollToTop } from './Components/ScrollToTop';
import { Productdetail } from "./Components/Productdetail";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CustomerSupport from "./Components/CustomerSupport";
import OrderHistory from "./pages/OrderHistory";
import { useState, useEffect } from "react";
import { getProducts } from "./utils/product.service";
import type { Product } from "./types";

function ProtectedRoute({ children, requiredRole }: { children: JSX.Element; requiredRole: string }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!user || (user.role !== requiredRole && user.role !== "owner")) return <Navigate to="/login" />;
  return children;
}

function AppRoutes() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/history" element={<History />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/productdetail/:id" element={<Productdetail products={products} />} />
        <Route path="/admin" element={
          <ProtectedRoute requiredRole="admin">
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/owner" element={
          <ProtectedRoute requiredRole="owner">
            <OwnerDashboard />
          </ProtectedRoute>
        } />
      </Routes>
      <CustomerSupport />
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <AppRoutes />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
