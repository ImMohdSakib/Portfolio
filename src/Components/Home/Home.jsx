import React, { useState } from "react";
import sakib from "../../assets/sakib.png";
import TextChange from "../TextChange";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);  // To control modal visibility

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);  // Toggle modal state
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20 home fade-in">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter fade-in">
          <TextChange />
        </h1>
        <p className="mt-5 fade-in">
          Hi! I'm Mohd Sakib, a dedicated Java Full Stack Developer. I specialize in creating dynamic and responsive web applications using a combination of HTML, CSS, JavaScript, React, Java, and MySQL. With a strong foundation in both frontend and backend technologies.
        </p>
        <button
          onClick={handleModalToggle}  // Open the modal when button is clicked
          className="mt-5 md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] fade-in"
        >
          Contact Me
        </button>
      </div>
      <div className="hidden md:block fade-in">
        <div className="box"><i className="fas fa-quote-left fa2"></i>
          <div className="text"><i className="fas fa-quote-right fa1"></i>
            <div>
              <img src={sakib} alt="Avatar" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 fade-in">
          <div className="bg-[#171D32] p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4 text-white">Contact Me</h2>
            <p className="text-sm mb-4 text-white">You can reach me via WhatsApp or email:</p>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/qr/AIRIG7TIOF6UN1"
                  className="text-[#4CAF50] hover:underline"  // Green color for WhatsApp link
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +91 7505305400
                </a>
              </li>
              <li>
                <a
                  href="mailto:mohdsakib481@gmail.com"
                  className="text-[#FF9800] hover:underline"  // Orange color for Email link
                >
                  Email: Mohd Sakib
                </a>
              </li>
            </ul>
            <button
              onClick={handleModalToggle}  // Close the modal
              className="mt-6 w-full py-2 px-4 bg-[#465697] text-white rounded-full hover:bg-[#3b4e78]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
