window.onload = function () {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const treeLogo = document.getElementById("tree-logo");
  const treeLogoCutout = document.getElementById("tree-logo-cutout");
  const textLogo = document.getElementById("text-logo");

  document.body.style.overflow = "hidden";

  //fade in tree logo
  setTimeout(function () {
    treeLogo.style.transition = "opacity 3s ease-in";
    treeLogo.style.opacity = 1;
  }, 200);
  //fade in text logo
  setTimeout(function () {
    textLogo.style.transition = "opacity 3s ease-in";
    textLogo.style.opacity = 1;
  }, 1500);
  //pulse tree logo cutout
  setTimeout(function () {
    treeLogoCutout.style.transform = "scale(1.05)";
    treeLogoCutout.style.transition =
      "opacity 0.2s ease-out, transform 0.1s ease-out";
    treeLogoCutout.style.opacity = 1;
  }, 4000);
  //fade out tree logo cutout
  setTimeout(function () {
    treeLogoCutout.style.background =
      "radial-gradient(circle at center, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))";
    treeLogoCutout.style.transform = "scale(1.2)";
    treeLogoCutout.style.transition =
      "opacity 2s ease-in-out, transform 2s ease-out";
    treeLogoCutout.style.opacity = 0;
  }, 4100);
  //fade out loading screen to main content
  setTimeout(function () {
    loadingScreen.style.transition = "opacity 1s ease-in-out";
    loadingScreen.style.opacity = 0;
    mainContent.style.transition = "opacity 2s ease-in-out";
    mainContent.style.opacity = 1;
  }, 5500);
  setTimeout(function () {
    loadingScreen.style.display = "none";
    document.body.style.overflow = "auto";
  }, 6500);
};
