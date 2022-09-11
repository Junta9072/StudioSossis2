let currentString;
let previousPass;
let projects = document.querySelectorAll(".project__container");

projects.forEach((item, i) => {
  console.log(item.style.gridArea);
  currentString = item.style.gridArea;
  previousPass = currentString.indexOf("span 1");
  console.log(currentString.indexOf("span 1", previousPass + 6));
  if (currentString.indexOf("span 1", previousPass + 6) != -1) {
    item.style.color = "transparent";
  }
});
