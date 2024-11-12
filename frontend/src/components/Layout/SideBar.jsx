import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const Sidebar = ({ logo, items }) => {
  const [openSubmenu, setOpenSubmenu] = useState(null);

  const handleSubmenuToggle = (index) => {
    setOpenSubmenu(openSubmenu === index ? null : index);
  };

  return (
    <div className="w-64 bg-white h-screen flex flex-col  shadow-lg">
      <div className="flex items-center justify-center mb-6 p-3">
        <img src={logo} alt="Company Logo" className="h-10 mr-2" />
      </div>
      <div className="overflow-hidden hover:overflow-y-auto scrollbar-hide">
        <ul className="text-[20px] p-5 flex flex-col gap-8">
          {items.map((item, index) => (
            <li key={index} className="mb-4">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center text-gray-700 transition-colors rounded-md duration-300 ${
                    isActive
                      ? "text-[#345261] font-medium"
                      : "hover:bg-[#f0f0f0] hover:text-[#345261]"
                  }`
                }
              >
                {item.icon && <item.icon className="mr-2" />}
                <span>{item.label}</span>{" "}
                {item.submenu && (
                  <MdOutlineKeyboardArrowDown
                    onClick={() => handleSubmenuToggle(index)}
                    className={`ml-auto transform transition-transform duration-300 ${
                      openSubmenu === index ? "rotate-180" : ""
                    }`}
                  />
                )}
              </NavLink>

              {/* Check if the item has a submenu */}
              {item.submenu && openSubmenu === index && (
                <div className="ml-2 mt-2 flex flex-col space-y-3 text-[15px] relative">
                  <div className="absolute top-8 left-[13px] w-[2px] h-64 bg-gray-300"></div>

                  {item.submenu.map((subItem, subIndex) => (
                    <div
                      key={subIndex}
                      className="relative flex items-center group cursor-pointer  "
                    >
                      <div className="absolute w-2 h-2 bg-[#345261] rounded-full left-[10px] group-hover:bg-[#345261]"></div>
                      <NavLink
                        to={subItem.path}
                        className={({ isActive }) =>
                          `flex items-center py-2 pl-8 text-gray-700 transition-colors rounded-md duration-300 ${
                            isActive
                              ? "text-[#345261] font-medium"
                              : "hover:bg-[#f0f0f0] hover:text-[#345261]"
                          }`
                        }
                      >
                        <span>{subItem.label}</span>
                      </NavLink>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
