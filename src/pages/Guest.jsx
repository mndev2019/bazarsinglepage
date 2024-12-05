import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation } from "react-router";

const Guest = () => {

    const location = useLocation(); // Get location from the router
    const role = location.state; // Access the state passed by navigate()
    const [showModal, setShowModal] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true); // Show modal on form submission
    };
    const handleClose = () => setShowModal(false); // Close modal handler
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
            style={{
                backgroundImage:
                    "url('https://t3.ftcdn.net/jpg/09/47/24/02/360_F_947240266_vILwmKGTvRMeF5qUI3JdmafagYMSBj69.jpg')",
            }}
        >
            <div className="w-full max-w-[82rem] bg-white  rounded-3xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-black mb-4">
                    Contact Us As Guest
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">

                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="full-name"
                                    className="block text-lg font-medium text-black text-bold"
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="full-name"
                                    name="full-name"
                                    placeholder="Enter your full name"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>



                        {/* Email Field */}
                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-lg font-medium text-black"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>


                        {/* Contact Number Field */}
                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="contact"
                                    className="block text-lg font-medium text-black"
                                >
                                    Contact Number
                                </label>
                                <input
                                    type="tel"
                                    id="contact"
                                    name="contact"
                                    placeholder="Enter your contact number"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="address-1"
                                    className="block text-lg font-medium text-black text-bold"
                                >
                                    Address 1
                                </label>

                                <input
                                    type="text"
                                    id="address-1"
                                    name="address-1"
                                    placeholder="Enter your address"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="address-2"
                                    className="block text-lg font-medium text-black text-bold"
                                >
                                    Address 2
                                </label>

                                <input
                                    type="text"
                                    id="address-2"
                                    name="address-2"
                                    placeholder="Enter your address "
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="address-3"
                                    className="block text-lg font-medium text-black text-bold"
                                >
                                    Address 3
                                </label>

                                <input
                                    type="text"
                                    id="address-3"
                                    name="address-3"
                                    placeholder="House No., Society name, Sector, City"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="interests"
                                    className="block text-lg font-medium text-black text-bold"
                                >
                                    Interests
                                </label>

                                <select
                                    id="interests"
                                    name="interests"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                >
                                    <option value="" disabled selected>
                                        Select an interest
                                    </option>
                                    <option value="education">Education</option>
                                    <option value="fashion">Fashion</option>
                                    <option value="fitness">Fitness</option>
                                    <option value="hospitality">Hospitality</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="automobile">Automobile</option>
                                    <option value="electronics">Electronics</option>
                                    <option value="beauty">Beauty</option>
                                    <option value="home-decor">Home décor</option>
                                    <option value="leisure">Leisure</option>
                                    <option value="property">Property</option>
                                    <option value="daily-essentials">Daily essentials</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block text-lg font-medium text-black text-bold"
                                >
                                    Username
                                </label>

                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    placeholder="Enter your username"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-lg font-medium text-black text-bold"
                            >
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'} // Toggle password visibility
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                                >
                                    {isPasswordVisible ? <FaEyeSlash /> : <FaEye />} {/* Show eye or eye-slash icon */}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="confirm-password"
                                className="block text-lg font-medium text-black text-bold"
                            >
                                Confirm Password
                            </label>

                            <div className="relative">
                                <input
                                    type={isConfirmPasswordVisible ? 'text' : 'password'} // Toggle confirm password visibility
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder="Re-enter your password"
                                    className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
                                    required
                                />

                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="absolute inset-y-0 right-4 flex items-center text-gray-500"
                                >
                                    {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />} {/* Show eye or eye-slash icon */}
                                </button>
                            </div>
                        </div>
                        {/* Submit Button */}
                        <button

                            type="submit"
                            className=" bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Submit
                        </button>

                    </div>
                </form>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton className="bg-[#0367be] text-white">
                    <Modal.Title>
                        {/* Title if you need it */}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <img
                        src="https://media.tenor.com/BSY1qTH8g-oAAAAM/check.gif"  // Use your checkmark GIF URL here
                        alt="Checkmark"
                        style={{
                            maxWidth: "100px",  // Adjust the size as needed
                            maxHeight: "100px",
                        }}
                    />
                    <p className="text-center text-[#ff8400] font-[700]">Your submission has been received!
                        Something amazing is coming soon. Stay tuned!</p>
                </Modal.Body>
                <Modal.Footer className="">
                    {/* Footer content if needed */}
                </Modal.Footer>
            </Modal>

        </div >
    );
};

export default Guest;
