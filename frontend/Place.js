let beachImages = document.querySelectorAll(".bch-img");

beachImages.forEach((item) => {
  item.addEventListener("mouseover", () =>
    item.querySelector(".beach-name").style.display = "block"
  );

  item.addEventListener("mouseout", () =>
    item.querySelector(".beach-name").style.display = "none"
  );
});

let NatureImages = document.querySelectorAll(".fall-img");

NatureImages.forEach((item) => {
  item.addEventListener("mouseover", () =>
    item.querySelector(".beach-name").style.display = "block"
  );

  item.addEventListener("mouseout", () =>
    item.querySelector(".beach-name").style.display = "none"
  );
});