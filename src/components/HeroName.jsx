import React from "react";
import "../styles/HeroName.css";    

export default function HeroName({ name, tagline }) {
  return (
    <div className="hero-name">
      <svg viewBox="0 0 800 100" className="neon-name">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="64" fontFamily="Arial, sans-serif">
          {Array.from('Parth Mehta').map((char, index) => (
                                    <tspan
                                        key={index}
                                        className="neon-letter"
                                        dx={index === 0 ? 0 : 0}
                                    >
                                        {char}
                                    </tspan>
                                ))}
      </text>
    </svg>
    <p className="tagline">{tagline}</p>
  </div>
  );
}
