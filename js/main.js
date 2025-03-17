// 문서 준비 이벤트
$(function () {
  // aos 초기화
  AOS.init({
    duration: 2000,
    // once: true, // 스크롤 내렸을 때 한번만 실행, 위로 올린다고 해서 다시 실행X, 기본값은 false
  });

  // 배너 슬라이드 초기화
  const banner_list = new Swiper(".banner_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  });

  // 슬라이드 컨트롤 버튼
  $(".play").hide();
  // 일시정지 버튼을 클릭했을 때 슬라이드 자동재생이 멈추게
  $(".pause").click(function () {
    banner_list.autoplay.stop();
    $(".pause").hide();
    $(".play").show();
  });
  $(".play").click(function () {
    banner_list.autoplay.start();
    $(".play").hide();
    $(".pause").show();
  });

  // notice 슬라이드
  const notice_list = new Swiper(".notice_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    loop: true,
    direction: "vertical", // 세로 슬라이드 - 한정된 높이값이 들어가야 한다. // horizontal - 가로 슬라이드 - 기본값
  });

  // prd 슬라이드
  const prd_list = new Swiper(".prd_list", {
    autoplay: {
      delay: 3000, // 슬라이드가 머무르는 시간, 5000=5초
      disableOnInteraction: false, // 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 1000, // 슬라이드 동작 속도
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        // 가로해상도가 1200px 이상
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 200,
      draggable: true,
    },
  });

  // teaware tabMenu
  $(".tab_img a").hide();
  $(".tab_img a").eq(0).show();

  $(".tab_btn button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".tab_img a").eq(idx).fadeIn().siblings().hide();
  });

}); // 종료