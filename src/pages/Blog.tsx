import AB from "../assets/img/about/banner.png";
import b from "../assets/baner-removebg.png";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import b1 from "../assets/img/blog/b1 (1).jpg";
import b2 from "../assets/img/blog/b2 (1).jpg";
import b3 from "../assets/img/blog/b3.jpg";
import b4 from "../assets/img/blog/b4.jpg";
import b5 from "../assets/img/blog/b5.jpg";
import b6 from "../assets/img/blog/b6.jpg";
import b7 from "../assets/img/blog/b7 (1).jpg";

export function Blog() {
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
          <p className="text-white font-bold text-4xl mb-4">#readMore</p>
          <p className="text-white text-lg text-center px-4 sm:px-0">
            Read all case studies about our products!
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center justify-center relative p-8">
          {[
            {
              img: b1,
              date: "13/01/22",
              title: "The Cotton-jersey Zip-Up Hoodies",
              description:
                "Kick starter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
            },
            {
              img: b2,
              date: "18/01/22",
              title: "How to Style a Quiff",
              description:
                "Kick starter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
            },
            {
              img: b3,
              date: "31/01/22",
              title: "Must-Have Skater Girl items",
              description:
                "Kick starter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
            },
            {
              img: b4,
              date: "05/02/22",
              title: "Runway-Inspired Trends",
              description:
                "Kick starter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
            },
            {
              img: b5,
              date: "13/02/22",
              title: "AW20 GirlsWear Trends",
              description:
                "Kick starter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
            },
            {
              img: b6,
              date: "19/02/22",
              title: "Zara New Collection Sunny Time Wear",
              description:
                "Kick starter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
            },
            {
              img: b7,
              date: "25/02/22",
              title: "Modern Night-Out Design for Parties",
              description:
                "Kick starter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row p-8 relative mt-8"
            >
              <p className="absolute font-light text-[4rem] select-none top-[-2.5rem] left-9 text-gray-500">
                {item.date}
              </p>
              <img
                src={item.img}
                alt="product image"
                className="w-full md:w-[42rem] h-[18rem] object-cover z-20"
              />
              <div className="flex flex-col justify-start max-w-[35rem] ml-8 gap-4">
                <p className="text-2xl font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.description}</p>
                <div className="flex hover:text-cyan-600 gap-2">
                  <button className="rounded hover:text-cyan-600 py-2">
                    CONTINUE READING
                  </button>
                  <div className="border-t border-black hover:text-cyan-600 mt-4 w-[3rem]"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="w-full flex items-center justify-center gap-4 md:mt-[3rem] mb-[4rem]">
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

        {/* Newsletter Section */}
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
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
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
