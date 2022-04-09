import React, { useState, useEffect } from "react";
import Dashboard from "../container/Dashboard";
import Spinner from './Spinner';

const Reports = () => {
    const [loading, setLoading] = useState(true);

    if(loading) return <Spinner />

    return (
        <div>
            <Dashboard />
            Reports
        </div>
    )


}

export default Reports;
