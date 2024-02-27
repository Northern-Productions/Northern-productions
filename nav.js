const nav = document.querySelectorAll(".nav-button");
const websites = document.getElementById("websites");
const about = document.getElementById("about-ctn");
const contact = document.getElementById("contact-ctn");

nav.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "websites-btn") {
      websites.style.display = "block";
      about.style.display = "none";
      contact.style.display = "none";
    } else if (button.id === "about-btn") {
      websites.style.display = "none";
      about.style.display = "block";
      contact.style.display = "none";
    } else if (button.id === "contact-btn") {
      websites.style.display = "none";
      about.style.display = "none";
      contact.style.display = "block";
    }
  });
});
