"use client";
import React, { useState } from "react";
import ModalAnnouncement from "@/components/ModalAnnouncement";
import Button from "@/components/Button";

const FormRegistration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    institute: "",
    educationLevel: "",
    totalStudents: "",
    contact: "",
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
      institute: "",
      educationLevel: "",
      totalStudents: "",
      contact: "",
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
            <div className="w-full min-w-0">
              <label
                htmlFor="institute"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Nama Instansi
              </label>
              <input
                id="institute"
                type="text"
                placeholder="..."
                value={formData.institute}
                onChange={handleChange}
                required
                className="w-full border-b border-black bg-transparent px-3 py-2 focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            <div className="w-full min-w-0">
              <label
                htmlFor="educationLevel"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Jenjang Pendidikan
              </label>
              <input
                id="educationLevel"
                type="text"
                placeholder="SMP"
                value={formData.educationLevel}
                onChange={handleChange}
                required
                className="w-full border-b border-black bg-transparent px-3 py-2 focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            <div className="w-full min-w-0">
              <label
                htmlFor="totalStudents"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Jumlah Siswa
              </label>
              <input
                id="totalStudents"
                type="totalStudents"
                value={formData.totalStudents}
                onChange={handleChange}
                required
                className="w-full border-b border-black bg-transparent px-3 py-2 focus:outline-none focus:border-primary dark:border-gray placeholder:text-gray"
              />
            </div>

            <div className="w-full min-w-0">
              <label
                htmlFor="contact"
                className="block text-sm font-medium mb-1 sm:mb-2 dark:text-white"
              >
                Kontak
              </label>
              <input
                id="contact"
                type="text"
                value={formData.contact}
                onChange={handleChange}
                placeholder="johndoe@gmail.com"
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
                Kirim Permohonan
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

export default FormRegistration;
