import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Filters() {

    const navigate = useNavigate();

    function returnHomePg()
    {
        navigate('/home');
    }

    return (
        <div>
            <button 
                onClick={returnHomePg}
                class="w-[175px] h-[50px] mt-4 rounded-lg bg-[#2E6B98] text-[#ffffff] ml-3">
                Back
            </button>
        <p class="flex text-4xl">Search Filters Page</p>
        </div>
    )
}