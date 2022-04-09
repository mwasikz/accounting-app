import React, { useState, useEffect } from "react";
import Dashboard from "../container/Dashboard";
import Spinner from './Spinner';

const Sales = () => {
    const [loading, setLoading] = useState(true);

    if(loading) return <Spinner />

    return (
        <div>
            Sales
        </div>
    )


}

export default Sales;
