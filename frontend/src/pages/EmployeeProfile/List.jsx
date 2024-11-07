import React from "react";
import { FaEye } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
const employees = [
  {
    id: 1,
    code: "2023JS001",
    name: "Prawen",
    designation: "UI/UX Designer",
    status: "Partially Filled",
  },
  {
    id: 2,
    code: "2023JS002",
    name: "Gokul",
    designation: "Python Developer",
    status: "Active",
  },
  {
    id: 3,
    code: "2023JS003",
    name: "Ajith",
    designation: "React JS",
    status: "Active",
  },
  {
    id: 4,
    code: "2023JS004",
    name: "Ajin",
    designation: "PHP",
    status: "Active",
  },
  {
    id: 5,
    code: "2023JS005",
    name: "Sherin",
    designation: "Digital Marketing",
    status: "Active",
  },
  {
    id: 6,
    code: "2023JS006",
    name: "Abish",
    designation: "Tele Caller",
    status: "Active",
  },
  {
    id: 7,
    code: "2023JS007",
    name: "Akash",
    designation: "Full Stack Developer",
    status: "Active",
  },
  {
    id: 8,
    code: "2023JS008",
    name: "Naveen",
    designation: "Frontend Developer",
    status: "Inactive",
  },
  {
    id: 3,
    code: "2023JS003",
    name: "Ajith",
    designation: "React JS",
    status: "Active",
  },
  {
    id: 4,
    code: "2023JS004",
    name: "Ajin",
    designation: "PHP",
    status: "Active",
  },
  {
    id: 5,
    code: "2023JS005",
    name: "Sherin",
    designation: "Digital Marketing",
    status: "Active",
  },
  {
    id: 6,
    code: "2023JS006",
    name: "Abish",
    designation: "Tele Caller",
    status: "Active",
  },
  {
    id: 7,
    code: "2023JS007",
    name: "Akash",
    designation: "Full Stack Developer",
    status: "Active",
  },
  {
    id: 8,
    code: "2023JS008",
    name: "Naveen",
    designation: "Frontend Developer",
    status: "Inactive",
  },
];

export default function List() {
  return (
    <div className="container bg-white mx-auto p-4">
      <div className="grid grid-cols-2 mb-4">
        <div className="flex items-center  gap-16">
          <h1 className="text-xl font-bold">Employee List</h1>
          <div>
            <select className="border p-1 rounded-md focus:ring-0 outline-none">
              <option>Status : All</option>
              <option>Status : Active</option>
              <option>Status : Inactive</option>
              <option>Status : Partially Filled</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-5">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-54 py-1 ps-8 text-sm  text-black rounded bg-white  outline-none  border border-gray-500    "
              placeholder="Search..."
              // value={searchQuery}
              // onChange={handleSearch}
            />
          </div>

          <div>
            <Link to="add">
              <button className="bg-primary text-white px-5 py-1 rounded-md flex justify-center items-center gap-2">
               <span className="text-xl">+</span>  New Employee
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse block md:table">
          <thead className="block md:table-header-group">
            <tr className="    block md:table-row">
              <th className="p-2 text-left block md:table-cell">Sl. no.</th>
              <th className="p-2 text-left block md:table-cell">
                Employee Code
              </th>
              <th className="p-2 text-left block md:table-cell">Name</th>
              <th className="p-2 text-left block md:table-cell">Designation</th>
              <th className="p-2 text-left block md:table-cell">Status</th>
              <th className="p-2 text-left block md:table-cell">Action</th>
            </tr>
          </thead>
          <tbody className="block md:table-row-group">
            {employees.map((employee, index) => (
              <tr key={employee.id} className="border-t block md:table-row">
                <td className="p-2 py-4  block md:table-cell">{index + 1}</td>
                <td className="p-2 block md:table-cell">{employee.code}</td>
                <td className="p-2 block md:table-cell">{employee.name}</td>
                <td className="p-2 block md:table-cell">
                  {employee.designation}
                </td>
                <td
                  className={`p-2 block md:table-cell ${
                    employee.status === "Active"
                      ? "text-green-600"
                      : employee.status === "Inactive"
                      ? "text-red-600"
                      : "text-yellow-500"
                  }`}
                >
                  {employee.status}
                </td>
                <td className="p-2 block md:table-cell">
                  <button className="text-primary hover:text-blue-700">
                    <FaEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
