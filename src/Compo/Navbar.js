import React from "react";
import "../index.css";

export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary bg-${props.mode} `}
      >
        <div className="container-fluid ">
          <a
            className={`navbar-brand text-${props.mode === "ligth"
              ? "dark"
              : props.mode === "warning"
                ? "dark"
                : "white"
              }`}
            href="/"
          >
            {props.title}
          </a>
          <button
            className="navbar-toggler bg-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-bg-primary  "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link text-${props.mode === "ligth"
                    ? "dark"
                    : props.mode === "warning"
                      ? "dark"
                      : "white"
                    }`}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-${props.mode === "ligth"
                    ? "dark"
                    : props.mode === "warning"
                      ? "dark"
                      : "white"
                    }`}
                  href="/"
                >
                  About
                </a>
              </li>
            </ul>
            <h6
              className={` mx-1 my-3 text-${props.mode === "ligth" ? "dark" : "white"
                }`}
            >
              Change Theme
            </h6>
            <div
              className={`btn1 mx-1 my-1 bg-${props.mode === "dark" ? "white" : "dark"
                }`}
              onClick={props.togleMode}
            ></div>
            <div
              className={`btn1 mx-1 my-1   bg-${props.mode === "success" ? "white" : "success"
                }`}
              onClick={props.thm}
            ></div>
            <div
              className={`btn1 mx-1 my-1   bg-${props.mode === "danger" ? "white" : "danger"
                }`}
              onClick={props.thm2}
            ></div>
            <div
              className={`btn1 mx-1 my-1    bg-${props.mode === "warning" ? "white" : "warning"
                }`}
              onClick={props.thm3}
            ></div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.defaultProps = {
  title: "My wepage",
};
