import React, { useState, useEffect } from "react";
import Dashboard from "../container/Dashboard";
import Spinner from './Spinner';

const Payroll = () => {
    const [loading, setLoading] = useState(true);

    if(loading) return <Spinner />

    return (
        <div>
            <Dashboard />
            Payroll
        </div>
    )


}

export default Payroll;
