import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContextCine } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  const [view, setView] = useState(true);
  const navigateTo = useNavigate();
  const { createUser, updateUser, emailVerification, logOut } =
    useContext(AuthContextCine);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);
    if (password.length < 6) {
      toast.error(
        "Password must be at least 6 character and one uppercase letter"
      );
      return;
    } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
      toast.error("Add at least one uppercase letter");
      return;
    }
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        toast.success("User register success");
        updateUser(name, photo)
          .then(() => {
            emailVerification()
              .then(toast.success("Check your email to verify your account!"))
              .catch((err) => toast.error(err.message));
          })
          .catch((err) => toast.error(err.message));
        if (!res.user.emailVerified) {
          logOut().then().catch();
          navigateTo("/login");
        } else {
          navigateTo("/");
        }
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div data-aos="flip-right" className="hero min-h-[80vh]">
      <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
        <h1 className="text-custom-blue text-2xl text-center pt-6 font-semibold border-b pb-6 mx-8">
          Register your account
        </h1>
        <form onSubmit={handleRegister} className="card-body py-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo URL"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
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
                href="#"
                className="label-text-alt link link-hover font-semibold"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-3">
            <button className="btn bg-purple-500 hover:bg-purple-500 text-white font-semibold">
              Register
            </button>
          </div>
        </form>
        <div className="text-center mb-7 text-sm font-semibold">
          <p>
            Already Have An Account ?{" "}
            <Link
              to={"/login"}
              state={location.pathname}
              className="text-purple-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
