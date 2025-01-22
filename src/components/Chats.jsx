import React from "react";
import "../styling/Chats.css";

export const Chats = () => {
  return (
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
        {/* Button as an anchor link */}
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfcfOaRlK0prJLPZImUX5-cQllWitpmv4Ypp6kjCoAcEjJGFA/viewform" target="_blank" rel="noopener noreferrer">
          <button>Hire from us</button>
        </a>
      </div>
      <div>
        <img className="publicImg" src="public.png" alt="A public Image" />
        <button className="chatButton">Chat with us</button>
      </div>
    </div>
    </div>
  );
};