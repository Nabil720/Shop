const links = document.getElementsByClassName("arrival-active-link");

for (let i = 0; i < links.length; i++) {
  links[i].classList.add("cursor-pointer");
  links[i].addEventListener("click", function () {
    for (let j = 0; j < links.length; j++) {
      links[j].classList.remove("category-active");
    }
    this.classList.add("category-active");
  });
}

links[0].classList.add("category-active");
