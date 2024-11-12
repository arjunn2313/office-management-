import {
  FaHome,
  FaUserTie,
  FaAddressCard,
  FaClipboardList,
  FaTasks,
} from "react-icons/fa";

const Management = [
  { label: "Dashboard", icon: FaHome, path: "/" },
  { label: "Hiring", icon: FaUserTie, path: "/hiring" },
  { label: "Employee Profile", icon: FaAddressCard, path: "/employee-profile" },
  {
    label: "Attendance",
    icon: FaClipboardList,
    path: "/attendance",
    submenu: [
      { label: "Daily Attendance", path: "/attendance/daily" },
      { label: "Employee summary", path: "/attendance/monthly" },
      { label: "Leave Requests", path: "/attendance/leave" },
      { label: "Permission Requests", path: "/attendance/leave" },
      { label: "Holiday List", path: "/attendance/leave" },
      { label: "Leave Settings", path: "/attendance/leave-settings" },
    ],
  },
  { label: "Assign Task", icon: FaTasks, path: "/assign-task" },
];

export default Management;
