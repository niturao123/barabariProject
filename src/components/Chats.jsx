import React, { useState } from "react";
import "../styling/Chats.css";

export const Chats = () => {
  const [showChatPage, setShowChatPage] = useState(false);

  // Function to handle button click
  const handleChatClick = () => {
    setShowChatPage(true);
  };

  // Function to go back to the main page
  const handleBackClick = () => {
    setShowChatPage(false);
  };

  return (
    <div className="contactDiv">
      {!showChatPage ? (
        <div>
          <div className="logoDiv">
            <img src="logo.png" alt="Barabari logo" />
            <p>The Barabari Project</p>
            <div className="contactButton">
              <button>Contact</button>
              <svg class="icon" viewBox="0 0 100 80" width="46" height="20">
                <rect width="100" height="15"></rect>
                <rect y="35" width="100" height="15"></rect>
                <rect y="65" width="100" height="15"></rect>
            </svg>

            </div>
          </div>
          <div className="publicImgDiv">
            <div className="logoDivPara">
              <h1>
                Let our students <br /> build your <span>ChatBots</span>
              </h1>
              <p>
                We are Section 8 Non-Profit upskilling candidates <br />
                from low-income families democratizing access <br />
                to tech design employment opportunities
              </p>
              <button>Hire from us</button>
            </div>
            <div>
              <img className="publicImg" src="public.png" alt="A public Image" />
              <button className="chatButton" onClick={handleChatClick}>
                Chat with us
              </button>
            </div>
          </div>
        </div>
      ) : (
        <ChatPage onBack={handleBackClick} /> // Using the ChatPage component
      )}
    </div>
  );
};