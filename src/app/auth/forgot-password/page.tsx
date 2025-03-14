"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    try {
      // Handle password reset request here
      // await sendPasswordResetEmail(email);
      setIsSubmitted(true);
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Check your email</h2>
          <p className="mt-2 text-sm text-gray-600">
            We've sent password reset instructions to {email}
          </p>
          <div className="mt-6">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              Return to sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={64}
            height={64}
            className="mx-auto"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Reset your password
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>

        {/* Reset Password Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 appearance-none block w-full px-3 py-2 border ${
                error ? "border-red-300" : "border-gray-300"
              } rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary-500 focus:border-primary-500`}
              placeholder="Enter your email"
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Send reset instructions
            </button>
          </div>

          <div className="text-center">
            <Link
              href="/auth/login"
              className="text-sm font-medium text-primary-600 hover:text-primary-500"
            >
              Return to sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 