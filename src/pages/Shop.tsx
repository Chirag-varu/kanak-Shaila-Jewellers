import b from "../assets/baner-removebg.png";
import { GoArrowRight } from "react-icons/go";
import b1 from "../assets/img/banner/b1.jpg";
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

export function Shop() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="h-screen w-full">
      {/* Banner Section */}
      <div
        className="flex flex-col items-center justify-center w-full h-[21rem] bg-cover bg-top"
        style={{ backgroundImage: `url(${b1})` }}
      >
        <p className="text-white font-bold text-4xl mb-4">#stayhome</p>
        <p className="text-white text-lg">
          Save more with coupons & up to 70% off!
        </p>
      </div>

      {/* Main */}
      {loading ? (
        <div className="flex items-center justify-center py-20">
          <p className="text-lg text-gray-500">Loading products...</p>
        </div>
      ) : (
        <div className="flex mb-4 flex-wrap mt-[4rem]">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}

      {/* navigation button */}
      <div className="w-full flex items-center justify-center gap-4 mt-[4rem] mb-[4rem]">
        <button className="bg-[#088178] hover:bg-[#088188] text-white font-bold text-lg w-[3.2rem] h-[3rem] rounded-md">
          1
        </button>
        <button className="bg-[#088178] hover:bg-[#088188] text-white font-bold text-lg w-[3.2rem] h-[3rem] rounded-md">
          2
        </button>
        <button
          className="bg-[#088178] flex items-center justify-center hover:bg-[#088188] text-white font-bold text-lg w-[3.2rem] h-[3rem] rounded-md transition-colors duration-300"
          aria-label="Next"
        >
          <GoArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* News letter */}
      <section
        id="newsletter"
        className="bg-cover bg-center py-8 px-6 mb-8 mt-8"
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
            className="border border-gray-300 rounded-lg px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
            Sign Up
          </button>
        </div>
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
          <p className="text-gray-500">&copy; 2026, E-commerce</p></div>
      </footer>
    </div>
  );
}
