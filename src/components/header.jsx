import React from "react";
import "../styles/header.css";

function Header() {
  const TextToSpan = ({ text }) => {
    const spanTags = text.split("").map((letter, index) => (
      <span className="letter" key={index}>
        {letter === "&" ? "\u00A0" : letter}
      </span>
    ));
    return <p className="word fancy">{spanTags}</p>;
  };

  return (
    <>
      <div className="heading" id="text">
        <div className="line">
          <TextToSpan text="Ishan" />
        </div>
        <div className="line">
          <TextToSpan text="Web&Developer" />
        </div>
        <div className="line">
          <TextToSpan text="Undergrad" />
          <TextToSpan text="Year-3" />
        </div>
        <div className="line">
          <TextToSpan text="In&AI" />
          <TextToSpan text="SRM" />
        </div>
      </div>
    </>
  );
}

export default Header;
