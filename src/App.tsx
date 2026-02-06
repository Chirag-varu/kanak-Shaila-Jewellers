import AdminDashboard from "./pages/AdminDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import History from "./pages/HistoryPage";
import { CartProvider } from "./Components/CartContext";
import { AuthProvider } from "./Components/AuthContext";
import { Cart } from "./pages/Cart";
import { ScrollToTop } from './Components/ScrollToTop';
import { Productdetail } from "./Components/Productdetail";
import Payment from "./pages/Payment";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CustomerSupport from "./Components/CustomerSupport";
import OrderHistory from "./pages/OrderHistory";
import f1 from "./assets/img/products/f1.jpeg";
import f2 from "./assets/img/products/f2.jpeg";
import f3 from "./assets/img/products/f3.jpeg";
import f4 from "./assets/img/products/f4.jpeg";
import f5 from "./assets/img/products/f5.jpeg";
import f6 from "./assets/img/products/f6.jpeg";
import f7 from "./assets/img/products/f7.jpeg";
import f8 from "./assets/img/products/f8.jpeg";
// import f9 from "./assets/img/products/f9.jpeg";
import f10 from "./assets/img/products/f10.jpeg";
import n1 from "./assets/img/products/n1.jpeg";
import n2 from "./assets/img/products/n2.jpeg";
import n3 from "./assets/img/products/n3.jpeg";
import n4 from "./assets/img/products/n4.jpeg";
import n5 from "./assets/img/products/n5.jpeg";
import n6 from "./assets/img/products/n6.jpeg";
import n7 from "./assets/img/products/n7.jpeg";
import n8 from "./assets/img/products/n8.jpeg";
import n9 from "./assets/img/products/n9.jpeg";
import n10 from "./assets/img/products/n10.jpeg";

const allproducts = [
  {
    id: 1,
    name: "Gold Bracelet",
    brand: "Traditional",
    price: 4500,
    quantity: 1,
    image: f1,
  },
  {
    id: 2,
    name: "Necklace Set",
    brand: "Traditional",
    price: 18000,
    quantity: 1,
    image: f2,
  },
  {
    id: 3,
    name: "Diamond Earrings",
    brand: "Modern",
    price: 12000,
    quantity: 1,
    image: f3,
  },
  {
    id: 4,
    name: "Stud Earrings",
    brand: "Modern",
    price: 3500,
    quantity: 1,
    image: f4,
  },
  {
    id: 5,
    name: "Bridal Necklace",
    brand: "Bridal",
    price: 55000,
    quantity: 1,
    image: f5,
  },
  {
    id: 6,
    name: "Silver Rings",
    brand: "Minimal",
    price: 2500,
    quantity: 1,
    image: f6,
  },
  {
    id: 7,
    name: "Choker Set",
    brand: "Bridal",
    price: 22000,
    quantity: 1,
    image: f7,
  },
  {
    id: 8,
    name: "Bangles Set",
    brand: "Traditional",
    price: 8000,
    quantity: 1,
    image: f8,
  },
  {
    id: 10,
    name: "Designer Necklace",
    brand: "Designer",
    price: 40000,
    quantity: 1,
    image: f10,
  },

  {
    id: 11,
    name: "Pearl Earrings",
    brand: "Classic",
    price: 6000,
    quantity: 1,
    image: n1,
  },
  {
    id: 12,
    name: "Gold Bracelet",
    brand: "Traditional",
    price: 5000,
    quantity: 1,
    image: n2,
  },
  {
    id: 13,
    name: "Bridal Set",
    brand: "Bridal",
    price: 65000,
    quantity: 1,
    image: n3,
  },
  {
    id: 14,
    name: "Jewellery Flatlay",
    brand: "Collection",
    price: 15000,
    quantity: 1,
    image: n4,
  },
  {
    id: 15,
    name: "Gemstone Earrings",
    brand: "Designer",
    price: 9000,
    quantity: 1,
    image: n5,
  },
  {
    id: 16,
    name: "Traditional Bangles",
    brand: "Traditional",
    price: 7000,
    quantity: 1,
    image: n6,
  },
  {
    id: 17,
    name: "Model Jewellery Set",
    brand: "Fashion",
    price: 25000,
    quantity: 1,
    image: n7,
  },
  {
    id: 18,
    name: "Gold Kada",
    brand: "Traditional",
    price: 8500,
    quantity: 1,
    image: n8,
  },
  {
    id: 19,
    name: "Embroidered Box Set",
    brand: "Gift",
    price: 3000,
    quantity: 1,
    image: n9,
  },
  {
    id: 20,
    name: "Leaf Design Earrings",
    brand: "Minimal",
    price: 2000,
    quantity: 1,
    image: n10,
  },
];

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router> 
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
            <Route path="/productdetail/:id" element={<Productdetail products={allproducts}/>} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/owner" element={<OwnerDashboard />} />
          </Routes>
          <CustomerSupport />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
