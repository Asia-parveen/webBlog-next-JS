"use client";
import Link from "next/link"; 

import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const validateForm = () => {
    const newErrors: typeof errors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    let isValid = true;

    if (!form.name) {
      newErrors.name = "Name is required.";
      isValid = false;
    }
    if (!form.email) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
      isValid = false;
    }
    if (!form.subject) {
      newErrors.subject = "Please select a subject.";
      isValid = false;
    }
    if (!form.message) {
      newErrors.message = "Message cannot be empty.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form Submitted:", form); // For demonstration; replace with actual form submission logic
      setSubmitted(true);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 py-12">
         <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-center mb-6">📚 Contact Us <span className="text-[#F1C40F]">BookBlogers </span>Feel Free</h1>
      <p className="text-center text-[#F1C40F] mb-8">
      Get in touch with us to share your thoughts, ask questions, or explore collaborations.<br></br> We are here to connect and discuss the world of books and beyond!
      </p>
      </div>


      <div className="max-w-4xl mx-auto bg-white p-10 shadow-xl rounded-lg ">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Have questions about our blog or books? Feel free to reach out using the form below.
        </p>
        {submitted && (
          <p className="text-center text-green-600 font-semibold mb-6">
            Thank you for your message! We’ll get back to you soon.
          </p>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleInputChange}
              placeholder="Your full name"
              className={`mt-2 w-full px-4 py-3 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleInputChange}
              placeholder="Your email address"
              className={`mt-2 w-full px-4 py-3 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          {/* Subject */}
          <div>
            <label htmlFor="subject" className="block text-sm font-semibold text-gray-700">
              Subject
            </label>
            <select
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleInputChange}
              className={`mt-2 w-full px-4 py-3 border ${
                errors.subject ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500`}
            >
              <option value="" disabled>
                Select a subject
              </option>
              <option value="general">General Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="support">Support</option>
            </select>
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>
          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleInputChange}
              placeholder="Write your message here"
              rows={5}
              className={`mt-2 w-full px-4 py-3 border ${
                errors.message ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500`}
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>
          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Link
        href="/"
        className="text-[#1D3557] hover:underline font-medium text-lg px-20 py-20"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default Contact;
