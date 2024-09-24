import { useRef, useState } from "react";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";
import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";

const LoginModal = ({ isOpen, onClose }) => {
  const [viewPassword, setViewPassword] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const getEmail = useRef(null);
  const { createUser, loginUser, updateUser, emailVerification } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    loginUser(email, password)
      .then(() => {
        toast.success("User login successful");
        onClose(); 
      })
      .catch((err) => {
        const message =
          err.code === "auth/user-not-found"
            ? "User not found. Please register."
            : "Incorrect password. Please try again.";
        toast.error(message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return;
    } else if (!/^(?=.*[A-Z]).+$/.test(password)) {
      toast.error("Add at least one uppercase letter.");
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("User registered successfully");
        updateUser(name)
          .then(() => {
            emailVerification().then(() =>
              toast.success("Check your email to verify your account!")
            );
            onClose();
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    isOpen && (
      <div className="modal modal-open">
        <div className="modal-box w-96 p-6">
          <h1 className="text-custom-blue text-xl text-center font-semibold border-b pb-4">
            {isRegister ? "Register your account" : "Login to your account"}
          </h1>
          <button
            className={`btn btn-sm ${!isRegister ? "btn-active" : ""}`}
            onClick={() => setIsRegister(false)}
          >
            Login
          </button>
          <button
            className={`btn btn-sm ${isRegister ? "btn-active" : ""}`}
            onClick={() => setIsRegister(true)}
          >
            Register
          </button>
          <form
            onSubmit={isRegister ? handleRegister : handleLogin}
            className="py-4"
          >
            {isRegister && (
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  required={isRegister}
                />
              </div>
            )}
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
                type={viewPassword ? "password" : "text"}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-[50px] right-3 cursor-pointer"
                onClick={() => setViewPassword(!viewPassword)}
                aria-label={viewPassword ? "Show password" : "Hide password"}
              >
                {viewPassword ? <FaRegEyeSlash /> : <FaRegEye />}
              </span>
            </div>
            <div className="form-control mt-3">
              <button
                type="submit"
                className="btn bg-purple-500 hover:bg-purple-500 text-white font-semibold"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </div>
          </form>
          <div className="modal-action mt-2">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginModal;
