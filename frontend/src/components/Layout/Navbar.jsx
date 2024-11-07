import { IoIosNotifications } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-white   p-4">
      <div className="flex justify-between items-center w-[85%] border-r px-5">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 border w-72 border-gray-300 rounded-md"
      />
      <IoIosNotifications size={25}/>
      </div>
      <div className="flex items-center">
        <span className="mr-4">Joseph</span>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
