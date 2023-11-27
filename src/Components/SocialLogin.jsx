import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const SocialLogin = () => {
    const {googleLogin} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

      // sweet alert code 
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "blue",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });

    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            const userInfo = {
              name: result.user.displayName,
              email: result.user.email
            }
            axiosPublic.post('/users', userInfo)
            .then(() => {
              Toast.fire({
                icon: "success",
                title: "Login Successfully.",
              });
        //user navigate to the home page
              navigate('/')
            })
           
        })
        .catch((err) => {
            Toast.fire({
                icon: "error",
                title: err.message,
              });
        })
    }
    
    return (
        <div>
            <div className="flex items-center justify-center pb-5">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center gap-2 btn btn-outline"
        >
          <FaGoogle className="text-red-600 text-xl"></FaGoogle> <span className="text-white"> Google Sing In</span> 
        </button>
      </div>
        </div>
    );
};

export default SocialLogin;