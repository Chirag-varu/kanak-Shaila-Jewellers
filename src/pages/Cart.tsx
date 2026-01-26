
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";
import b from "../assets/baner-removebg.png";
import { useCart } from "../Components/CartContext";

export const Cart = () => {
  const { cart, removeFromCart, addToCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const handleQuantityIncrease = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item) {
      addToCart({ ...item, quantity: item.quantity + 1 });
    }
  };

  const handleQuantityDecrease = (id: number) => {
    const item = cart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      addToCart({ ...item, quantity: --item.quantity });
      --item.quantity;
    }
  };

  const handleRemoveItem = (id: number) => {
    removeFromCart(id);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateDiscountedSubtotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - subtotal * discount;
  };

  const applyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(0.1);
    } else {
      alert("Invalid coupon code");
    }
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const shipping = 0; // Free shipping
    const total = subtotal - subtotal * discount + shipping;
    return total;
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 flex-grow w-full">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center text-lg">Your cart is empty.</div>
        ) : (
          <div>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-6 py-4 text-left">Remove</th>
                    <th className="px-6 py-4 text-left">Image</th>
                    <th className="px-6 py-4 text-left">Product</th>
                    <th className="px-6 py-4 text-left">Price</th>
                    <th className="px-6 py-4 text-left">Quantity</th>
                    <th className="px-6 py-4 text-left">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      </td>
                      <td className="px-6 py-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover"
                        />
                      </td>
                      <td className="px-6 py-4">{item.name}</td>
                      <td className="px-6 py-4">Rs. {item.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityDecrease(item.id)}
                            className="px-3 py-1 bg-gray-200 rounded-full"
                          >
                            -
                          </button>
                          <span className="text-lg">{item.quantity}</span>
                          <button
                            onClick={() => handleQuantityIncrease(item.id)}
                            className="px-3 py-1 bg-gray-200 rounded-full"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        Rs. {(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <div className="flex flex-col sm:flex-row justify-between mb-4">
                <label htmlFor="coupon" className="text-lg font-medium">
                  Apply Coupon:
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    id="coupon"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter coupon code"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Apply
                  </button>
                </div>
              </div>

              <div className="flex justify-between mt-4 border-t pt-4">
                <div className="text-lg font-medium">Cart Subtotal:</div>
                <div className="text-lg font-medium">
                  Rs. {calculateSubtotal().toFixed(2)}
                </div>
              </div>

              {discount > 0 && (
                <div className="flex justify-between mt-2 text-green-600">
                  <div className="text-lg font-medium">
                    Discounted Subtotal:
                  </div>
                  <div className="text-lg font-medium">
                    Rs. {calculateDiscountedSubtotal().toFixed(2)}
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-2">
                <div className="text-lg font-medium">Shipping:</div>
                <div className="text-lg font-medium">Free</div>
              </div>
              <div className="flex justify-between mt-2 border-t pt-4">
                <div className="text-xl font-semibold">Total:</div>
                <div className="text-xl font-semibold">
                  Rs. {calculateTotal().toFixed(2)}
                </div>
              </div>
              <div className="mt-8 text-center">
                <button
                  className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700"
                  onClick={() => navigate("/payment", { state: { discount, couponCode } })}
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-gray-900 py-10 px-6 bg-gray-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Section */}
          <div>
            <img
              className="w-[10rem] mb-4 mx-auto sm:mx-0"
              src={b}
              alt="Logo"
            />
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
              <div className="flex justify-center sm:justify-start space-x-4 text-2xl">
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
                <a href="#" className="hover:text-cyan-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-cyan-500">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="mb-4">
              Get updates about our latest product and offers.
            </p>
            <div className="flex space-x-4">
              <input
                type="email"
                className="w-2/3 p-2 border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
