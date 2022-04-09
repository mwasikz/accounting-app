import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar, Search } from "../components";

const Dashboard = () => {
    const [ searchTerm, setSearchTerm] = useState('')

    return (
        <div className="px-2 md:px-5">
            <div className="bg-gray-50">
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
            <div className="h-full">
            <Routes>
                <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
            </Routes>
            </div>

        </div>
    )
}

export default Dashboard;