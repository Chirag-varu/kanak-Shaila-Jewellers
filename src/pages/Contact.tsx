import AB from "../assets/img/about/banner.png";
import b from "../assets/baner-removebg.png";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";
import ContactForm from "../Components/ContactForm";
import p1 from "../assets/bag-light-removebg.png";
import p2 from "../assets/img/people/2.png";
import p3 from "../assets/img/people/3.png";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
    <div className="h-auto w-full">
      {/* Banner Section */}
      <div
        className="flex flex-col items-center justify-center w-full h-[21rem] bg-cover bg-top"
        style={{ backgroundImage: `url(${AB})` }}
      >
        <p className="text-white font-bold text-4xl mb-4">#let's_talk</p>
        <p className="text-white text-lg text-center px-4 sm:px-0">
          LEAVE A MESSAGE, WE LOVE TO HEAR FROM YOU!
        </p>
      </div>

      {/* Main */}
      <div className="flex flex-col md:flex-row items-center justify-around w-full p-8 space-y-8 md:space-y-0 overflow-hidden">
        {/* Contact Details */}
        <div className="flex flex-col items-center justify-center space-y-6 bg-gray-100 p-8 rounded-lg shadow-md w-full sm:w-auto hover:bg-gray-200">
          <h2 className="text-3xl font-semibold text-gray-800">GET IN TOUCH</h2>
          <p className="text-lg text-gray-600 font-semibold text-center sm:text-left">
            Visit one of our locations or contact us today
          </p>

          <div className="space-y-3 text-gray-700 w-full">
            <p className="font-semibold">Head Office</p>
            <p className="flex items-center space-x-2">
              <FaMapMarked />
              <span>XYZ New York</span>
            </p>
            <p className="flex items-center space-x-2">
              <MdEmail />
              <span>xyz@example.com</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaPhone />
              <span>+91 923.. .....</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaClock />
              <span>Monday to Saturday: 9:00 am to 6:00 pm</span>
            </p>
          </div>
        </div>

        {/* Map */}
        <div className="w-full max-w-4xl mt-6 sm:mt-0">
          <iframe
            title="Google Map"
            className="w-full h-[300px] rounded-lg shadow-md"
            src="https://www.google.com/maps/embed?pb=VALID_EMBED_URL_HERE"
            allowFullScreen
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>

      <section className="w-full flex flex-col md:flex-row items-center justify-around px-4 md:px-8">
        <div className="flex-1 bg-white dark:bg-gray-800/50 p-10 rounded-lg shadow-md max-w-[62rem] mb-8 md:mb-0">
          <h2 className="md:text-4xl text-3xl font-semibold mb-2 text-center">
            LEAVE A MESSAGE
          </h2>
          <p className="text-lg mb-6 text-center">
            We'd love to hear from you! Whether you have a question,
            <p>
              need support, or just want to share your thoughts, feel free to
              reach out.
            </p>
            <p>We Love To Hear From You</p>
          </p>
          <ContactForm />
        </div>

        <div className="flex flex-col gap-6 md:gap-4">
          {/* person - 1 */}
          <div className="flex gap-4 items-start justify-start">
            <img
              src={p1}
              alt="profile"
              className="rounded-full w-11 h-12 border-2 border-gray-200"
            />
            <div>
              <p className="text-sm md:text-base font-semibold"> </p>
              <p className="text-sm text-gray-600">Senior Marketing Manager</p>
              <p className="text-sm">Phone: + 000 132 533 621</p>
              <p className="text-sm">Email: chiragvaru.main@gmail.com</p>
            </div>
          </div>

          {/* person - 2 */}
          <div className="flex gap-4 items-start justify-start">
            <img
              src={p2}
              alt="profile"
              className="rounded-full w-11 h-12 border-2 border-gray-200"
            />
            <div>
              <p className="text-sm md:text-base font-semibold">
                William Smith
              </p>
              <p className="text-sm text-gray-600">Junior Marketing Manager</p>
              <p className="text-sm">Phone: +91 0095 48311</p>
              <p className="text-sm">Email: contactjr@gmail.com</p>
            </div>
          </div>

          {/* person - 3 */}
          <div className="flex gap-4 items-start justify-start">
            <img
              src={p3}
              alt="profile"
              className="rounded-full w-11 h-12 border-2 border-gray-200"
            />
            <div>
              <p className="text-sm md:text-base font-semibold">Emma Stone</p>
              <p className="text-sm text-gray-600">HR Manager</p>
              <p className="text-sm">Phone: +91 04072 53391</p>
              <p className="text-sm">Email: contactjr@gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
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
      <footer className="text-gray-900 py-10 px-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Our Policies */}
          <div>
            <h4 className="text-xl font-bold mb-4">Policies</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Payment Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-600">
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
    </motion.div>
  );
}
