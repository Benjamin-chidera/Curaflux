import React, { useState } from "react";
import healthcareImage from "../assets/images/fimg1.jpeg";
import logo from "../assets/images/logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    hospitalName: "",
    hospitalAddress: "",
    hospitalEmail: "",
    hospitalPhoneNumber: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleGoogle = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://curaflux-server.onrender.com/auth/google"
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleGoogle = () => {
    window.open(
      "http://curaflux-server.onrender.com/auth/google/callback",
      "_self"
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row max-w-4xl w-full shadow-lg bg-white overflow-hidden">
        <div className="md:w-1/2 w-full h-52 md:h-[600px]">
          <img
            src={healthcareImage}
            alt="Healthcare Facility"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:w-1/2 w-full p-6 sm:p-8 flex items-center justify-center">
          <div className="w-full">
            <div className="flex items-center justify-between">
              <img src={logo} alt="Logo" className="w-24 sm:w-32 py-3" />
            </div>
            <div className="text-container">
              <h2 className="text-2xl font-semibold text-gray-800 underline-text">
                Healthcare Facility Registration
              </h2>
              <svg
                className="underline-svg"
                width="280"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 15 Q 60 5, 270 15"
                  stroke="lightblue"
                  strokeWidth="5"
                  fill="transparent"
                />
              </svg>
            </div>

            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Hospital Name</label>
                <input
                  type="text"
                  name="hospitalName"
                  value={formData.hospitalName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Hospital Address</label>
                <input
                  type="text"
                  name="hospitalAddress"
                  value={formData.hospitalAddress}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Hospital Email</label>
                <input
                  type="email"
                  name="hospitalEmail"
                  value={formData.hospitalEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* <div className="mb-4">
                <label className="block text-gray-700">
                  Hospital Phone Number
                </label>
                <input
                  type="tel"
                  name="hospitalPhoneNumber"
                  value={formData.hospitalPhoneNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div> */}

              <div className="mb-4">
                <label className="block text-gray-700">Password*</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Next
              </button>
            </form>
            <button onClick={handleGoogle}>Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
