import React, { useState, useEffect } from "react";
import Dashboard from "../container/Dashboard";
import Spinner from './Spinner';

const Purchases = () => {
    const [loading, setLoading] = useState(true);

    if(loading) return <Spinner />

    return (
        <div>
            <Dashboard />
            Purchases
        </div>
    )


}

export default Purchases;
