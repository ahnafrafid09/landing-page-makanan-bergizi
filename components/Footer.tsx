"use client";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useState } from "react";
import ModalAnnouncement from "./ModalAnnouncement";

const navigation = [
  {
    name: "Home",
    url: "#",
  },
  {
    name: "About Us",
    url: "/about",
  },
  {
    name: "Media",
    url: "#",
  },
  {
    name: "Contact",
    url: "/contact",
  },
  {
    name: "Registration",
    url: "#",
  },
];

const more = ["More", "Projects", "Events", "Donate", "Blog"];

const social = [
  {
    name: "Connect",
    url: "#",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/",
  },
  {
    name: "Twitter",
    url: "https://x.com/",
  },
  {
    name: "Linkedin",
    url: "https://linkedin.com/",
  },
];

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }
    setShowPasswordInput(true);
  };

  const handleConfirmSubscription = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      alert("Please enter your email password for confirmation.");
      return;
    }
    setIsModalOpen(true);
    setEmail("");
    setPassword("");
    setShowPasswordInput(false);
  };
  return (
    <div className="bg-black py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between flex-col gap-10 lg:flex-row lg:gap-5">
          <Link href="#">
            <h1 className="font-bold text-white text-center lg:text-start text-2xl">
              Maksi<span className="font-logo font-normal">fy</span>
            </h1>
          </Link>
          <div className="flex items-center justify-between lg:gap-10">
            <div className="flex flex-col gap-8">
              {navigation.map((data, index) => {
                return (
                  <Link
                    key={index}
                    href={data.url}
                    className={`text-white ${
                      index === 0 ? "font-bold" : "font-normal text-sm"
                    }`}
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-8">
              {more.map((data, index) => {
                return (
                  <Link
                    key={index}
                    href="#"
                    className={`text-white ${
                      index === 0 ? "font-bold" : "font-normal text-sm"
                    }`}
                  >
                    {data}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col gap-8">
              {social.map((data, index) => {
                return (
                  <Link
                    key={index}
                    href={data.url}
                    target="_blank"
                    className={`text-white ${
                      index === 0 ? "font-bold" : "font-normal text-sm"
                    }`}
                  >
                    {data.name}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-bold text-white text-4xl w-3/4">
              Subscribe to get latest updates
            </h1>
            <form
              className="flex flex-col gap-4 w-full max-w-md"
              onSubmit={
                showPasswordInput ? handleConfirmSubscription : handleSubscribe
              }
            >
              <div className="flex items-center border border-gray rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-4 text-white placeholder:text-gray bg-transparent outline-none"
                  required
                />
                <Button
                  type="submit"
                  className="bg-white hover:bg-white/60 text-black px-4 py-4 cursor-pointer"
                >
                  Subscribe
                </Button>
              </div>
              {showPasswordInput && (
                <input
                  type="password"
                  placeholder="Enter your email password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-4 border border-gray rounded-md bg-transparent text-white"
                  required
                />
              )}
            </form>
          </div>
        </div>
      </div>
      <ModalAnnouncement
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Thank you for subscribing!"
        message="You have successfully subscribed to our updates."
        duration={3000}
      />
    </div>
  );
};

export default Footer;
