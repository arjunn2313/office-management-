import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Heading from "../../components/Headings/Headings";
import { useState } from "react";
import EmployeeCard from "../../components/Employee/EmployeeCard";
import Personalnformation from "../../components/Employee/Personalnformation";

export default function EmployeeDetails() {
  const [activeTab, setActiveTab] = useState("Personal Information");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Personal Information":
        return <Personalnformation />;
      case "Attendance Summary":
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold">Attendance Summary</h2>
            {/* Placeholder for attendance content */}
            <p>Attendance details will go here.</p>
          </div>
        );
      case "Project Details":
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold">Project Details</h2>
            {/* Placeholder for project details content */}
            <p>Project details will go here.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <MdOutlineKeyboardBackspace size={25} />
      <div className="bg-white p-4 mt-3  ">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
          <Heading text="Employee Details" />
          <p className="text-green-500 mt-2 sm:mt-0">Active</p>
        </div>

        {/* CARD */}
        <EmployeeCard />
      </div>

      {/* TAB  */}
      <div className=" mt-3 bg-white   ">
        <div className="flex border-b">
          {[
            "Personal Information",
            "Attendance Summary",
            "Project Details",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 p-4 text-center transition-colors duration-300 ${
                activeTab === tab
                  ? "text-active border-b-2 border-active font-semibold"
                  : "text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {renderTabContent()}
      </div>
    </div>
  );
}
