//open project js
document.querySelectorAll(".project__container").forEach((item, i) => {
  item.addEventListener("click", () => {
    console.log(item.classList[0]);
    console.log(document.querySelector(".article." + item.classList[0] + ""));

    let clickCover = document.querySelector(".clickCover");
    clickCover.style.display = "block";
    clickCover.addEventListener("click", () => {
      clickCover.style.display = "none";
      document.querySelector(
        ".article." + item.classList[0] + ""
      ).style.display = "none";
    });

    document.querySelector(".article." + item.classList[0] + "").style.display =
      "block";
  });
});

//filter tags js
let tags = document.querySelectorAll(".tag__icon");
let projects = [...document.querySelectorAll(".project__container")];
let projectsNode = document.querySelectorAll(".project__container");
let filterValue = [];
let currentValue = null;
let tagArray = [];

console.log(projects);

tags.forEach((item, i) => {
  item.addEventListener("click", () => {
    console.log(item.getAttribute("value"));
    //push of pull toggle
    if (item.getAttribute("status") == "inactive") {
      item.setAttribute("status", "active");
      filterValue.push(item.getAttribute("value"));
      item.classList.toggle("tag__icon--active");
    } else {
      item.setAttribute("status", "inactive");
      filterValue.splice(filterValue.indexOf(item));
      item.classList.toggle("tag__icon--active");
    }

    //css filter application
    if (filterValue.length == 0) {
      projectsNode.forEach((item, i) => {
        item.style.filter = "grayscale(0)";
      });
    } else if (true) {
      projectsNode.forEach((item, i) => {
        item.style.filter = "grayscale(1)";
      });
    }

    filterValue.forEach((value, v) => {
      currentValue = value;
      projects.filter(filterProjects);
    });
  });
});

function filterProjects(project) {
  tagArray = project.attributes[1].textContent.split(" ");
  tagArray.forEach((tag, t) => {
    if (tag == currentValue) {
      project.style.filter = "grayscale(0)";
    }
  });
}
