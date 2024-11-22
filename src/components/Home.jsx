import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate(); 
   

    const handleHostClick = (role) => {
        navigate("/contact" ,{state:role}); 
    };
    return (
        <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/010/803/399/non_2x/background-with-colorful-shopping-bags-illustration-sale-and-discount-concept-vector.jpg')",
            }}
        >
            <h1 className='text-center text-bold text-5xl pt-60 text-white'> Welcome to Happening Bazar</h1>
            <div className="absolute inset-0 flex items-center justify-center gap-7">

                <div className="button-icon" onClick={()=>handleHostClick("Host")}>
                    <div className="icon">
                        <FaHome />
                    </div>
                    <div className="cube"  >
                        <span className="side front">Host</span>
                        <span className="side top">Join Host</span>
                    </div>
                </div>

                <div className="button-icon" onClick={()=>handleHostClick("Guest")}>
                    <div className="icon">
                        <FaUser />
                    </div>
                    <div className="cube"  >
                        <span className="side front">Guest</span>
                        <span className="side top">Join Guest</span>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Home;
