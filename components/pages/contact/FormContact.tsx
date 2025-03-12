"use client";
import React, { useState } from "react";
import ModalAnnouncement from "@/components/ModalAnnouncement";
import Button from "@/components/Button";

const FormContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(formData).some((value) => value.trim() === "")) {
      alert("Semua kolom harus diisi!");
      return;
    }

    setIsModalOpen(true);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      <section className="flex items-center justify-center px-4 py-12 md:py-24">
        <div className="w-full max-w-4xl p-6 md:p-8">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
            onSubmit={handleSubmit}
          >
            {/* First Name */}
            <div className="w-full min-w-0">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full border-b border-black bg-transparent px-3 py-2 focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            {/* Last Name */}
            <div className="w-full min-w-0">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full border-b border-black bg-transparent px-3 py-2 focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            {/* Email */}
            <div className="w-full min-w-0">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="johndoe@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border-b border-black bg-transparent px-3 py-2 focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            {/* Subject */}
            <div className="w-full min-w-0">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full border-b border-black bg-transparent px-3 py-2 focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2 w-full">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Type Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full min-h-[150px] border border-black bg-transparent px-3 py-2 rounded-md focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            <div className="md:col-span-2 flex justify-center mt-4">
              <Button
                variant="primary"
                className="px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
                type="submit"
              >
                Kirim
              </Button>
            </div>
          </form>
        </div>
      </section>

      <ModalAnnouncement
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Message Sent!"
        message="Thank You! We will contact you soon."
        duration={3000}
      />
    </>
  );
};

export default FormContact;
