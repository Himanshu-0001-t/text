import React, { useState } from "react";
// import "../index.css";

export default function Text(props) {
  const [text, settext] = useState("");

  const handelchange = (event) => {
    settext(event.target.value);
  };
  return (
    <div className="text h-1">
      <div className="container  h-100">
        <div>
          <h2
            className={`py-2 text-${props.mode === "ligth"
              ? "dark"
              : props.mode === "warning"
                ? "dark"
                : "white"
              } `}
          >
            Enter Your Text 👇{" "}
          </h2>
          <textarea
            className={`bg-${props.mode === "ligth" ? "white" : props.mode
              } text-${props.mode === "ligth"
                ? "dark"
                : props.mode === "warning"
                  ? "dark"
                  : "white"
              }`}
            id="area"
            value={text}
            onChange={handelchange}
            placeholder=" Start typing or copy paste your document here... "
          ></textarea>
        </div>
        <div>
          <button
            className={`btn mx-1 my1- btn-${props.mode === "ligth" ? "primary" : props.mode
              }`}
            onClick={() => {
              let newText = text.toUpperCase();
              settext(newText);
            }}
          >
            TO UPERCASE
          </button>
          <button
            className={`btn mx-1 my-1 btn-${props.mode === "ligth" ? "primary" : props.mode
              }`}
            onClick={() => {
              let newText = text.toLowerCase();
              settext(newText);
            }}
          >
            TO LOWERCASE
          </button>
          <button
            className={`btn mx-1 my-1 btn-${props.mode === "ligth" ? "primary" : props.mode
              }`}
            onClick={() => {
              let newText = text.split(/[ ] +/);
              settext(newText.join(" "));
            }}
          >
            REMOVE EXTRA SPACE
          </button>
          <button
            className={`btn mx-1 my-1 btn-${props.mode === "ligth" ? "primary" : props.mode
              }`}
            onClick={() => {
              settext("");
            }}
          >
            CLEAR TEXT
          </button>
          <button
            className={`btn mx-1 my-1 btn-${props.mode === "ligth" ? "primary" : props.mode
              }`}
            onClick={() => {
              let txt = document.getElementById("area");
              txt.select();
              navigator.clipboard.writeText(txt.value);
            }}
          >
            COPY TEXT
          </button>
        </div>
        <h5
          className={`my-2 my-1 text-${props.mode === "ligth"
            ? "dark"
            : props.mode === "warning"
              ? "dark"
              : "white"
            }`}
        >
          Your text have {text.split(" ").join("").length} character and  {" "}
          {text.split(/\s+/).filter((elm) => elm.length !== 0).length} {" "}
          Words
        </h5>
      </div>
    </div>
  );
}
