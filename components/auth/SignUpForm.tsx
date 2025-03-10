"use client";
import { FaGoogle } from "react-icons/fa";
import Button from "../Button";
import Link from "next/link";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);

  // Fungsi untuk menampilkan/menyembunyikan password
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen font-poppins">
      {/* Kiri: Welcome Message */}
      <div className="hidden lg:flex w-1/2 flex-col justify-end p-12 bg-[#0a0b2e] text-white">
        <div className="max-w-xl w-full">
          <h1 className="text-6xl font-light italic leading-tight mb-4">
            Welcome.
            <br />
            <span className="opacity-80">
              Start your journey now with our management system!
            </span>
          </h1>
        </div>
      </div>

      {/* Kanan: Form Sign Up */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-6 bg-[#0a0b2e] lg:bg-transparent">
        <div className="max-w-md w-full bg-white lg:bg-transparent p-6 lg:p-0 rounded-2xl shadow-lg lg:shadow-none">
          <h2 className="text-3xl font-semibold text-[#101828] lg:text-left text-center">
            Create an account
          </h2>

          <form className="mt-6">
            {/* Email Input */}
            <div>
              <label className="block text-[#344054] space-y-3">Email</label>
              <input
                type="email"
                placeholder="balamia@gmail.com"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-[#D1E9FF] focus:ring-0 "
              />
            </div>

            {/* Password Input */}
            <div className="mt-6 relative">
              <div className="flex justify-between items-center">
                <label className="block text-[#344054] space-y-3">
                  Password
                </label>
                <p className="text-[#1570EF] cursor-pointer">Forgot?</p>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-0 focus:outline-[#D1E9FF]"
                />
                {/* Ikon Mata (Show/Hide Password) */}
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

            {/* Button Sign Up */}
            <Link href="/login">
              <Button
                type="submit"
                variant="custom"
                className="mt-8 w-full bg-[#1570EF] text-white hover:bg-[#1570EF]/80 transition duration-300 py-4"
              >
                Create account
              </Button>
            </Link>

            {/* Sign Up with Google */}
            <Button
              variant="custom"
              className="mt-6 w-full flex items-center justify-center bg-[#D1E9FF] text-[#1570EF] py-4 hover:bg-[#D1E9FF]/80 transition"
            >
              <FaGoogle className="mr-2" /> Continue with Google
            </Button>
          </form>

          {/* Already have an account */}
          <p className="mt-4 text-center text-[#98A2B3]">
            Already Have An Account?{" "}
            <Link href="/login" className="text-[#1570EF] hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
