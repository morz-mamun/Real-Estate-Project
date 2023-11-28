
import { Link } from "react-router-dom";
import error from '../../assets/error.jpg'

const Error = () => {
    return (
        <div className="hero min-h-screen bg-black bg-opacity-80">
        <div className="hero-content flex-col lg:flex-row">
          <img src={error} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-red-600">OOPS...!! Error page Found.</h1>
            <p className="py-6 text-white">Sorry, We can not find a page you are looking for.</p>
           <Link to='/'> <button className="btn bg-gradient-to-r from-red-700 to-red-300 text-white font-bold">Go Back to Home</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Error;
