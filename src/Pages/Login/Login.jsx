import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../Components/SocialLogin";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import bg from '../../assets/bg.jpg'
import { Helmet } from "react-helmet";


const Login = () => {
  const { userLogin } = useAuth();
  const location = useLocation();
  console.log(location);
  //   const to = location.from.pathname === 'login' || location.from.pathname === 'registration' ?

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

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
  const onSubmit = (data) => {
    userLogin(data.email, data.password)
      .then(() => {
        Toast.fire({
          icon: "success",
          title: "User login Successfully.",
        });

        navigate("/");
      })
      .catch((err) => {
        Toast.fire({
          icon: "error",
          title: err.message,
        });
      });
    console.log(data);
  };
  return (
   <div>
    <Helmet>
      <title>MorZE | Login</title>
    </Helmet>
     <div className="hero px-5 md:px-0 min-h-screen" style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}}>
        <div className="hero-overlay shadow-2xl bg-black bg-opacity-60"></div>
        <div className="card md:w-1/3 shadow-2xl bg-black bg-opacity-80 md:py-10 py-2">
          <SocialLogin></SocialLogin>
          <h1 className="md:text-3xl text-red-600 font-bold text-center">
            Log In <span className="text-white"> now!</span>
          </h1>
          <div className="card shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                      Password should have at least one capital letter, small
                      letter, number and special character.{" "}
                    </span>
                  </p>
                )}

                <label className="label">
                  <p
                    href="#"
                    className="label-text-alt text-white cursor-pointer"
                  >
                    Forgot password?
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-outline hover:bg-black border-red-600 text-red-600"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <div className="text-center text-white">
              <p>
                New in this website! please{" "}
                <Link to={"/registration"}>
                  <span className="underline text-red-600 font-bold">
                    Registration
                  </span>{" "}
                  here.
                </Link>
              </p>
            </div>
          </div>
        </div>
    </div>
   </div>
  );
};

export default Login;
