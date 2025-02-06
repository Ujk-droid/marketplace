"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.target as HTMLFormElement);
    form.append("access_key", "9bda5b9c-29c1-402e-b099-2de22660da48");

    const object = Object.fromEntries(form);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Thanks!",
        text: "Form submitted successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div className="min-h-[540px] flex justify-center items-center">
      <div className="w-full max-w-lg lg:max-w-3xl relative mx-4">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-gray-100   px-8 py-12 overflow-hidden rounded-2xl">
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <h1 className="text-2xl font-medium text-center text-[#2d5474] mb-5">Contact Us</h1>
            <div className="flex flex-wrap -mx-2">
              <div className="p-2 w-full sm:w-1/2">
                <label htmlFor="name" className="leading-7 text-sm text-[#2d5474]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base py-2 px-3"
                  required
                />
              </div>
              <div className="p-2 w-full sm:w-1/2">
                <label htmlFor="email" className="leading-7 text-sm text-[#2d5474]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base py-2 px-3"
                  required
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <label htmlFor="message" className="leading-7 text-sm text-[#2d5474]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base py-2 px-3 h-32"
                required
              />
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex mx-auto text-black bg-gray-200 py-2 px-8 rounded hover:bg-gray-400"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
