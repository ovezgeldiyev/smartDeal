var menu = document.getElementById("menu");
if (menu) {
  var menuBtn = document.getElementById("menuBtn");
  var body = document.body;
  menuBtn.onclick = function () {
    menu.classList.toggle("active");
    menuBtn.classList.toggle("active");
    body.classList.toggle("active");
  };
  window.onclick = function (event) {
    if (event.target == menu) {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("active");
    }
  };
}

// scroll start
let header = document.getElementById("header");
if (header) {
  function scrollFunc() {
    if (window.scrollY >= 60) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
  const links = document.querySelectorAll(".links");
  const sections = document.querySelectorAll(".anchor");
  function changeLinkState() {
    let index = sections.length;
    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    links.forEach((link) => link.classList.remove("active"));
    links[index]?.classList.add("active");
  }
  links.forEach((e) => {
    onLinkClick(e);
  });
  function onLinkClick(linkItem) {
    linkItem.addEventListener("click", function () {
      menu.classList.remove("active");
      menuBtn.classList.remove("active");
      body.classList.remove("active");
    });
  }
  window.onscroll = function () {
    changeLinkState();
    scrollFunc();
  };
}

const about = document.getElementById("about");
if (about) {
  // showMore start
  const showMoreBtns = document.querySelectorAll(".showMoreBtn");
  showMoreBtns.forEach((showMoreBtn) => {
    showMoreBtn.onclick = () => {
      const parentElement = showMoreBtn.parentNode;
      const showMore = parentElement.querySelector(".showMore");
      showMore.classList.toggle("active");
      showMoreBtn.classList.toggle("active");
    };
  });
  // showMore end
}

const video = document.getElementById("video");

if (video) {
  var playButton = document.getElementById("play");
  var banner = document.getElementById("banner");

  playButton.addEventListener("click", function () {
    if (video.paused == true) {
      video.play();

      playButton.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playButton.classList.remove("active");
      banner.classList.remove("active");
    }
  });

  video.onclick = function () {
    if (video.paused == true) {
      video.play();

      playButton.classList.toggle("active");
      banner.classList.toggle("active");
    } else {
      video.pause();

      playButton.classList.remove("active");
      banner.classList.remove("active");
    }
  };
}
