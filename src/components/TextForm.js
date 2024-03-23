import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success")
  };
  const handleLowClick = () => {
    console.log("handleLowClick clicked");
    let lowtext = text.toLowerCase();
    setText(lowtext);
    props.showAlert("Converted to LowerCase","success")
  };
  const handleClearClick = () => {
    console.log("handleClearClick clicked");
    let new_Text = "";
    setText(new_Text);
    props.showAlert("Cleared Text","success")
  };
  const handleCopy = () => {
    var content = document.getElementById("myBox");
    // because the textArea is having id = myBox
    content.select();
    navigator.clipboard.writeText(content.value);
    props.showAlert("Copied Text to ClipBoard","success")
  };
  const handleExtSpaces = () => {
    let newText = text.split(/[ ]+/); // split where is one or more spaces
    // used rajax
    setText(newText.join(" ")); // then join them with one space
    props.showAlert("Removed Extra space","success")
  };
  const handleCapital=()=>{
    let lower = text.toLowerCase();
    lower = lower.charAt(0).toUpperCase() + lower.slice(1);
    setText(lower);
    props.showAlert("Capitalized First Letter","success")
  }

  const handleOnChange = (event) => {
    console.log("onChange was clicked");
    setText(event.target.value); // this changes the content of textbox which I will be writing in textbox
  };

  // hook - useState
  const [text, setText] = useState("Enter text here");
  //setText("new text");  // for updating variable text
  // {text} is value of variable text
  return (
    <>
      <div className="container" style={{backgroundColor: props.mode === 'light'?'white':'#453232',color: props.mode==='light'?'black':'white' }}>
        {/* background and text color of this container element changes based on value of mode by the above style attribute */}
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text} // this will set the value of text in textbox
            onChange={handleOnChange} // this allow us to change textbox content which I had set {text}
            id="myBox"
            rows="4"
            style={{backgroundColor: props.mode === 'light'?'white':'#2e1e1e',color: props.mode==='light'?'black':'white' }}
            placeholder="Ahsan Type text here" // this will just show this phrase when nothing is written in textbox
          ></textarea>
        </div>

        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCapital}>
          Capitalize First Letter
        </button>
      </div>
      <div className="container my-3" style={{backgroundColor: props.mode === 'light'?'white':'#453232',color: props.mode==='light'?'black':'white' }}>
        {" "}
        {/* my- 3 or mx-3 makes space in y and x direction respectedly -> this is from Bootstrap*/}
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters and{" "}
          {text.split(".").length - 1} sentences in your text
        </p>
        <p>
          {0.008 * text.split(" ").length} Minutes Time required by You to Read
          Above text{" "}
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in above textbox to preview here"}</p>
      </div>
    </>
  );
}
