import b from "../assets/baner-removebg.png";
import p1 from "../assets/img/products/f1.jpeg";
import p2 from "../assets/img/products/f2.jpeg";
import p3 from "../assets/img/products/f3.jpeg";
import p4 from "../assets/img/products/f4.jpeg";
import p5 from "../assets/img/products/f5.jpeg";
import p6 from "../assets/img/products/f6.jpeg";
import p7 from "../assets/img/products/f7.jpeg";
import p8 from "../assets/img/products/f8.jpeg";
// import p9 from "../assets/img/products/f9.jpeg";
import p10 from "../assets/img/products/f10.jpeg";
import n1 from "../assets/img/products/n1.jpeg";
import n2 from "../assets/img/products/n2.jpeg";
import n3 from "../assets/img/products/n3.jpeg";
import n4 from "../assets/img/products/n4.jpeg";
import n5 from "../assets/img/products/n5.jpeg";
import n6 from "../assets/img/products/n6.jpeg";
import n7 from "../assets/img/products/n7.jpeg";
import n8 from "../assets/img/products/n8.jpeg";
import n9 from "../assets/img/products/n9.jpeg";
import n10 from "../assets/img/products/n10.jpeg";
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

export function Shop() {
  const { addToCart } = useCart();

  const products = [
  {
    id: 1,
    name: "Gold Bracelet",
    brand: "Traditional",
    price: 4500,
    quantity: 1,
    image: p1,
  },
  {
    id: 2,
    name: "Layered Necklace Set",
    brand: "Bridal",
    price: 22000,
    quantity: 1,
    image: p2,
  },
  {
    id: 3,
    name: "Diamond Earrings",
    brand: "Modern",
    price: 12000,
    quantity: 1,
    image: p3,
  },
  {
    id: 4,
    name: "Gold Stud Earrings",
    brand: "Classic",
    price: 3500,
    quantity: 1,
    image: p4,
  },
  {
    id: 5,
    name: "Bridal Necklace Set",
    brand: "Bridal",
    price: 55000,
    quantity: 1,
    image: p5,
  },
  {
    id: 6,
    name: "Silver Ring Set",
    brand: "Minimal",
    price: 2500,
    quantity: 1,
    image: p6,
  },
  {
    id: 7,
    name: "Designer Choker",
    brand: "Designer",
    price: 18000,
    quantity: 1,
    image: p7,
  },
  {
    id: 8,
    name: "Traditional Bangles",
    brand: "Traditional",
    price: 8000,
    quantity: 1,
    image: p8,
  },
  {
    id: 10,
    name: "Designer Necklace",
    brand: "Designer",
    price: 40000,
    quantity: 1,
    image: p10,
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
    name: "Bridal Jewellery Set",
    brand: "Bridal",
    price: 65000,
    quantity: 1,
    image: n3,
  },
  {
    id: 14,
    name: "Antique Necklace",
    brand: "Antique",
    price: 30000,
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
    name: "Kundan Bangles",
    brand: "Traditional",
    price: 7500,
    quantity: 1,
    image: n6,
  },
  {
    id: 17,
    name: "Fashion Jewellery Set",
    brand: "Fashion",
    price: 25000,
    quantity: 1,
    image: n7,
  },
  {
    id: 18,
    name: "Gold Kada",
    brand: "Traditional",
    price: 9000,
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
      <div className="flex mb-4 flex-wrap mt-[4rem]">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>

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
          {/* Contact Section */}
          <div>
            <img className=" w-[10rem] mb-4" src={b} alt="Logo" />
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <p className="mb-2">
              <strong>Address:</strong> XYZ..., India
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> +91 xyz...
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
          <p className="text-gray-500">© 2026, Co-Developer Chirag Varu - E-commerce</p></div>
      </footer>
    </div>
  );
}
