import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "./Redux/slices/authSlice";

import { ToastContainer, toast } from "react-toastify";
import LogoBanner from "./LogoBanner";
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEnterprise, setIsEnterprise] = useState(true);

  const navigate = useNavigate();

  const getUserData = () => {
    const user = localStorage.getItem("user"); // Retrieve user data from local storage
    return user ? JSON.parse(user) : null; // Parse and return user object or null
  };


  const handleLogin = (e) => {
    e.preventDefault();
    const userData = getUserData(); // Get the stored user data

    // Validate credentials against existing user data
    if (userData) {
      if (userData.email === username && userData.password === password) {
        toast.success("Login successful!"); // Show success toast
        navigate("/dashboard"); // Redirect to home page on successful login
      } else {
        toast.error("Invalid username or password"); // Show error toast
      }
    } else {
      toast.error("User not found"); // Show error toast if user data is not present
    }
  };

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left side */}
      <div className="flex w-full md:w-1/2 bg-[#5A5A5A] text-white p-10">
        <LogoBanner />
      </div>
      {/* Right side form */}
      <div className="flex flex-col items-center justify-center bg-white  w-full md:w-2/3 p-8">
        <div className="w-full max-w-md  ">
          {/* Toggle button */}
          <div className="flex mb-14">
            <button
              onClick={() => setIsEnterprise(true)}
              className={`px-10 py-2 border ${isEnterprise
                ? "bg-gray-500 text-white"
                : "bg-transparent border-gray-500 text-gray-500"
                } rounded-l-md`}
            >
              I am an Enterprise
            </button>
            <button
              onClick={() => setIsEnterprise(false)}
              className={`px-10 py-2 border ${!isEnterprise
                ? "bg-gray-500 text-white"
                : "bg-transparent border-gray-500 text-gray-500"
                } rounded-r-md`}
            >
              I am an Individual
            </button>
          </div>

          <h2 className="text-2xl font-[300] mb-1 ">Log in to Resilience360</h2>
          <p className="text-gray-600 mb-12">
            Welcome back! Please enter your details
          </p>

          <form onSubmit={handleLogin} className="space-y-8">
            <div>
              <label className="block  text-gray-700 text-sm  mb-2">
                User Name
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded focus:outline-none shadow-lg  shadow-2 focus:ring focus:ring-gray-300"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm  mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded shadow-lg focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="keepMeLoggedIn" className="mr-2" />
                <label
                  htmlFor="keepMeLoggedIn"
                  className="text-gray-600 text-sm"
                >
                  Keep me logged in
                </label>
              </div>
              <Link
                to="/forgetpassword"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500  text-white py-2 font-[300] rounded shadow hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 "
            >
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />{" "}
    </div>
  );
};

export default Login;