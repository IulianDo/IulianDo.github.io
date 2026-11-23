import { useState, useEffect } from 'react';

function Index(props) {

  function switchStyle() {
    var currentStyle = document.getElementById("stylesheet").getAttribute("href");
    var newStyle = currentStyle === "style_dark.css" ? "style_light.css" : "style_dark.css";
    document.getElementById("stylesheet").setAttribute("href", newStyle);
    localStorage.setItem("selectedStyle", newStyle); // Save the style in local storage
  }

  return (
    <>
      <header>
        <h1>Welcome to Iulian's website</h1>
        <p>This website is here to tell you more about me and why you should hire me</p>
        <button onClick={switchStyle}>Switch Style</button>
      </header>
      <section style={{ right:"20px",
            left:"20px",
            top:"200px",
            bottom:"20px",
            textAlign: "center"}}>
        <h2>
            Please select what you would like to be shown.
        </h2>
        <ul style={{ listStyleType: "none", padding: "0px", textAlign: "center" }}>
          <li><button onClick={() => props.setPageNum(2)}>Break Down</button></li>
          <li><a href="https://nova-i3.itch.io" target="_blank"><button> My Games</button></a></li>
          <li><a href="CV.pdf" target="_blank"><button>My CV</button></a></li>
          <li><a href="https://uk.linkedin.com/in/iulian-dogarescu-b8584a194" target="_blank"><button>LinkedIn</button></a></li>
        </ul>
      </section>
    </>
  )
}

export default Index
