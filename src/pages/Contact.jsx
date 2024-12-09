import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import { countries } from "countries-list";
import { useLocation, useNavigate } from "react-router";
import { BaseUrl } from "../BaseUrl";

const Contact = () => {
  const location = useLocation(); // Get location from the router
  const role = location.state; // Access the state passed by navigate()


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
      <div className="w-full max-w-[82rem] bg-white rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          Contact Us As Host
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-2">
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">
                Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={firstName}

                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter your first name"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">
                Last Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter your last name"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">
                Company Name  <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                value={companyname}
                onChange={(e) => setcompanyname(e.target.value)}
                placeholder="Enter your last name"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">Email <span className="text-danger">*</span></label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">Phone <span className="text-danger">*</span></label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                minLength={10}
                min={10}
                max={10}
                maxLength={10}
                placeholder="Enter your contact number"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">GST Number <span className="text-danger">*</span></label>
              <input
                type="text"
                value={gst_no}
                onChange={(e) => setgst_no(e.target.value)}
                placeholder="Enter your contact number"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">
                Business Category <span className="text-danger">*</span>
              </label>
              <select
                value={preferredCategory}
                onChange={(e) => setPreferredCategory(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
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
            <div className="col-span-3">
              <h3>Address <span className="text-danger">*</span></h3>
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">Country </label>
              <select
                value={selectedCountry?.code || ""}
                onChange={handleChange}

                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
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
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">State</label>
              <StateSelect
                countryid={101}
                value={state}
                required
                className=""
                onChange={(e) => setState(e)}
                placeHolder="Select State"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">City</label>
              <CitySelect
                countryid={101}
                stateid={state?.id}
                value={city}
                required
                onChange={(e) => setCity(e)}
                placeHolder="Select City"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">Pincode</label>
              <input
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                placeholder="Enter your Pincode"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">
                Address 1
              </label>
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Enter your address 1"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-1">
              <label className="block text-lg font-medium text-black">
                Address 2
              </label>
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Enter your address 2"
                className="mt-1 block w-full px-4 py-2 border focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
                required
              />
            </div>
            <div className="col-span-3">
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton className="bg-[#0367be] text-white">
          <Modal.Title>Submission Received</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
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
