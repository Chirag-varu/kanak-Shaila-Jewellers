import Hero1 from "../assets/img/hero4.png";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const navigate = useNavigate();

  const handleShownow = () => {
    navigate("/Shop");
  }
  return (
    <div className="bg-[#e3e6f3] flex items-center justify-center h-[25rem] md:h-[41rem] lg:h-[48rem] relative overflow-hidden w-full">
      <div className="z-10 absolute md:left-24 left-8">
        <p
          className="text-2xl mb-3"
          style={{ fontFamily: "'Spartan', sans-serif" }}
        >
          Trade-in-offer
        </p>
        <p
          className="lg:text-5xl md:text-4xl text-md font-semibold mb-3 subpixel-antialiased"
          style={{ fontFamily: "'Spartan', sans-serif" }}
        >
          Super value deals
        </p>
        <p className="md:text-5xl text-2xl font-semibold text-[#088178] antialiased mb-6">
          On all products
        </p>
        <p className="hidden sm:block mb-3">
          Save more with coupons & up to 70% off!
        </p>
        <p className="block sm:hidden mb-3">
          Save more with coupons <br />& up to 70% off!
        </p>

        <button className="bg-transparent bg-[url('/src/assets/button.png')] bg-no-repeat text-[#088178] px-14 sm:px-20 py-2 sm:py-3.5 border-0 cursor-pointer font-bold text-sm" onClick={handleShownow}>
          Shop Now
        </button>
      </div>
      <div className="absolute md:right-20 md:top-4 right-0 overflow-hidden">
        <img
          src={Hero1}
          alt=""
          className="md:h-[47rem] h-[25rem] scale-125 bg-transparent z-30"
        />
      </div>
    </div>
  );
}
