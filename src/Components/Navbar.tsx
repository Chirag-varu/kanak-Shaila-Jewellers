import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useCart } from "./CartContext";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import banner from "../assets/bag-light-removebg.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();
  const { isLoggedIn, user, logout } = useAuth();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 shadow-lg">
  <div className="flex items-center justify-between h-[5.8rem] px-4 sm:px-10 md:px-20">

    {/* Logo */}
    <Link to="/" onClick={closeMenu} className="flex items-center gap-3">
      <img
        src={banner}
        alt="Logo"
        className="w-12 sm:w-16 rounded-full border-2 border-[#088178] shadow-md"
      />
      <span className="hidden sm:block text-2xl font-bold tracking-wide text-[#088178] font-serif">
        Kanak Shaila Jewellers
      </span>
    </Link>

    {/* Hamburger */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-2xl text-[#088178] hover:text-[#ef3636] transition"
    >
      <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
    </button>

    {/* Menu */}
    <div
      className={`absolute md:static top-[5.8rem] left-0 w-full md:w-auto bg-white/95 md:bg-transparent transition-all duration-300 ease-in-out
      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 md:opacity-100 md:translate-y-0"}
      md:flex`}
    >
      <ul className="flex flex-col md:flex-row gap-6 md:gap-10 items-center py-6 md:py-0 text-lg font-semibold">

        {["Home","Shop","Blog","About","Contact"].map(item => (
          <li key={item}>
            <Link
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={closeMenu}
              className="hover:text-[#ef3636] transition relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#ef3636] hover:after:w-full after:transition-all"
            >
              {item}
            </Link>
          </li>
        ))}

        {!isLoggedIn ? (
          <>
            <Link to="/login" onClick={closeMenu} className="hover:text-[#ef3636]">Login</Link>
            <Link to="/signup" onClick={closeMenu} className="hover:text-[#ef3636]">Signup</Link>
          </>
        ) : (
          <>
            <Link to="/order-history" onClick={closeMenu} className="hover:text-[#ef3636]">Orders</Link>
            {user?.role === "admin" && (
              <Link to="/admin" onClick={closeMenu} className="hover:text-[#ef3636]">Admin</Link>
            )}
            {user?.role === "owner" && (
              <>
                <Link to="/admin" onClick={closeMenu} className="hover:text-[#ef3636]">Admin</Link>
                <Link to="/owner" onClick={closeMenu} className="hover:text-[#ef3636]">Owner</Link>
              </>
            )}
            <button onClick={() => { logout(); closeMenu(); }} className="hover:text-[#ef3636]">
              Logout
            </button>
          </>
        )}

        {/* Cart */}
        <Link to="/Cart" onClick={closeMenu} className="relative">
          <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-[2px] rounded-full shadow">
              {cartCount}
            </span>
          )}
        </Link>
      </ul>
    </div>
  </div>
</nav>
  );
}

export default Navbar;
