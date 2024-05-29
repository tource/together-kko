window.addEventListener("load", function () {
  const menuButton = document.querySelector(".navi-menu");
  const headerMenu = document.querySelector(".header-menu");
  const headerMenubg = document.querySelector(".menu-bg");

  let menuOpen = false;

  menuButton.addEventListener("click", function () {
    menuOpen = !menuOpen;
    headerMenu.classList.toggle("open");
    headerMenubg.classList.toggle("open");

    if (menuOpen === true) {
    } else {
    }
    console.log(menuOpen);
  });

  headerMenubg.addEventListener("click", function () {
    menuOpen = false;
    headerMenu.classList.remove("open");
    headerMenubg.classList.remove("open");
  });
});
