import React, { useState } from "react";
import Navbar from "./Compo/Navbar";
import Text from "./Compo/Text";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import "./index.css";

// import About from "./Compo/About";
export default function App() {
  const [mode, setmode] = useState("ligth");

  const togleMode = () => {
    if (
      mode === "ligth" ||
      mode === "success" ||
      mode === "danger" ||
      mode === "warning"
    ) {
      setmode("dark");
      document.title = "Dark Mode";
      document.body.style.background = "#042743";
    } else if (mode === "dark") {
      setmode("ligth");
      document.title = "Ligth Mode";
      document.body.style.background = "white";
    }
  };
  const thm = () => {
    if (
      mode === "ligth" ||
      mode === "danger" ||
      mode === "dark" ||
      mode === "warning"
    ) {
      setmode("success");
      document.body.style.backgroundColor = "green";
      document.title = "Green Mode";
    } else {
      setmode("ligth");
      document.body.style.background = "white";
      document.title = "Ligth Mode";
    }
  };
  const thm2 = () => {
    if (
      mode === "ligth" ||
      mode === "success" ||
      mode === "dark" ||
      mode === "warning"
    ) {
      setmode("danger");
      document.title = "Red Mode";
      document.body.style.background = "crimson";
    } else {
      setmode("ligth");
      document.title = "Ligth Mode";
      document.body.style.background = "white";
    }
  };
  const thm3 = () => {
    if (
      mode === "ligth" ||
      mode === "success" ||
      mode === "dark" ||
      mode === "danger"
    ) {
      setmode("warning");
      document.title = "Yellow Mode";
      document.body.style.background = "gold";
    } else {
      setmode("ligth");
      document.title = "Ligth Mode";
      document.body.style.background = "white";
    }
  };

  return (
    <>
      {/* <About /> */}
      <Navbar
        title="Text Transform"
        mode={mode}
        togleMode={togleMode}
        thm={thm}
        thm2={thm2}
        thm3={thm3}
      />
      <Text mode={mode} />
    </>
  );
}
