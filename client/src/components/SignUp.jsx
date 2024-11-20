import { useDispatch } from "react-redux";
import { signUp } from "./Redux/slices/authSlice";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LogoBanner from "./LogoBanner";

const SignUp = (props) => {
  const [isEnterprise, setIsEnterprise] = useState(true);
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSignUp = async (e) => {
    e.preventDefault();
    
    // ... (keep your existing validations)

    const userData = {
      organizationName,
      email,
      password,
      isEnterprise
    };

    try {
      // Make API call to backend
      const response = await fetch('http://localhost:4000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (data.success) {
        // Dispatch to Redux store
        dispatch(signUp({
          ...userData,
          id: data.user.id,
          token: data.token
        }));
        
        toast.success("Account created successfully!");
        
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Signup error:", error);
    }
};
 



  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side - Banner */}
      <div className="flex w-full  md:w-1/2 bg-[#5A5A5A] text-white p-10 ">
        <LogoBanner />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col items-center justify-center w-full md:w-2/3 p-8">
        {/* Toggle Buttons */}
        <div className="flex mb-8">
          <button
            onClick={() => setIsEnterprise(true)}
            className={`px-[75px] py-2 border ${isEnterprise
                ? "bg-gray-500 text-white"
                : "bg-transparent border-gray-500 text-gray-500"
              } rounded-l-md`}
          >
            Enterprise
          </button>
          <button
            onClick={() => setIsEnterprise(false)}
            className={`px-[75px] py-2 border ${!isEnterprise
                ? "bg-gray-500 text-white"
                : "bg-transparent border-gray-500 text-gray-500"
              } rounded-r-md`}
          >
            Individual
          </button>
        </div>

        <h5 className="mt-6 text-gray-600 mb-8 font-[300]  ml-[-230px]">
          Create account to start using.
        </h5>

        {/* Form Fields */}
        <form className="w-full max-w-md" onSubmit={handleSignUp}>
          {isEnterprise && (
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm mb-2"
                htmlFor="organizationName"
              >
                Organization name*
              </label>
              <input
                type="text"
                id="organizationName"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                placeholder="Enter Your Organization name"
                className="w-full px-4 py-2 border rounded  shadow-lg focus:outline-none focus:ring focus:ring-gray-300"
              />
            </div>
          )}

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="email"
            >
              Email ID*
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Company email ID"
              className="w-full px-4 py-2 border shadow-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded shadow-lg focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="rePassword"
            >
              Re-enter password
            </label>
            <input
              type="password"
              id="rePassword"
              value={rePassword}
              onChange={(e) => setRePassword(e.target.value)}
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 border rounded shadow-lg focus:outline-none focus:ring focus:ring-gray-300"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-gray-500 text-white py-2  mt-4 rounded shadow hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300"
          >
            Sign up
          </button>
        </form>

        {/* Login Link */}
        <p className="text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 cursor-pointer">
            Log in
          </Link>
        </p>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default SignUp;
