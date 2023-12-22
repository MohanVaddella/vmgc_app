import { Link } from "react-router-dom";
import React, { useState } from "react";
import EyeShow from "../images/pass-show.png";
import EyeHide from "../images/pass-hide.png";
import Header from './Header';
import Footer from './Footer';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
    return (
    <div>
        <Header />
        <section className="bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500" >
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                <div>
                    <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Username
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="John9704"
                        required
                    />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                    <label
                        htmlFor="password"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Password
                    </label>

                    <div className="text-sm">
                        <Link
                        to="/forgotpassword"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                        Forgot password?
                        </Link>
                    </div>
                    </div>
                    <div className="relative">
                    <input
                        id="password"
                        name="password"
                        placeholder="Your secret"
                        type={showPassword ? "text" : "password"}
                        autoComplete="current-password"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <img
                        src={showPassword ? EyeShow : EyeHide}
                        style={{ height: "2em", width: "2em" }}
                        onClick={togglePasswordVisibility}
                        className="pass-icon cursor-pointer absolute top-2 right-2"
                        alt="Toggle Password Visibility"
                    />
                    </div>
                </div>

                <div>
                    <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                    Login
                    </button>
                <p className="mt-10 text-center text-sm text-gray-500">
                    Not a member?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                        Register Here
                    </Link>
                </p>
                </div>
            </form>
            </div>
            </div>
        </div>
        </section>
        <Footer />
    </div>
    );
};
export default Login;
