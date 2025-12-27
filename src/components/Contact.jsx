import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Data:", data);
    reset(); // clears form after submit
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[400px] bg-white p-6 rounded-lg shadow-lg relative">
        {/* Close / Back Button */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-xl mb-4 text-center">Contact Us</h3>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="mt-3 space-y-1">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="mt-3 space-y-1">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="mt-3 space-y-1">
            <label>Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full px-3 py-2 border rounded-md outline-none resize-none"
              {...register("message", {
                required: "Message is required",
                minLength: {
                  value: 10,
                  message: "Message should be at least 10 characters",
                },
              })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-400"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
