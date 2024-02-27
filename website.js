import { websites } from "./data.js";

const websiteContainer = document.getElementById("website-ctn");

function addWebsite(website) {
  const websiteDiv = document.createElement("div");
  websiteDiv.classList.add("website");
  websiteDiv.innerHTML = `
    <div class="site-img">
      <img tabindex="0" class="website-img" src="${website.img}" alt="${website.imgAlt}">
    </div>
    <div class="site-text">
      <h3 tabindex="0">${website.name}</h3>
      <p tabindex="0">${website.description}</p>
      <a tabindex="0" target="_blank" rel="noopener" href="${website.url}">View website</a>
    </div>
  `;
  websiteContainer.appendChild(websiteDiv);

  const hr = document.createElement("hr");
  hr.classList.add("hr-spacer");
  websiteContainer.appendChild(hr);
}

websites.forEach((website) => {
  addWebsite(website);
});
