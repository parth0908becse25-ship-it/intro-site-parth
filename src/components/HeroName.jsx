import React from "react";
import "../styles/HeroName.css";    

export default function HeroName({ name, tagline }) {
  return (
    <div className="hero-name">
      <h1 className="neon-name">
        {name.split("").map((letter, i) => {
          const randomDelay = (Math.random() * 1).toFixed(1); // 1s random delay
          return (
            <span
              key={i}
              className="neon-letter"
              style={{ animationDelay: `${randomDelay}s` }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          );
        })}
      </h1>
      <p className="tagline">{tagline}</p>
    </div>
  );
}
