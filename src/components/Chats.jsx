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
    <div>
      {!showChatPage ? (
        <div>
          <div className="logoDiv">
            <img src="logo.png" alt="Barabari logo" />
            <p>The Barabari Project</p>
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
        <div className="chatPage">
          <button className="backButton" onClick={handleBackClick}>
            Back
          </button>
          <div className="chatContainer">
            <div className="backChat">
            <div onClick={handleBackClick}>|-</div>
            <div> Chat with us  </div>
            <div onClick={handleBackClick}>x</div>
            </div>
            <img src="search.png" alt="" />
            <h1>Hi There!</h1>
            <p>Want to work with us?</p>
            <p>
              We are happy to discuss any potential projects. If you have a
              couple of minutes, we would love to hear more.
            </p>
            <button className="startChatButton">Start Chat</button>
            <div className="startChatButtonPara">
            <h2>Got any other queries?</h2>
            <p>Please drop us an email at </p>
            <a href="">barabaricollective@gmail.com</a>
            </div>
          </div>
        </div>
      )}
    </div>
    
  );}