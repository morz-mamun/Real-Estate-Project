import { FaServicestack } from "react-icons/fa";
import banner3 from "../../assets/banner3.jpg";
import Marquee from "react-fast-marquee";

const Banner = () => {
  return (
    <div>
      <div
        className="hero  place-item-center md:pt-10 h-[200px] md:h-[700px] w-full"
        style={{
          backgroundImage: `url(${banner3})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay bg-opacity-5"></div>
        <div className="bg-black bg-opacity-20 rounded-lg">
          <div className="hero-content text-center text-neutral-content">
            <div className="md:w-[800px] md:p-10 p-10">
              <p className="mb-5 text-red-600 font-bold text-xl">Real Estate Solution</p>
              <h1 className="mb-5 md:text-5xl font-bold uppercase">
                Choose The Comfort Place To Stay 
              </h1>
            </div>
          </div>
        </div>
      </div>

      <Marquee className="h-12 md:h-16 bg-[#a4ec46] font-bold uppercase md:text-3xl ">
       --- maximum service --- <FaServicestack></FaServicestack> --- minimum price --- maximum service --- <FaServicestack></FaServicestack> --- minimum price
      </Marquee>
    </div>
  );
};

export default Banner;
