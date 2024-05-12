window.addEventListener("load", function () {
  const dataUrl = "./apis/reviewslide.json";

  fetch(dataUrl)
    .then(response => {
      const data = response.json();
      return data;
    })
    .then(result => {
      let slideTags = "";
      for (let i = 0; i < result.length; i++) {
        const data = result[i];
        const test = `<div class="swiper-slide">
          <p class="mrb-review-2">
          ${data.title}
          </p>
          <p class="mrb-review-3">
          ${data.content}
          </p>
          </div>`;
        slideTags += test;
      }

      // 슬라이드
      const whereTag = document.querySelector(".reviewslide .swiper-wrapper");
      whereTag.innerHTML = slideTags;

      var reviewSlide = new Swiper(".reviewslide", {
        loop: true,
        speed: 1300,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      const slideArea = document.querySelector(".reviewslide");
      slideArea.addEventListener("mouseenter", function () {
        reviewSlide.autoplay.stop();
      });
      slideArea.addEventListener("mouseleave", function () {
        reviewSlide.autoplay.start();
      });
    });
});
