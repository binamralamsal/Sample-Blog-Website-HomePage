checkbox = document.getElementById("chk");
sidebar = document.getElementById("sidebar");
body = document.getElementById("root");
p_tag = document.getElementsByTagName("p");
desktop_nav = document.getElementById("nav-desktop");
mobile_nav = document.getElementById("nav-mobile");
input_tag = document.getElementsByTagName("input");
post_block = document.getElementsByClassName("post-block-details");

const checkforTags = (classList) => {
  for (var i = 0; i < classList.length; i++) {
    if (classList[i] === "prevent-light") {
      return false;
    }
  }
  return true;
};

const changeMode = () => {
  body.classList.toggle("light");
  sidebar.classList.toggle("light");
  desktop_nav.classList.toggle("light");
  mobile_nav.classList.toggle("light");

  for (var i = 0; i < p_tag.length; i++) {
    if (checkforTags(p_tag[i].classList)) {
      p_tag[i].classList.toggle("text-light");
    }
  }

  for (var i = 0; i < input_tag.length; i++) {
    input_tag[i].classList.toggle("light");
  }

  for (var i = 0; i < post_block.length; i++) {
    post_block[i].classList.toggle("light");
  }
};

if (!localStorage.getItem("mode")) {
  localStorage.setItem("mode", "night");
}

if (localStorage.getItem("mode") == "light") {
  changeMode();

  checkbox.checked = false;
}

checkbox.addEventListener("click", () => {
  localStorage.setItem(
    "mode",
    localStorage.getItem("mode") === "night" ? "light" : "night"
  );

  changeMode();
});
