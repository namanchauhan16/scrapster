import { useContext, useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import { Link } from 'react-router-dom';
import { DarkModeContext } from '../Context/darkmode';
import { MdOutlineLightMode, MdOutlineDarkMode, MdOutlineNotifications } from "react-icons/md";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbSmartHome, TbListSearch } from "react-icons/tb";
import { RiDashboardFill, RiSettings4Fill } from "react-icons/ri";
import { HiOutlineLogout, HiOutlinePhone } from "react-icons/hi";
import { BsBinoculars } from "react-icons/bs";

interface DecodedToken {
  name: string;
  email: string;
  role: string;
}

const NavigationBar = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('token') !== null ? true : false);
  const [isDropdownAvatarOpen, setIsDropdownAvatarOpen] = useState(false);
  const [isDropdownDotsOpen, setIsDropdownDotsOpen] = useState(false);
  const [user, setUser] = useState<DecodedToken | null>(null);
  
  const handleDropdownAvatar = () => {
    setIsDropdownAvatarOpen(!isDropdownAvatarOpen);
    setIsDropdownDotsOpen(false);
  };
  
  const handleDropdownDots = () => {
    setIsDropdownDotsOpen(!isDropdownDotsOpen);
    setIsDropdownAvatarOpen(false); // Close other dropdown when this one is opened
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage
    if (token) {
      try {
        const decodedUser = jwtDecode<DecodedToken>(token); // Decode the token
        setUser(decodedUser); // Store the decoded token in state
      } catch (error) {
        console.error('Invalid token');
      }
    }
  }, []);

  const handleMyProfile = () => {
    const token = localStorage.getItem('token');
    
    if (token) {
      try {
        const decodedToken = jwtDecode<DecodedToken>(token);
        const role = decodedToken.role;
  
        if (role === 'user') {
          window.location.href = '/userDashboard';
        } else if (role === 'recycler') {
          window.location.href = '/recyclerDashboard';
        } else {
          window.location.href = '/';
        }
      } catch (error) {
        console.error('Error decoding token:', error);
        window.location.href = '/';
      }
    } else {
      window.location.href = '/';
    }
  };


  const { dark, handleDarkMode } = useContext(DarkModeContext) || {};
  return (
    <div className="flex items-center justify-between px-8 py-2 bg-gray-800 bg-opacity-40 rounded-lg">
      <div>
        <Link to="/">
          <img src="/logo.png" alt="logo" className="w-48" />
        </Link>
      </div>
      <div className="flex items-center justify-around gap-8">
        <Link to="/" className="text-white flex gap-2 px-2 py-1 hover:text-[#DEF9C4] hover:rounded-lg hover:bg-[#0f1010db] hover:bg-opacity-50">
          <TbSmartHome size={22} />
          Home
        </Link>
        <Link to="/about" className="text-white flex gap-2 px-2 py-1 hover:text-[#DEF9C4] hover:rounded-lg hover:bg-[#0f1010db] hover:bg-opacity-50">
          <BsBinoculars size={20} />
          About
        </Link>
        <Link to="/contact" className="text-white flex gap-2 px-2 py-1 hover:text-[#DEF9C4] hover:rounded-lg hover:bg-[#0f1010db] hover:bg-opacity-50">
          <HiOutlinePhone size={20} />
          Contact
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex pl-2 py-[0.05rem] items-center mr-16 w-full bg-white rounded-lg">
          <TbListSearch size={24} />
          <input type='search' placeholder='Search' className='px-2 py-1 focus:outline-none w-[25rem]  rounded-lg' />
        </div>
        {
          dark ? (
            <button className="text-white " onClick={handleDarkMode}>
              <MdOutlineDarkMode size={24} />
            </button>
          ) : (
            <button className="text-white" onClick={handleDarkMode}>
              <MdOutlineLightMode size={24} />
            </button>
          )
        }
        {
          isLoggedIn ? (
            <div>
              <button data-dropdown-toggle="dropdownAvatar" className="flex" type="button" onClick={handleDropdownAvatar}>
                <img className="w-16" src="/man.webp" alt="user photo" />
              </button>
              {
                isDropdownAvatarOpen ? (
                  <div data-dropdown-content="dropdown" className={`absolute right-[5.5rem] top-[5.5rem] ${dark ? 'bg-[#1A1B1D]' : 'bg-gray-300'} rounded-tl-lg rounded-br-lg w-[13rem] `}>
                    <div className={`flex flex-col block px-2 py-1 m-2 ${dark ? 'text-gray-200' : 'text-gray-800'} hover:rounded-tl-lg`}>
                      <div className={`text-[1.2rem] font-medium ${dark ? 'text-[#CEDF9F]':'text-[#55679C]'} leading-4`}>{user?.name}</div>
                      <div className={`text-[0.8rem] font-normal truncate ${dark ? 'text-[#EAE4DD]':'text-[#1E201E]'} leading-6`}>{user?.email}</div>
                    </div>
                    <hr className="border-[#3c3d3f] mx-2" />
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformationButton">
                      <li>
                        <button onClick={handleMyProfile} className={`w-full flex gap-2 block px-4 py-2 text-[1rem] ${dark ? 'text-gray-200 hover:bg-[#0f1010db]' : 'text-gray-800 hover:bg-gray-200'}`}>
                          <RiDashboardFill size={20} color={dark? '#E1D7C6' : '#677D6A'}/>
                          My Profile
                        </button>
                      </li>
                      <li>
                        <a href="#" className={`w-full flex gap-2 block px-4 py-2 text-[1rem] ${dark ? 'text-gray-200 hover:bg-[#0f1010db]' : 'text-gray-800 hover:bg-gray-200'}`}>
                          <RiSettings4Fill size={22} color={dark? '#E1D7C6' : '#677D6A'}/>
                          Account Settings
                        </a>
                      </li>
                    </ul>
                    <hr className="border-[#3c3d3f] mx-2" />
                    <div className="py-2">
                      <button onClick={handleLogout} className={`w-full flex gap-2 block px-4 py-1 text-[1rem] ${dark ? 'text-gray-200 hover:bg-[#0f1010db]' : 'text-gray-800 hover:bg-gray-200'}`}>
                      <HiOutlineLogout size={22} color={dark? '#E1D7C6' : '#677D6A'} />
                        LogOut
                      </button>
                    </div>
                  </div>
                ): null}
            </div>
          ) : (<Link to="/login" className="text-gray-900 text-[1.12rem] rounded-full bg-orange-200 px-4 py-[0.3rem] flex items-center gap-2 hover:bg-orange-300 hover:text-gray-900">
            Login
          </Link>)
        }
        <button data-dropdown-toggle="dropdown" className="text-white" type="button" onClick={handleDropdownDots}>
          <PiDotsThreeOutlineVerticalBold size={24} />
        </button>
        {
          isDropdownDotsOpen ? (
            <div data-dropdown-content="dropdown" className={`absolute right-10 top-[5.5rem] ${dark ? 'bg-[#1A1B1D]' : 'bg-gray-300'} rounded-tl-lg rounded-br-lg`}>
              <a href="#" className={`flex gap-2 block px-2 py-1 m-2 ${dark ? 'text-gray-200 hover:bg-[#0f1010db]' : 'text-gray-800 hover:bg-gray-200'} hover:rounded-tl-lg`}>
                <MdOutlineNotifications size={24} color={dark? '#E1D7C6' : '#677D6A'}/>
                Notification Preferences
              </a>
              <a href="#" className={`flex gap-2 block px-2 py-1 m-2 ${dark ? 'text-gray-200 hover:bg-[#0f1010db]' : 'text-gray-800 hover:bg-gray-200'} hover:rounded-br-lg`}>
                <TfiHeadphoneAlt size={20} color={dark? '#E1D7C6' : '#677D6A'}/>
                24x7 Customer Care
              </a>
            </div>
          ) : null
        }
      </div>
    </div>
  );
};

export default NavigationBar;
