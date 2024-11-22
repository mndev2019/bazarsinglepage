import React from 'react';
import { FaHome, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    const handleHostClick = (role) => {
        navigate("/contact", { state: role });
    };

    return (
        <div
            className="relative h-screen w-full bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/010/803/399/non_2x/background-with-colorful-shopping-bags-illustration-sale-and-discount-concept-vector.jpg')",
            }}
        >
            <h1 className="text-center font-bold text-4xl sm:text-5xl lg:text-6xl pt-40 sm:pt-60 text-white">
                Welcome to Happening Bazar
            </h1>
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-7">
                {/* Host Button */}
                <div
                    className="button-icon flex flex-col items-center gap-2 cursor-pointer text-white hover:scale-105 transition-transform"
                    onClick={() => handleHostClick("Host")}
                >
                    <div className="icon text-5xl">
                        <FaHome />
                    </div>
                    <div className="cube text-center">
                        <span className="side front text-lg sm:text-xl">Host</span>
                        <span className="side top text-sm sm:text-base">Join Host</span>
                    </div>
                </div>

                {/* Guest Button */}
                <div
                    className="button-icon flex flex-col items-center gap-2 cursor-pointer text-white hover:scale-105 transition-transform"
                    onClick={() => handleHostClick("Guest")}
                >
                    <div className="icon text-5xl">
                        <FaUser />
                    </div>
                    <div className="cube text-center">
                        <span className="side front text-lg sm:text-xl">Guest</span>
                        <span className="side top text-sm sm:text-base">Join Guest</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;