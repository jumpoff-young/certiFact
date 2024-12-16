import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from './assets/Logo/Logo.png';
import { HiMenuAlt3, HiX } from 'react-icons/hi'; // For the hamburger icon and close icon

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <>
            <div className='w-full flex justify-between m-auto bg-[#F5F5F5] border-b-[1px] border-[#D9D9D9]'>

                {/* Navbar */}
                <div className="flex m-auto w-full px-6 lg:max-w-[91.111%]  justify-between  py-[12px] items-start lg:items-center md:items-center">
                    {/* Logo */}
                    <NavLink to="/Homepage">
                        <img src={logo} alt="logo" className="w-[80px] h-auto" />
                    </NavLink>
                    <div className="flex flex-col gap-8 items-end">
                        {/* Hamburger Menu (Mobile) */}
                        <div className="lg:hidden md:hidden" onClick={handleMenuToggle}>
                            {!isMenuOpen ? (
                                <HiMenuAlt3 className="text-3xl text-blackCustom" />
                            ) : (
                                <HiX className="text-3xl text-blackCustom" />
                            )}
                        </div>

                        {/* Navbar Links */}
                        <ul
                            className={`flex flex-col lg:flex lg:flex-row gap-6 lg:gap-8 
              items-end lg:items-center md:items-center text-base 
              text-blackCustom font-normal transition-all duration-500 ease-in-out ${isMenuOpen ? 'block' : 'hidden'
                                } lg:block`}
                        >
                            {/* Navigation Links */}
                            <li className="text-[14px] text-[#1e1e1e] leading-normal font-normal">
                                <NavLink
                                    to="/Individuals"
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 border-[#008643] text-[#008643] pb-1' : ''
                                    }
                                >
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="text-[14px] text-[#1e1e1e] leading-normal font-normal">
                                <NavLink
                                    to="/Businesses"
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 border-[#008643] text-[#008643] pb-1' : ''
                                    }
                                >
                                   Requests
                                </NavLink>
                            </li>
                            <li className="text-[14px] text-[#1e1e1e] leading-normal font-normal">
                                <NavLink
                                    to="/About"
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 border-[#008643] text-[#008643] pb-1' : ''
                                    }
                                >
                                    Reports
                                </NavLink>
                            </li>
                            <li className="text-[14px] text-[#1e1e1e] leading-normal font-normal">
                                <NavLink
                                    to="/SafetyEducation"
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 border-[#008643] text-[#008643] pb-1' : ''
                                    }
                                >
                                    Support
                                </NavLink>
                            </li>
                            <li className="text-[14px] text-[#1e1e1e] leading-normal font-normal">
                                <NavLink
                                    to="/Developers"
                                    className={({ isActive }) =>
                                        isActive ? 'border-b-2 border-[#008643] text-[#008643] pb-1' : ''
                                    }
                                >
                                    Developers
                                </NavLink>
                            </li>
                            <li className="lg:ml-[141px] flex flex-col gap-4 lg:flex-row lg:gap-4">
                                <NavLink to="/OnlineService">
                                    <button className="py-[12px] px-[24px] bg-[#1273EB]  text-white font-medium text-[15px] leading-[21px] rounded-[8px]">
                                        Sign Up
                                    </button>
                                </NavLink>
                                <NavLink to="/OnlineService">
                                    <button className="py-[11.5px] px-[25.5px] border border-[#1273EB] text-[#1273EB] font-medium text-[15px] leading-[21px] rounded-[8px]">
                                        Log In
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        
        </>
    );
};

export default Navbar;