import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { AuthContextCine } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [view, setView] = useState(true);
  const { loginUser, googlePopupLogin, logOut, resetPassword } =
    useContext(AuthContextCine);
  const loc = useLocation();
  const navigateTo = useNavigate();
  // console.log(loc);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        // console.log(res.user);
        // No way login if not verified
        if (!res.user.emailVerified) {
          logOut().then().catch();
          toast.error("Verify your Email first please!");
          return;
          // No way login if not verified end
        } else {
          toast.success("User Login success");
          navigateTo(loc?.state ? loc?.state : "/");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  const handleGooglePopupLogin = () => {
    googlePopupLogin()
      .then(() => {
        toast.success("User Google Login success");
        navigateTo(loc?.state ? loc?.state : "/");
      })
      .catch((err) => toast.error(err.message));
  };

  const getEmail = useRef(null);
  const handleForgotPassword = () => {
    const email = getEmail.current.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Give me a valid email in email field");
      return;
    } else {
      resetPassword(email)
        .then(toast.success("reset email sent!"))
        .catch((err) => toast.error(err.message));
    }
  };

  return (
    <div className="hero min-h-[70vh]">
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <h1 className="text-custom-blue text-2xl text-center pt-6 font-semibold border-b pb-6 mx-8">
          Login your account
        </h1>
        <form onSubmit={handleLogin} className="card-body py-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              ref={getEmail}
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type={view ? "password" : "text"}
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <span
              className="absolute top-[50px] right-3"
              onClick={() => setView(!view)}
            >
              {view ? <FaRegEyeSlash /> : <FaRegEye />}
            </span>
            <label className="label">
              <a
                onClick={handleForgotPassword}
                className="label-text-alt link link-hover font-semibold"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn bg-purple-500 hover:bg-purple-500 text-white font-semibold">
              Login
            </button>
          </div>
        </form>
        <div className="text-center mb-4 text-sm font-semibold">
          <p>
            Dont’t Have An Account ?{" "}
            <Link
              to={"/register"}
              state={location.pathname}
              className="text-purple-500"
            >
              Register
            </Link>
          </p>
        </div>
        <div className="mx-auto space-x-1">
          <button
            onClick={handleGooglePopupLogin}
            className="mb-5 text-2xl px-5 py-2 rounded-lg bg-purple-200"
          >
            <FcGoogle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
