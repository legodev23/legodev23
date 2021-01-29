import React, { useState } from "react";

const NavBar = () => {
  const tabHome = "home";
  const tabAboutMe = "aboutMe";
  const tabProjects = "projects";

  const [tab, setTab] = useState(tabHome);

  const styleSelect = {
    color: "var(--purple-color)",
  };

  return (
    <nav>
      <ul>
        <li
          style={tab === tabHome ? styleSelect : {}}
          onClick={() => {
            setTab(tabHome);
          }}
        >
          Home
        </li>
        <li
          style={tab === tabAboutMe ? styleSelect : {}}
          onClick={() => {
            setTab(tabAboutMe);
          }}
        >
          About Me
        </li>
        <li
          style={tab === tabProjects ? styleSelect : {}}
          onClick={() => {
            setTab(tabProjects);
          }}
        >
          Projects
        </li>
      </ul>
      <style jsx>{`
        ul {
          position: fixed;
          top: 0;
          display: flex;
          justify-content: center;
          width: 100vw;
          list-style: none;
          padding: 0;
          margin: 0;
          animation-name: bar-in;
          animation-duration: 0.5s;
        }
        li {
          position: relative;
          padding: 1em;
          cursor: pointer;
          font-weight: 600;
          text-align: center;
          transition: 0.5s;
          border-radius: 4px;
          overflow: hidden;
        }
        li:hover {
          color: var(--purple-color);
        }
        li::after {
          position: absolute;
          bottom: 0;
          content: "";
          display: block;
          height: 5px;
          background-color: var(--purple-color);
        }
        li:hover::after {
          animation-name: hover-in;
          animation-duration: 1s;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }

        @keyframes hover-in {
          0% {
            right: 0;
            width: 0%;
          }
          40% {
            width: 100%;
            right: 0;
            left: auto;
          }
          50% {
            right: auto;
            left: 0;
          }
          60% {
            width: 100%;
          }
          100% {
            width: 0%;
            left: 0;
          }
        }
        @keyframes bar-in {
          from {
            top: -50px;
          }
          to {
            top: 0;
          }
        }

        @media screen and (max-width: 500px) {
          ul {
            top: auto;
            bottom: 0;
          }
        }
      `}</style>
    </nav>
  );
};

export default NavBar;