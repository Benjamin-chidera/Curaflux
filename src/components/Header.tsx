import { useState } from "react";
import dp from "../assets/images/dp.jpg";
import { FaBell } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { Sidebar } from "primereact/sidebar";
import { Badge } from "primereact/badge";
import { Steps } from "primereact/steps";

export default function Header() {
  const [visibleRight, setVisibleRight] = useState(false);
  const items = [
    {
      label: "Profile",
    },
    {
      label: "Get Verified",
    },
    {
      label: "Pricing",
    },
  ];

  return (
    <header className="flex items-center ml-64 justify-between bg-white shadow p-4">
      <h1 className="text-xl font-bold text-gray-800">Welcome!</h1>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Post Shift
      </button>
      <div className="flex items-center space-x-8">
        <span className="bg-blue-50 h-10 w-10 rounded-full flex justify-center items-center relative">
          <FaBell className=" text-xl" />
          <Badge
            value="2"
            className="absolute top-0 right-0 translate-x-1/2 -top-2 "
          ></Badge>
        </span>

        <div className="card">
          <span className="bg-blue-50 h-10 w-10 rounded-full flex justify-center items-center">
            <IoSettings
              className=" text-xl cursor-pointer"
              onClick={() => setVisibleRight(true)}
            />
          </span>
          <Sidebar
            visible={visibleRight}
            position="right"
            onHide={() => setVisibleRight(false)}
          >
            <h2 className="text-black font-bold">Complete Hopital Profile</h2>
            <div className="card py-4  ">
              <Steps model={items} />
            </div>
          </Sidebar>
        </div>

        <img
          src={dp}
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
}
