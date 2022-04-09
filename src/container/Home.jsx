import React, { useState } from "react";
import { AiFillCloseCircle } from 'react-icons/ai';
import { HiMenu } from 'react-icons/hi';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Dashboard from './Dashboard';
import logo from '../assets/logo.png';
import Spinner from "../components/Spinner";

const Home = ()  => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
     const [loading, setLoading] = useState(true);

    


    return (

        <div className="flex bg-slate-100 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
            <div className="hidden md:flex h-screen flex-initial">
                <Sidebar />
            </div>
            <div className="flex md:hidden flex-row">
                <div className="p-2 w-full flex flex-row justify-between items-center">
                    <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
                        <Link to ="/" >
                            <img src={logo} alt={logo} className="w-28"/>
                        </Link>
                </div>

                {toggleSidebar && (
                    <div className="fixed w-4/5 bg-gray-300 h-screen overflow-y-auto z-10 animate-slide-in">
                        <div className="absolute w-full flex justify-end items-center p-2">
                            <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
                        </div>
                        <Sidebar closeToggle={setToggleSidebar} />
                    </div>
                )}

            </div>

            <div className="pb-2 flex-1 h-screen overflow-y-scroll">
                <Routes>
                    <Route path='/*' element={<Dashboard />}/>
                </Routes>
            </div>

        </div>
    )

}

export default Home;