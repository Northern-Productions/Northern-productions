import { contact } from "./data.js";

const contactContainer = document.getElementById("contact-ctn");

function addContact(data) {
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact");
  contactDiv.innerHTML = `
    <h3 tabindex="0">${data.title}</h3>
    <p tabindex="0">${data.description}</p>
    <p tabindex="0">Email: ${data.email}</p>
  `;
  contactContainer.appendChild(contactDiv);
}

addContact(contact);
