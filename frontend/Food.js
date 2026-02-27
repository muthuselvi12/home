let pics = document.querySelectorAll(".pic");

pics.forEach((item) => {

  item.addEventListener("mouseover", () => {
    item.querySelector(".place-name").style.display = "block";
  });

  item.addEventListener("mouseout", () => {
    item.querySelector(".place-name").style.display = "none";
  });

});