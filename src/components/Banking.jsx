import React, { useState, useEffect } from "react";
import Dashboard from "../container/Dashboard";
import Spinner from './Spinner';

const Banking = () => {
    const [loading, setLoading] = useState(true);

    if(loading) return <Spinner />

    return (
        <div>
            Banking
        </div>
    )


}

export default Banking;
