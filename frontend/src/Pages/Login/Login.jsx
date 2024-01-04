import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Images/ITEXPERTS_LOGO.png";

const Login = () => {
  return (
    <>
      <main className=" w-full h-screen flex flex-col items-center justify-center px-4">
        <div className="max-w-sm w-full text-gray-600 space-y-5">
          <div className="text-center pb-8">
            <img src={Logo} width={150} className="mx-auto" />
            <div className="mt-5">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Login{" "}
              </h3>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Password</label>
              <input
                type="password"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-[#D22B2B] shadow-sm rounded-lg"
              />
            </div>
            <div className="flex items-center justify-between text-sm">
              {/* <div className="flex items-center gap-x-3">
                <input
                  type="checkbox"
                  id="remember-me-checkbox"
                  className="checkbox-item peer hidden"
                />
                <label
                  htmlFor="remember-me-checkbox"
                  className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                ></label>
                <span>Remember me</span>
              </div> */}
              <Link
                to="/forgetpass"
                className="text-center text-[#D22B2B] hover:text-[#D22B2B]"
              >
                Forgot password?
              </Link>
            </div>
            <Link to="/adminpanel/dashboard">
              <button className="w-full px-4 py-2 mt-2 text-white font-medium bg-[#D22B2B] hover:bg-[#D22B2B] active:bg-[#D22B2B] rounded-lg duration-150">
                Sign in
              </button>
            </Link>
          </form>
          <p className="text-center">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-[#D22B2B] hover:text-[#D22B2B]"
            >
              Sign up
            </Link>
          </p>
        </div>
      </main>
    </>
  );
};

export default Login;
