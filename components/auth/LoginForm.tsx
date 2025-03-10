"use client";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Button from "../Button";
import Link from "next/link";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0a0b2e] font-poppins px-4 sm:px-6">
      <div className="bg-white w-full max-w-md md:max-w-xl p-6 md:p-12 rounded-2xl shadow-lg">
        <h1 className="text-center font-semibold text-2xl md:text-3xl text-[#101828]">
          Login to Your Account
        </h1>

        <form className="mt-6">
          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-[#344054] mb-2">Email</label>
            <input
              type="email"
              placeholder="balamia@gmail.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-[#D1E9FF] focus:ring-0"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <div className="flex justify-between items-center mb-2">
              <label className="text-[#344054]">Password</label>
              <p className="text-[#1570EF] cursor-pointer text-sm">Forgot?</p>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-0 focus:outline-[#D1E9FF]"
              />
              {/* Icon Mata (Show/Hide Password) */}
              <span
                className="absolute top-4 right-4 cursor-pointer text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={22} />
                ) : (
                  <AiFillEye size={22} />
                )}
              </span>
            </div>
          </div>

          {/* Button Login */}
          <Link href="/">
            <Button
              type="submit"
              variant="custom"
              className="w-full bg-[#1570EF] text-white hover:bg-[#1570EF]/80 transition duration-300 py-4 rounded-md"
            >
              Login
            </Button>
          </Link>
        </form>

        {/* Sign Up Link */}
        <p className="text-center text-[#98A2B3] mt-6">
          Dont have an account?{" "}
          <Link href="/signup" className="text-[#1570EF] hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
