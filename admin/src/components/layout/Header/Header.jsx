import { useState, useEffect, useRef } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { adminLogout } from "../../../features/actions/Auth/authAction";
import { logout } from "../../../features/slices/Auth/authSlice";
import { Link } from "react-router-dom";

import Logo from "/logo.png";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    dispatch(adminLogout());
    dispatch(logout());
    setIsDropdownOpen(false);
  };

  const { profileData } = useSelector((state) => state.users);
  const { profileInfo } = profileData;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    // <header className="bg-gradient-to-r from-[#782c8f] to-[#f9f4fd] text-gray-800 shadow-lg border-b-4 border-[#3ebdac]">
    //   <div className="flex items-center justify-between px-6 py-4">
    //     {/* Logo Section */}
    //     <img
    //       src="https://png.pngtree.com/png-vector/20190726/ourmid/pngtree-real-estate-logo-png-image_1602628.jpg"
    //       className="w-44 h-10 object-contain"
    //       alt="Logo"
    //     />

    //     {/* User Info Section */}
    //     <div className="relative">
    //       <button
    //         ref={buttonRef}
    //         onClick={toggleDropdown}
    //         className="flex items-center space-x-2 text-base font-semibold hover:text-[#3ebd59] focus:outline-none transition-colors duration-200"
    //       >
    //         <IoPersonCircleOutline className="text-3xl text-[#3ebd59]" />
    //         <span className="hidden sm:inline">
    //           {profileInfo?.name || "Guest"}
    //         </span>
    //         <HiOutlineChevronDown className="text-lg" />
    //       </button>

    //       {/* Dropdown Menu */}
    //       {isDropdownOpen && (
    //         <div
    //           ref={dropdownRef}
    //           className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-200 z-50 overflow-hidden animate-fade-in"
    //         >
    //           <Link to="/profile">
    //             <button
    //               onClick={() => setIsDropdownOpen(false)}
    //               className="block w-full text-left px-5 py-3 text-sm font-medium hover:bg-[#f4fdfc] hover:text-[#3ebd59] transition-colors duration-150"
    //             >
    //               Profile
    //             </button>
    //           </Link>

    //           <button
    //             onClick={handleLogout}
    //             className="block w-full text-left px-5 py-3 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition-colors duration-150"
    //           >
    //             Logout
    //           </button>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </header>

    <header className="bg-gradient-to-r from-white to-[#f0fdf7] text-gray-800 shadow-md border-b-2 border-[#3ebd59]">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <img
          src="https://png.pngtree.com/png-vector/20190726/ourmid/pngtree-real-estate-logo-png-image_1602628.jpg"
          className="w-44 h-10 object-contain"
          alt="Logo"
        />

        {/* User Info Section */}
        <div className="relative">
          <button
            ref={buttonRef}
            onClick={toggleDropdown}
            className="flex items-center space-x-2 text-base font-medium hover:text-[#3ebd59] transition-all duration-200"
          >
            <IoPersonCircleOutline className="text-3xl text-[#3ebd59]" />
            <span className="hidden sm:inline">
              {profileInfo?.name || "ADMIN"}
            </span>
            <HiOutlineChevronDown className="text-lg" />
          </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div
              ref={dropdownRef}
              className="absolute right-0 mt-3 w-52 bg-white rounded-lg shadow-lg border border-gray-200 z-50 animate-fade-in"
            >
              <Link to="/profile">
                <button
                  onClick={() => setIsDropdownOpen(false)}
                  className="block w-full text-left px-5 py-3 text-sm font-medium hover:bg-[#f0fdf7] hover:text-[#3ebd59] transition"
                >
                  Profile
                </button>
              </Link>

              <button
                onClick={handleLogout}
                className="block w-full text-left px-5 py-3 text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
