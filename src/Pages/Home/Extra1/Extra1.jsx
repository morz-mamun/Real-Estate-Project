import SectionTitle from "../../../Components/SectionTitle";
import sell from '../../../assets/sell.png'
import buy from '../../../assets/buy.png'
import rent from '../../../assets/rent.png'
const Extra1 = () => {
  return (
    <div className="my-20 max-w-7xl mx-auto">
      <SectionTitle heading={"Unlock Opportunities"}></SectionTitle>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        <div
          className="card  bg-base-100 shadow-xl object-cover hover:scale-105 transition"
        >
          <div className="card-body">
           <div className="flex flex-col md:flex-row">
           <img className="md:w-1/2" src={sell} alt="" />
            <div className="w1/2">
            <h2 className="card-title">Sell a Home</h2>
            <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
            </div>
           </div>
           <button className="btn btn-outline border-b-4 border-red-600 hover:bg-green-600 w-fit mx-auto">See More Options</button>
          </div>
        </div>
        <div
          className="card  bg-base-100 shadow-xl object-cover hover:scale-105 transition"
        >
          <div className="card-body">
           <div className="flex flex-col md:flex-row">
           <img className="md:w-1/2" src={buy} alt="" />
            <div className="w1/2">
            <h2 className="card-title">Buy a Home</h2>
            <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
            </div>
           </div>
           <button className="btn btn-outline border-b-4 border-red-600 hover:bg-green-600 w-fit mx-auto">See More Options</button>
          </div>
        </div>
        <div
          className="card  bg-base-100 shadow-xl object-cover hover:scale-105 transition"
        >
          <div className="card-body">
           <div className="flex flex-col md:flex-row">
           <img className="md:w-1/2" src={rent} alt="" />
            <div className="w1/2">
            <h2 className="card-title">Rent a Home</h2>
            <p>No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
            </div>
           </div>
           <button className="btn btn-outline border-b-4 border-red-600 hover:bg-green-600 w-fit mx-auto">See More Options</button>
          </div>
        </div>


    
     </div>
    </div>
  );
};

export default Extra1;
