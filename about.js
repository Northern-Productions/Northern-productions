import { aboutMe } from "./data.js";

const aboutContainer = document.getElementById("about-ctn");

function addAbout(about) {
  const aboutDiv = document.createElement("div");
  aboutDiv.classList.add("about");
  aboutDiv.innerHTML = `
    <h3 tabindex="0">${about.title}</h3>
    <p tabindex="0">${about.description}</p>
  `;
  aboutContainer.appendChild(aboutDiv);
}

addAbout(aboutMe);
