import React from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillHome, AiFillAccountBook, AiFillPayCircle } from 'react-icons/ai';
import { BsCreditCard2BackFill, BsFillCartFill, BsBank2, BsFileBarGraphFill } from 'react-icons/bs';


import logo from '../assets/logo.png';

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';
const isActiveStyle = 'flex items-center px-5 gap-3 font-bold border-r-2 border-red-800 transition-all duration-200 ease-in-out capitalize';


const Sidebar = ({ closeToggle }) => {
    const handleCloseSidebar = () => {
        if(closeToggle) closeToggle(false);
    }

    return (
        <div className="flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar pr-5">
            <div className="flex flex-col">
                <Link 
                    to='/'
                    className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
                    onClick={handleCloseSidebar}
                >
                <img src={logo} alt={logo} className="w-28" />
                </Link>
                <div className="flex flex-col gap-5">
                    <NavLink
                        to='/'
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                        onClick={handleCloseSidebar}
                    >
                    <AiFillHome />
                        Home
                    </NavLink>

                    <NavLink
                        to='/sales'
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                        onClick={handleCloseSidebar}
                    >
                        <BsCreditCard2BackFill/>
                        Sales
                    </NavLink>

                     <NavLink
                        to='/purchase'
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                        onClick={handleCloseSidebar}
                    >
                        <BsFillCartFill/>
                        Purchases
                    </NavLink>

                    <NavLink
                        to='/account'
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                        onClick={handleCloseSidebar}
                    >
                        <AiFillAccountBook/>
                        Account
                    </NavLink>

                    <NavLink
                        to='/banking'
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                        onClick={handleCloseSidebar}
                    >
                        <BsBank2/>
                        Banking
                    </NavLink>

                     <NavLink
                        to='/payroll'
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                        onClick={handleCloseSidebar}
                    >
                        <AiFillPayCircle/>
                        Payroll
                    </NavLink>

                    <NavLink
                        to='/reports'
                        className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle }
                        onClick={handleCloseSidebar}
                    >
                        <BsFileBarGraphFill/>
                        Reports
                    </NavLink>


                </div>
            </div>
        </div>
    )
}

export default Sidebar;