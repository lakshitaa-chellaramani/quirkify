import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginSignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        navigate("/");
      }
      // console.log(data);
      // localStorage.setItem('token', response.data.token);
      // localStorage.setItem('userId', response.data.userId);
      // window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="loginContainer flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* Your JSX content */}
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required
              />
              {emailError && <p className="text-red-500">{emailError}</p>}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              {passwordError && <p className="text-red-500">{passwordError}</p>}
            </div>
            {/* Your JSX content */}
            <button
              type="submit"
              className="w-full text-white bg-lavender hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginSignUp;
