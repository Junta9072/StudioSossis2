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
