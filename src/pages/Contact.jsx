import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useLocation} from "react-router";

const Contact = () => {
  
  const location = useLocation(); // Get location from the router
  const role = location.state; // Access the state passed by navigate()
  const [showModal, setShowModal] = useState(false);
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
      <div className="w-full max-w-lg bg-white  rounded-3xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-black mb-4">
          Contact Us As {role}
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-medium text-black text-bold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
              required
            />
          </div>

          {/* Email Field */}
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

          {/* Contact Number Field */}
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

          {/* Message Field */}
          <div>
            <label
              htmlFor="message"
              className="block text-lg font-medium text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter your message"
              className="mt-1 block w-full px-4 py-2 border hover:!border-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:ring-offset-1 sm:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
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

    </div>
  );
};

export default Contact;
