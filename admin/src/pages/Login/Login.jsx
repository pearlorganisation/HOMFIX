import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginAdmin } from "../../features/actions/Auth/authAction";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { isAdminLoggedIn } = useSelector((state) => state.auth);

  if (isAdminLoggedIn) {
    navigate(`/`);
  }

  const submitForm = (data) => {
    console.log(data);
    dispatch(loginAdmin(data));
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1599423300746-b62533397364?auto=format&fit=crop&w=1350&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <div className="relative z-10 w-full max-w-md p-8 bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-300 mb-4">
          Admin Login for Real Estate Dashboard
        </p>

        <form onSubmit={handleSubmit(submitForm)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 text-gray-900 placeholder-gray-500"
              placeholder="admin@realestate.com"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-200 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300 text-gray-900 placeholder-gray-500"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            to={`/forgot-password`}
            className="text-sm text-blue-300 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
