import React from "react";
import { useFormik } from "formik";
import titleImage from "../assets/images/login.jpg";
import { Link } from "react-router-dom";


const Signin = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: "",
      password : ''
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className=" sm:flex sm:mx-[20%] justify-center sm:mt-10">
    <div className="w-[40%] hidden sm:block">
      <img src={titleImage } className="object-contain h-[100%] " alt=""></img>
    </div>

      <div className=" mt-6 px-8 font-poppins sm:bg-gray-100 sm:mt-0 pr-10 sm:pt-16">
        <h2 className="font-montserrat text-lg text-left font-semibold">
          Welcome to{" "}
          <span className="font-fasthand font-thin">Beds & Bunks</span>,<br />{" "}
          Sign In to Continue
        </h2>
        <p className="text-[10px] mt-3 ">
          Don't have an account?{" "}
          <Link className="font-bold" to='/signup'><u>Create a account</u></Link>
          <br /> It takes less than a minute
        </p>
        <div className=" flex justify-center items-center mt-2">
          <form
            className="  w-[100%] m-auto font-montserrat mt-8"
            onSubmit={formik.handleSubmit}
          >
            <label className="text-sm ">Email</label>
            <input
              type="email"
              id="email"
              className="block  px-2 text-sm border-[1px] border-gray-300 rounded-sm font-thin p-1 outline-none w-[100%] mt-1 mb-2"
              onChange={formik.handleChange}
              value={formik.values.email} 
            />
            <label className="text-sm">Password</label>
            <input
              type="password"
              id="password"
              className="block px-2 text-sm border-[1px] border-gray-300 rounded-sm font-thin p-1 outline-none w-[100%] mt-1"
              onChange={formik.handleChange}
              value={formik.values.password} 
           />
            <p className="text-[10px] text-center mt-4">
              <u>Forgot Password?</u>
            </p>
            <button className="text-white bg-black px-2 py-2 rounded-sm w-[100%] mt-4">
              Sign in
            </button>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
