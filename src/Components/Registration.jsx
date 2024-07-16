import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const Registration = () => {
  const [showPass, setShowPass] = useState(true);
  const axiosPublic = useAxiosPublic();

  const handleClick = () => {
    setShowPass(!showPass);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };

    const register = await axiosPublic.post("/user", userInfo);
    console.log(register.data);

    if (register.data.insertedId) {
      console.log("ok");
    }
    console.log(register.data);
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="p-6 rounded-xl shadow-2xl">
        <h3 className="text-3xl mb-6 font-bold text-gray-700">Registration</h3>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Name</span>
            </div>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered w-full"
              name="name"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Phone</span>
            </div>
            <input
              type="number"
              placeholder="Name"
              className="input input-bordered w-full"
              name="phone"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Email</span>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              name="email"
            />
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Select Option</span>
            </div>
            <select
              name="role"
              defaultValue={"default"}
              className="select select-bordered"
            >
              <option value={"default"} disabled>
                Register as a
              </option>
              <option value={"user"}>User</option>
              <option value={"agent"}>Agent</option>
            </select>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg">Password</span>
            </div>
            <div className="relative">
              <input
                type={showPass ? "password" : "text"}
                placeholder="********"
                className="input input-bordered w-full"
                name="password"
              />
              <span
                onClick={handleClick}
                className="absolute cursor-pointer right-4 top-3"
              >
                {showPass ? (
                  <FaEyeSlash className="text-3xl" />
                ) : (
                  <FaEye className="text-3xl" />
                )}
              </span>
            </div>
          </label>

          <button className="btn w-full bg-[#1E90FF] text-lg text-white mt-4">
            Register
          </button>
        </form>
        <p className="my-2">
          If you have an account, please go to{" "}
          <Link to={"/login"} className="text-blue-600">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
