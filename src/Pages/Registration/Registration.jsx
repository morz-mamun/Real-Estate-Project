import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import bg from '../../assets/bg.jpg'

const Registration = () => {
  const { userRegistration, updateUserProfile } = useAuth();
  const { register, handleSubmit, formState: {errors} } = useForm();
  const navigate = useNavigate()

    // sweetAlert 
    const Toast = Swal.mixin({
        toast: true,
        position: "top",
        iconColor: "blue",
        customClass: {
          popup: "colored-toast",
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
      });

  // handle onSubmit
  const onSubmit = (data) => 
  {
    userRegistration(data.email, data.password)
    .then( (result) => {
        // user update profile
        updateUserProfile(data.name, data.photoURL)
        .then(() => {
            
            Toast.fire({
                icon: "success",
                title: "User Registration Successfully.",
              });

              navigate('/login')
        })
        .catch((err) => {
            Toast.fire({
                icon: "error",
                title: err.message,
              });
        })
        console.log('logged User ->', result.user );
    })
    .catch((err) => {
        Toast.fire({
            icon: "error",
            title: err.message,
          });
    })
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>
          MorZE | Registration
        </title>
      </Helmet>
      <div className="hero  md:min-h-screen" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
      <div className="hero-overlay shadow-2xl bg-black bg-opacity-60"></div>
      <div className="card md:w-1/3 shadow-2xl bg-black bg-opacity-80 md:py-10 py-2">
            <SocialLogin></SocialLogin>
            <h1 className="md:text-3xl text-red-600 font-bold text-center">Registration <span className="text-white"> now!</span></h1>
         <div className="card shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  {...register("name", { required: true, maxLength: 20 })}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name?.type === "required" && (
                  <p role="alert">
                    <span className="text-red-600">Name is required</span>
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL?.type === "required" && (
                  <p role="alert">
                    <span className="text-red-600">Photo URL is required</span>
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === "required" && (
                  <p role="alert">
                    <span className="text-red-600">Email is required</span>
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
                    minLength: 6,
                    maxLength: 20,
                  })}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p role="alert">
                    <span className="text-red-600">Password is required</span>
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p role="alert">
                    <span className="text-red-600 ">
                      Password length have to 6
                    </span>
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p role="alert">
                    <span className="text-red-600">
                      Password should have at least one capital letter,
                      small letter, number and special character.{" "}
                    </span>
                  </p>
                )}

                <label className="label">
                  <p href="#" className="label-text-alt text-white cursor-pointer">
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline hover:bg-black border-red-600 text-white"
                  type="submit"
                  value="Registration"
                />
              </div>
            </form>
            <div className="text-center text-white">
              <p>
                Already have an Account?! please{" "} 
                <Link to={"/login"}>
                  <span className="underline text-red-600 font-bold">
                Login 
                  </span>
                  {" "} here.
                </Link>
              </p>
            </div>
          </div>
         </div>
      </div>
    </div>
  );
};

export default Registration;
