import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ logo, items }) => {
  return (
    <div className="w-64 bg-white h-screen p-4 shadow-lg">
      <div className="flex items-center justify-center mb-6">
        <img src={logo} alt="Company Logo" className="h-10 mr-2" />
      </div>
      <ul className="  text-[20px] p-5  b flex flex-col gap-8">
        {items.map((item, index) => (
          <li key={index} className="mb-4">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center text-gray-700 transition-colors rounded-md duration-300 ${
                  isActive ? "text-[#345261] font-medium" : "hover:bg-[#f0f0f0] hover:text-[#345261]"
                }`
              }
            >
              {item.icon && <item.icon className="mr-2" />}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
