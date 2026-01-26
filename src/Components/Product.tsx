import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useState } from "react";

export const ProductCard = ({
  product,
  addToCart,
}: {
  product: any;
  addToCart: Function;
}) => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleProductdetail = () => {
    navigate(`/productdetail/${product.id}`);
  };

  const handleIconClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent navigation or parent click event
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    setIsClicked(true); // Set state to true for red color
    addToCart(product); // Call the addToCart function

    // Reset the color after 3 seconds
    setTimeout(() => setIsClicked(false), 3000);
  };

  return (
    <div
      className="max-w-sm mx-auto bg-white rounded-[2rem] shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 p-4 mb-4 border border-gray-300"
      onClick={handleProductdetail}
    >
      <div className="relative flex items-center justify-center w-full h-64 bg-gray-100 rounded-2xl overflow-hidden">
        {/* Image Section */}
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-full max-h-60 max-w-full transition-transform transform hover:scale-105 duration-300"
        />
      </div>
      {/* Content Section */}
      <div className="p-4">
        <p className="text-sm text-gray-500">{product.brand}</p>
        <p className="font-semibold text-xl text-gray-800">{product.name}</p>
        <div className="flex items-center mt-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 text-yellow-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.82 12.03 1.46 7.91l6.162-.894L10 2l2.378 5.016 6.162.894-4.36 4.12 1.697 6.06z" />
            </svg>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600 font-bold text-lg">
            Rs. {product.price}
          </span>
          <FontAwesomeIcon
            icon={faCartShopping}
            className={`cursor-pointer ${isClicked ? "text-[#ef3636]" : "text-black"}`}
            onClick={handleIconClick}
          />
        </div>
      </div>
    </div>
  );
};
