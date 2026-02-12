import { Hero } from "../Components/Hero";
import b from "../assets/baner-removebg.png";
import f1 from "../assets/img/features/f1.png";
import f2 from "../assets/img/features/f2.png";
import f3 from "../assets/img/features/f3.png";
import f4 from "../assets/img/features/f4.png";
import f5 from "../assets/img/features/f5.png";
import f6 from "../assets/img/features/f6.png";
import b2 from "../assets/img/banner/b2.jpg";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import app from "../assets/img/pay/app.jpg";
import pay from "../assets/img/pay/pay.png";
import play from "../assets/img/pay/play.jpg";
import { useCart } from "../Components/CartContext";
import { ProductCard } from "../Components/Product";
import { useState, useEffect } from "react";
import { getProducts } from "../utils/product.service";
import type { Product } from "../types";

export function Home() {
  const { addToCart } = useCart();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setAllProducts);
  }, []);

  const featured = allProducts.slice(0, 9);
  const newArrivals = allProducts.slice(9);

  const handleSignUp = () => {
    if (/\S+@\S+\.\S+/.test(email)) {
      setMessage("Email has been sent!");
      setEmail("");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      setMessage("Please enter a valid email.");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="h-screen w-full">
      <Hero />

      {/* Cards */}
      <section className="feature flex items-center justify-between flex-wrap w-full py-[40px] px-[80px]">
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f1} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#fddde4] mt-4">
            Free Shipping
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f2} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#cdebbc] mt-4">
            Online Order
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f3} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#d1e8f2] mt-4">
            Save Money
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f4} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#cdd4f8] mt-4">
            Promotions
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f5} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#f6dbf6] mt-4">
            Happy Sell
          </p>
        </div>
        <div className="fe-box w-[11.6rem] h-[12.9rem] text-center p-[25px_13px] shadow-[20px_20px_34px_rgba(0,0,0,0.03)] border border-[#cce7d0] rounded-md my-[15px] hover:shadow-[10px_10px_35px_rgba(70,62,221,0.9)]">
          <img src={f6} alt="Feature-1" />
          <p className="inline-block px-[8px] py-[9px_8px_6px_8px] leading-none rounded-md text-[#088178] bg-[#fff2e5] mt-4">
            24/7 Support
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <div className="flex flex-col items-center justify-center">
        <p className="md:text-5xl text-3xl font-bold mb-4">Featured Products</p>
        <p className="text-md text-[#465b52] mb-8">
          Summer Collection New Modern Design
        </p>
      </div>

      <div className="flex mb-4 flex-wrap">
        {featured.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* Repair Services */}
      <div
        className="w-full h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${b2})` }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black bg-opacity-50 p-4">
          <p className="text-white font-semibold text-2xl">Repair Services</p>
          <p className="text-white text-4xl font-bold">
            Up to <span className="text-[#ef3636]">70% Off</span> - All Jewellery Repairs & Servicing
          </p>
          <button className="bg-slate-50 text-black hover:bg-[#ef3636] hover:text-white mt-4 px-6 py-2 rounded-md ">
            Explore More
          </button>
        </div>
      </div>

      {/* New Arrivals */}
      <div className="flex flex-col items-center justify-center mt-12">
        <p className="md:text-5xl text-3xl font-bold mb-4">New Arrivals</p>
        <p className="text-md text-[#465b52] mb-8">
          Summer Collection New Modern Design
        </p>
      </div>

      <div className="flex mb-4 flex-wrap">
        {newArrivals.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

      {/* News letter */}
      <section
        id="newsletter"
        className="bg-cover bg-center py-8 px-6 mb-8 mt-8 flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
      >
        <div className="text-center mb-6">
          <h4 className="text-2xl font-semibold mb-2 text-white">
            Sign Up For Newsletters
          </h4>
          <p className="text-gray-200">
            Get E-mail updates about our latest shop and{" "}
            <span className="text-red-500 font-bold">special offers.</span>
          </p>
        </div>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
        {message && (
          <p className="mt-4 text-sm text-green-600 font-semibold">{message}</p>
        )}
      </section>

      {/* Footer */}
      <footer className="text-gray-900 py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img className=" w-[10rem] mb-4" src={b} alt="Logo" />
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="mb-2">
                <strong>Address:</strong> Kanak Shaila Jewellers, opp Santacruz railway station (west), mumbai -400055
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +91 7208594701
              </p>
            <p className="mb-4">
              <strong>Hours:</strong> 10:00 - 10:00, Mon-Sat
            </p>
            <div>
              <h4 className="text-lg font-bold mb-2">Follow Us</h4>
              <div className="flex space-x-4 text-2xl">
                <FaFacebookSquare className="text-blue-500 hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="text-pink-500 hover:text-pink-600 cursor-pointer" />
                <FaTwitterSquare className="text-blue-400 hover:text-blue-500 cursor-pointer" />
                <FaPinterestP className="text-red-500 hover:text-red-600 cursor-pointer" />
                <FaYoutube className="text-red-600 hover:text-red-700 cursor-pointer" />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-600">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-600">Delivery Information</a></li>
              <li><a href="#" className="hover:text-cyan-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-600">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-cyan-600">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">My Account</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-600">Sign In</a></li>
              <li><a href="#" className="hover:text-cyan-600">View Cart</a></li>
              <li><a href="#" className="hover:text-cyan-600">My Wishlist</a></li>
              <li><a href="#" className="hover:text-cyan-600">Track My Order</a></li>
              <li><a href="#" className="hover:text-cyan-600">Help</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Install App</h4>
            <p className="mb-4">From App Store or Google Play</p>
            <div className="flex gap-4 mb-4">
              <img className="w-32 cursor-pointer" src={app} alt="App Store" />
              <img className="w-32 cursor-pointer" src={play} alt="Google Play" />
            </div>
            <p className="mb-2">Secured Payment Gateways</p>
            <img className="w-48 cursor-pointer" src={pay} alt="Payment Gateways" />
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500">&copy; 2026, E-commerce</p>
        </div>
      </footer>
    </div>
  );
}
