import Logo from "../assets/logo.png";

function LogoBanner() {
  return (
    <div className="flex flex-row justify-center items-center">
      <div className="">
        <img
          src={Logo}
          alt="Resilience360 Logo"
          className="w-[280px] object-contain  "
        />
        <h1 className=" absolute text-[34px] font- font-[300] mb-4 flex left-24 top-[410px] ">
          Welcome to Resilience360
        </h1>
        <p className=" text-[13px] text-center  mt-16 ml-16">
          Climate risk measurement and management solution
        </p>
      </div>
    </div>
  );
}

export default LogoBanner;
