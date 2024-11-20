import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { forgetPassword } from "./Redux/slices/authSlice";
import { Link } from "react-router-dom";

import LogoBanner from "./LogoBanner";

const ForgetPassword = (props) => {
  const [resetMethod, setResetMethod] = useState("email");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [maskedInfo, setMaskedInfo] = useState(""); // State to store masked contact info
  const dispatch = useDispatch();

  const handlePasswordReset = (e) => {
    e.preventDefault();

    if (resetMethod === "email" && email) {
      const maskedEmail = maskEmail(email);
      setMaskedInfo(
        `You will be provided with a link to your registered email address ${maskedEmail} to reset your password.`
      );
      dispatch(forgetPassword({ email }));
    } else if (resetMethod === "sms" && phone) {
      const maskedPhone = maskPhone(phone);
      setMaskedInfo(
        `You will be provided with a link to your registered phone number ${maskedPhone} to reset your password.`
      );
      dispatch(forgetPassword({ phone }));
    }
  };

  useEffect(() => {
    document.title = props.title || "";
  }, [props.title]);

  const maskEmail = (email) => {
    const [name, domain] = email.split("@");
    return `${name[0]}****@${domain}`;
  };

  const maskPhone = (phone) => {
    return `+91 ${phone.slice(0, 2)}****${phone.slice(-2)}`;
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Side - Banner */}
      <div className="flex  w-full md:w-1/2 bg-[#5A5A5A] text-white p-10">
        <LogoBanner />
      </div>
      {/* Right Side - Forget Password Form */}
      <div className="flex flex-col  ml-28  mt-10 bg-white w-full md:w-2/3 p-8">
        <div>
          {/* Title and Subtitle */}
          <h2 className="text-xl text-[28px] font-[250] mb-1">
            Forget Password
          </h2>
          <p className="text-gray-600 text-[13.5px] mb-8">
            Pick up the method to reset your password
          </p>

          {/* Reset Options */}
          <div className="w-[410px] mb-8 space-y-6 ">
            {/* Email Reset Option */}
            <div className="p-4 border border-gray-400 mb-2 shadow-lg rounded-lg">
              <h3 className="font-xl font-[300] text-[16px] mt-8">
                Reset via Email
              </h3>
              <p className="text-gray-600  text-[14px]">
                You will be provided with a link to your registered email
                address Am****@gmail.com to reset your password.
              </p>
            </div>

            {/* SMS Reset Option */}
            <div className=" p-4 border border-gray-400 rounded-lg shadow-xl">
              <h3 className="font-xl font-[300] text-[16px] mt-8">
                Reset via SMS
              </h3>
              <p className="text-gray-600 text-[14px]">
                You will be provided with a link to your registered phone number
                A+91 9985***** to reset your password.
              </p>
            </div>
          </div>

          {/* Continue Button */}
          <button className="w-[410px]  bg-gray-500 text-white text-sm  py-2 rounded shadow hover:bg-gray-600">
            Continue
          </button>

          {/* Success Message */}
        </div>
        <div className="w-[470px] flex items-center justify-center h-[49px] mt-8 p-1 text-[13px] bg-gray-100 text-gray-600 rounded shadow">
          Successfully sent a password reset link to your registered email
          address.
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
