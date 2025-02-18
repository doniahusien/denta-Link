"use client";

import React, { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .loading svg polyline {
        fill: none;
        stroke-width: 6;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      .loading svg .polyline-back {
        fill: none;
        stroke: rgba(77, 104, 255, 0.2);
      }

      .loading svg .polyline-front {
        fill: none;
        stroke: rgb(77, 175, 255);
        stroke-dasharray: 144, 432;
        stroke-dashoffset: 576;
        animation: dash_682 1.4s linear infinite;
      }

      @keyframes dash_682 {
        72.5% {
          opacity: 0;
        }
        to {
          stroke-dashoffset: 0;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style); 
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="loading">
        <svg width="192px" height="144px">
          <polyline
            points="0.471 71.862, 42 71.862, 65.529 144, 129 0, 150 72, 192 72"
            className="polyline-back"
          />
          <polyline
            points="0.471 71.862, 42 71.862, 65.529 144, 129 0, 150 72, 192 72"
            className="polyline-front"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loader;
