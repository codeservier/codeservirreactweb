import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "tailwindcss/tailwind.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import Services from "../Services.js/Services";
import OurProjects from "../OurProjects/OurProjects";
import Logobtn from "../../components/Logobtn/Logobtn";
import ContactPage from "../Contact/Contact";
import DevCycle from "../DevCycle/DevCycle";
import Contact from "../../components/contact/Contact";
import Popup from "../../components/popOn/PoponHome"; // Ensure you have this path correct
import PopupCourse from "../../components/popOn/PopupCourse";

const Home = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(true); // Add state for popup visibility
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/LoginPage");
  };

  const handleSignup = () => {
    navigate("/SignUp");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  useEffect(() => {
    // Show popup when the component mounts
    setIsPopupOpen(true);
  }, []);

  return (
    <div className="bg-[#ffffff]">
      {isPopupOpen && <Popup onClose={handleClosePopup} />} 
      {/* {isPopupOpen && <PopupCourse onClose={handleClosePopup} />}  */}
      <div className="min-h-screen">
        <div className="bg-[#f9fdff] ">
          <Logobtn />
          <div className="">
            <LandingPage />
          </div>
        </div>
        {/* className="bg-sphere-img bg-[50%]  bg-no-repeat bg-cover bg-center" */}
        <div className="bg-white-img bg-[50%]  bg-no-repeat bg-cover"
        >
          <Services />
        </div>
        <DevCycle />
        <div>
          <OurProjects />
        </div>
      </div> 
      <div>
      <Contact />

      </div>
      <Footer />
      <Navbar />
    </div>
  );
};

export default Home;