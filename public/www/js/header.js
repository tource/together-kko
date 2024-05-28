window.addEventListener("load", function () {
  // 헤더에 라인의 CSS 적용
  const header = document.querySelector(".header");
  const headerActiveClass = "line-active";
  const headerActiveValue = 0;

  function updateHeaderClass() {
    if (window.scrollY > headerActiveValue) {
      header.classList.add(headerActiveClass);
    } else {
      header.classList.remove(headerActiveClass);
    }
  }

  updateHeaderClass();
  window.addEventListener("scroll", updateHeaderClass);

  // 모바일 메뉴 관련
  const mbBt = document.querySelector(".navi-menu");
  const mbBg = document.querySelector(".mb-header-bg");
  const mbMenu = document.querySelector(".mb-header-menu");
  const mbHeaderMenu = document.querySelector(".mb-header-menu");
  let mbMenuOpen = false;

  function toggleMobileMenu(event) {
    event.preventDefault();
    mbMenuOpen = !mbMenuOpen;
    mbBt.classList.toggle("mobile-menu-open", mbMenuOpen);
    mbBg.classList.toggle("mb-header-bg-show", mbMenuOpen);
    mbMenu.classList.toggle("mb-header-menu-show", mbMenuOpen);
  }

  function closeMobileMenuOnResize() {
    if (window.innerWidth > 1024 && mbMenuOpen) {
      mbMenuOpen = false;
      mbBt.classList.remove("mobile-menu-open");
      mbBg.classList.remove("mb-header-bg-show");
      mbMenu.classList.remove("mb-header-menu-show");
    }
  }

  mbBt.addEventListener("click", toggleMobileMenu);

  mbBg.addEventListener("click", toggleMobileMenu);

  window.addEventListener("resize", closeMobileMenuOnResize);
});
