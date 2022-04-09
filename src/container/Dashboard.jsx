import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import { Navbar, Search } from "../components";
import { Sales } from "../components";
import Account from "../components/Account";
import Banking from "../components/Banking";
import Payroll from "../components/Payroll";
import Purchases from "../components/Purchases";
import Reports from "../components/Reports";

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
                <Route path='/sales' element={<Sales />}/>
                <Route path='/purchases' element={<Purchases />}/>
                <Route path='/account' element={<Account />}/>
                <Route path='/banking' element={<Banking />}/>
                <Route path='/payroll' element={<Payroll />}/>
                <Route path='/reports' element={<Reports />}/>
            </Routes>
            </div>

        </div>
    )
}

export default Dashboard;