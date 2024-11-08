import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import FilterSelect from "../../components/Filter/Select";
import SearchInput from "../../components/Filter/Search";
import ActionButton from "../../components/Button/ActionButton";
import TableList from "../../components/Table/TableList";
import { EmployeeHeaders as headers } from "../../constatnts/TableHeadings";
import Heading from "../../components/Headings/Headings";

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
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };

  const getRowKey = (employee) => employee.id;

  const statusColors = {
    Active: "text-green-600",
    Inactive: "text-red-600",
    Pending: "text-yellow-500",
  };

  const renderRow = (employee, index, statusColors) => (
    <>
      <td className="p-2 py-4 block md:table-cell">{index + 1}</td>
      <td className="p-2 block md:table-cell">{employee.code}</td>
      <td className="p-2 block md:table-cell">{employee.name}</td>
      <td className="p-2 block md:table-cell">{employee.designation}</td>
      <td
        className={`p-2 block md:table-cell ${
          statusColors[employee.status] || ""
        }`}
      >
        {employee.status}
      </td>
      <td className="p-2 block md:table-cell">
        <button className="text-primary hover:text-blue-700">
          <FaEye />
        </button>
      </td>
    </>
  );

  return (
    <div className="container bg-white mx-auto p-4">
      <div className="grid grid-cols-2 mb-4">
        <div className="flex items-center  gap-16">
          <Heading text="Employee List" />
          <FilterSelect
            type="Status"
            options={["All", "Active", "Inactive", "Partially Filled"]}
            selectedValue={selectedStatus}
            onChange={handleStatusChange}
          />
        </div>

        <div className="flex items-center justify-end space-x-5">
          <SearchInput
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <ActionButton buttonText="New Employee" to="create" />
        </div>
      </div>
      <TableList
        headers={headers}
        data={employees}
        getRowKey={getRowKey}
        renderRow={renderRow}
        statusColors={statusColors}
      />
      ;
    </div>
  );
}
