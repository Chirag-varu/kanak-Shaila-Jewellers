import AB from "../assets/img/about/banner.png";
import a6 from "../assets/img/about/a6.jpg";
import b from "../assets/baner-removebg.png";
import b16 from "../assets/img/banner/b16.jpg";
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
import { motion } from "framer-motion";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full">
        {/* Banner Section */}
        <div
          className="flex flex-col items-center justify-center w-full h-[21rem] bg-cover bg-top"
          style={{ backgroundImage: `url(${AB})` }}
        >
          <p className="text-white font-bold text-3xl md:text-4xl mb-4">
            #Know Us
          </p>
          <p className="text-white text-base md:text-lg">
            Everything here is about our services.
          </p>
        </div>

        {/* Main Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full p-6 md:p-16 space-y-6 md:space-y-0">
          {/* Image Section */}
          <div
            className="w-full md:w-1/2 h-64 md:h-[60vh] bg-cover bg-center rounded-lg shadow-lg border border-gray-300"
            style={{ backgroundImage: `url(${a6})` }}
          ></div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start space-y-6 md:space-y-8 m-4">
            <p className="font-bold text-2xl md:text-4xl lg:text-5xl">
              Who We Are?
            </p>
            <p className="text-gray-700 text-base md:text-lg">
              We are a team of dedicated professionals committed to providing{" "}
              <br />
              high-quality services.
            </p>

            {/* Marquee Section */}
            <div className="w-full bg-gray-300 p-4 rounded-lg shadow-md">
              <div className="overflow-hidden">
                <div
                  className="whitespace-nowrap animate-marquee text-lg font-bold text-center"
                  style={{
                    animation: "marquee 15s linear infinite",
                  }}
                >
                  Welcome to our website! Check out our latest offers and deals.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download Section */}
        <div className="w-full flex flex-col items-center space-y-6 py-10">
          <p className="font-bold text-3xl md:text-5xl">
            Download Our <span className="text-cyan-600 underline">App</span>
          </p>
          <img
            src={b16}
            alt="App Banner"
            className="w-full max-w-[600px] rounded-lg shadow-lg"
          />
        </div>

        {/* Newsletter Section */}
        <section
          id="newsletter"
          className="bg-cover bg-center py-8 px-4 md:px-16"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          }}
        >
          <div className="text-center mb-6">
            <h4 className="text-xl md:text-2xl font-semibold text-white">
              Sign Up For Newsletters
            </h4>
            <p className="text-gray-200">
              Get E-mail updates about our latest shop and{" "}
              <span className="text-red-500 font-bold">special offers.</span>
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <input
              type="text"
              placeholder="Your email address"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
              Sign Up
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-gray-900 py-10 px-6 bg-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Contact Section */}
            <div>
              <img className="w-[10rem] mb-4" src={b} alt="Logo" />
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
                <img
                  className="w-32 cursor-pointer"
                  src={app}
                  alt="App Store"
                />
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
            <p className="text-gray-500">© 2026, Co-Developer Chirag Varu - E-commerce</p>
          </div>
        </footer>

        {/* Global Style for Marquee */}
        <style>
          {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
        </style>
      </div>
    </motion.div>
  );
}
