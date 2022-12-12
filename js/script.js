let links = document.getElementsByClassName("link");
let yellows = document.getElementsByClassName("active");
let nlinks = navlink();

function navlink() {
  for (let i = 0; i <= links.length; i++) {
    links[i].addEventListener("click", function (event) {
      var off = document.getElementsByClassName("active");
      off[0].className = off[0].className.replace("active", "");
      this.classList.add("active");
    });
  }
}
