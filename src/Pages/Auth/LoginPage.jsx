import React from "react";

import { FcGoogle } from "react-icons/fc";

const LoginPage = ({login, setLogin}) => {
  return (
    <>
      <div className="flex flex-row justify-end items-center">
        <button className="py-2.5 px-5 me-2 mb-2 font-medium text-black focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 "
        onClick={()=>setLogin(!login)}>
          Sign Up
        </button>
      </div>
      <div className="space-y-3">
        <p>
          New user?{" "}
          <a href="/" className="text-Blue">
            Create your account here
          </a>
        </p>
        <h1 className="text-4xl font-bold font-poppins text-black">
          Welcome Back!
        </h1>
      </div>
      <div className="space-y-4 md:space-y-6">
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
              placeholder="name@company.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 font-medium text-gray-900 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="••••••••"
              className="  text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 "
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-primary-300 "
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="remember" className="text-gray-900">
                  Remember me
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center rounded">
            <button
              type="submit"
              className=" text-white bg-opacity-90 bg-Blue hover:bg-opacity-100 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex flex-row justify-around items-center bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200">
          <button className="flex flex-row justify-around items-center space-x-3 p-2">
            <FcGoogle className="h-8 w-8 rounded-full" />
            <p className="text-xl">Login with Google</p>
          </button>
        </div>
        <div className="flex items-center justify-center rounded">
          <a
            href="/"
            className="text-sm font-medium text-primary-600 hover:underline text-Blue"
          >
            Forgot password?
          </a>
        </div>
      </div>
      <div className="text-center mt-5">
        <p>
          <span className="text-Blue">privacy policy</span> and{" "}
          <span className="text-Blue">Terms and Conditions</span>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
