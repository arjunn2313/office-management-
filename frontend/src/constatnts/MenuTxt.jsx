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
    { label: "Attendance", icon: FaClipboardList, path: "/attendance" },
    { label: "Assign Task", icon: FaTasks, path: "/assign-task" },
];

export default Management;
