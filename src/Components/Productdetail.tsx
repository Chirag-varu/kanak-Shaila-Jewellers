import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import b from "../assets/baner-removebg.png";
import app from "../assets/img/pay/app.jpg";
import pay from "../assets/img/pay/pay.png";
import play from "../assets/img/pay/play.jpg";
import { useCart } from "./CartContext";

export const Productdetail: React.FC<{ products: any[] }> = ({ products }) => {
  const { addToCart } = useCart();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [message, setMessage] = useState("");

  const handleAddtocart = () => {
    setMessage("product is added to cart!");
    addToCart(product);
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  if (!product) {
    return (
      <h1 className="text-center text-3xl font-bold mt-10">
        Product not found
      </h1>
    );
  }

  const averageRating = 4.5; // Static value for now
  const fullStars = Math.floor(averageRating);
  const halfStar = averageRating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="flex flex-col w-full bg-gray-50">
        <div className="p-4 sm:p-6 md:p-10 lg:p-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Image */}
            <div className="w-full max-w-md mx-auto lg:max-w-none">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-2xl shadow-lg w-full md:w-[40rem] md:h-[40rem] transition-transform duration-300 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4">
                {product.name}
              </h1>
              <p className="text-lg text-gray-500 mb-6 italic">
                {product.brand}
              </p>

              <div className="flex items-center text-yellow-500 mb-6">
                {[...Array(fullStars)].map((_, index) => (
                  <FaStar key={`full-${index}`} />
                ))}
                {halfStar && <FaStarHalfAlt />}
                {[...Array(emptyStars)].map((_, index) => (
                  <FaRegStar key={`empty-${index}`} />
                ))}
                <span className="ml-2 text-gray-600 text-sm">
                  {averageRating} / 5 ({product.reviews?.length || 0} reviews)
                </span>
              </div>

              <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-6">
                Rs. ₹{product.price.toLocaleString()}
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-6">
                This product is crafted with care to meet your expectations. Its
                unique features make it a must-have!
              </p>

              <button
                className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
                onClick={handleAddtocart}
              >
                Add to Cart
              </button>

              {/* Message Add to cart */}
              {message && (
                <p className="mt-4 text-sm text-green-600 font-semibold">
                  {message}
                </p>
              )}

              <div className="mt-6 space-y-2 text-sm text-gray-500">
                <p>✔ 100% Original product.</p>
                <p>✔ Cash on delivery available.</p>
                <p>✔ Easy returns within 7 days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 mt-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Description</h2>
        <p className="text-sm sm:text-md text-gray-700">
          {product.description ||
            "An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence."}
        </p>
      </section>

      {/* Customer Reviews Section */}
      <section className="px-4 sm:px-6 md:px-10 lg:px-20 mt-8 mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">
          Reviews ({product.reviews?.length || 0})
        </h2>
        {product.reviews && product.reviews.length > 0 ? (
          product.reviews.map((review: any, index: number) => (
            <div
              key={index}
              className="border p-3 sm:p-4 rounded-lg mb-4 shadow-sm bg-gray-100"
            >
              <p className="font-bold">{review.user}</p>
              <p className="text-gray-600">{review.comment}</p>
              <p className="text-yellow-500 text-sm">
                {"★".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No reviews yet.</p>
        )}
      </section>

      {/* Footer */}
      <footer className="text-gray-900 py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
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

          {/* About Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* My Account Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">My Account</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Sign In
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  View Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  My Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Track My Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Install App Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Install App</h4>
            <p className="mb-4">From App Store or Google Play</p>
            <div className="flex gap-4 mb-4">
              <img className="w-32 cursor-pointer" src={app} alt="App Store" />
              <img
                className="w-32 cursor-pointer"
                src={play}
                alt="Google Play"
              />
            </div>
            <p className="mb-2">Secured Payment Gateways</p>
            <img
              className="w-48 cursor-pointer"
              src={pay}
              alt="Payment Gateways"
            />
          </div>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-500">© 2026, E-commerce</p>
        </div>
      </footer>
    </div>
  );
};
