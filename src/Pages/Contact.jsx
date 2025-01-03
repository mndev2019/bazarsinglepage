
import { useEffect, useState } from "react";

import Modal from "react-bootstrap/Modal";

import { countries } from "countries-list";
import {  useNavigate } from "react-router";
import { BaseUrl } from "../BaseUrl";
import axios from "axios";
import { CitySelect, StateSelect } from "react-country-state-city";

const Contact = () => {
  
  


    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [pincode, setPincode] = useState("");
    const [companyname, setcompanyname] = useState("");
    const [gst_no, setgst_no] = useState("");


    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [preferredCategory, setPreferredCategory] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [catData, setCatData] = useState([]);

    const handleGetCategories = () => {
        axios.get(`${BaseUrl}category`).then((res) => {
            setCatData(res.data.data);
        });
    };

    useEffect(() => {
        handleGetCategories();
    }, []);


    const countryList = Object.entries(countries).map(([code, details]) => ({
        code,
        name: details.name,
        currency: details.currency,
        phone: details.phone,
    }));

    // Set "India" as the default value
    const defaultCountry = countryList.find((country) => country.name === "India");

    const [selectedCountry, setSelectedCountry] = useState(defaultCountry);

    const handleChange = (e) => {
        const country = countryList.find((c) => c.code === e.target.value);
        setSelectedCountry(country);
        console.log("Selected Country:", country);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            gst_no,
            country: selectedCountry?.code,
            companyname,
            state: state.name,
            city: city.name,
            pincode,
            category: preferredCategory,
            address1,
            address2,
            type: "Vendor"
        };
        axios.post(`${BaseUrl}leads`, formData).then((res) => {
            console.log(res.data)
            if (res.data.success) {
                setShowModal(true)
            }
        })
    };

    const navigte = useNavigate()

    const handleClose = () => {
        setShowModal(false)
        navigte('/')
    }; // Close modal handler

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
            style={{
                backgroundImage:
                    "url('https://t3.ftcdn.net/jpg/09/47/24/02/360_F_947240266_vILwmKGTvRMeF5qUI3JdmafagYMSBj69.jpg')",
                   
            }}
        >
            <div className="w-full max-w-[82rem] bg-white rounded-3xl shadow-lg p-8 overflow-auto"  style={{
          maxHeight: "calc(100vh - 40px)", 
        }}>
                <h2 className="text-3xl font-bold text-center text-black mb-4 myFont">
                    Contact Us As Host
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                    <div className="row">
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">
                                Name <span className="text-danger ">*</span>
                            </label>
                            <input
                                type="text"
                                value={firstName}

                                onChange={(e) => setFirstName(e.target.value)}
                                placeholder="Enter your first name"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">
                                Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                placeholder="Enter your last name"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">
                                Company Name  <span className="text-danger">*</span>
                            </label>
                            <input
                                type="text"
                                value={companyname}
                                onChange={(e) => setcompanyname(e.target.value)}
                                placeholder="Enter your last name"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">Email <span className="text-danger">*</span></label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">Phone <span className="text-danger">*</span></label>
                            <input
                                type="tel"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                minLength={10}
                                min={10}
                                max={10}
                                maxLength={10}
                                placeholder="Enter your contact number"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">GST Number <span className="text-danger">*</span></label>
                            <input
                                type="text"
                                value={gst_no}
                                onChange={(e) => setgst_no(e.target.value)}
                                placeholder="Enter your contact number"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">
                                Business Category <span className="text-danger">*</span>
                            </label>
                            <select
                                value={preferredCategory}
                                onChange={(e) => setPreferredCategory(e.target.value)}
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            >
                                <option value="" disabled>
                                    Select a Preferred Category
                                </option>
                                {catData.map((item) => (
                                    <option key={item._id} value={item._id}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-12 mt-2">
                            <h3 className="text-start text-black myFont">Address <span className="text-danger">*</span></h3>
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">Country </label>
                            <select
                                value={selectedCountry?.code || ""}
                                onChange={handleChange}

                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                            >
                                <option value="" disabled>
                                    Select Country
                                </option>
                                {countryList.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">State</label>
                            <StateSelect
                                countryid={101}
                                value={state}
                                required
                                className="myFont"
                                onChange={(e) => setState(e)}
                                placeHolder="Select State"
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">City</label>
                            <CitySelect
                                countryid={101}
                                stateid={state?.id}
                                value={city}
                                required
                                onChange={(e) => setCity(e)}
                                placeHolder="Select City"
                                className="myFont"
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">Pincode</label>
                            <input
                                type="text"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                placeholder="Enter your Pincode"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">
                                Address 1
                            </label>
                            <input
                                type="text"
                                value={address1}
                                onChange={(e) => setAddress1(e.target.value)}
                                placeholder="Enter your address 1"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-md-4 col-12 mt-2">
                            <label className="block text-lg font-medium text-black text-start myFont">
                                Address 2
                            </label>
                            <input
                                type="text"
                                value={address2}
                                onChange={(e) => setAddress2(e.target.value)}
                                placeholder="Enter your address 2"
                                className="myFont text-black mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div className="col-12 mt-3">
                            <button
                                type="submit"
                                className="myFont bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton className="bg-[#0367be] text-white myFont">
                    <Modal.Title>Submission Received</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center myFont">
                    <img
                        src="https://media.tenor.com/BSY1qTH8g-oAAAAM/check.gif"
                        alt="Checkmark"
                        className="mx-auto w-[100px] mb-2"
                    />
                    Your response has been submitted successfully!
                </Modal.Body>

            </Modal>
        </div>
    );
};

export default Contact;
