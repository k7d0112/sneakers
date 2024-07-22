$(function () {
  /*=================================================
  ハンバーガーメニュー
  ===================================================*/
  $(".hamburger").click(function () {
    $(".hamburger").toggleClass("is-active");
    $(".header__nav").toggleClass("is-active");
    $(".header__mask").toggleClass("is-active");
  })

  $(".header__mask,.header__nav-link,.header__sns-link").click(function (){
    $(this).removeClass("is-active");
    $('.header__mask').removeClass('is-active');
    $(".hamburger").removeClass("is-active");
    $(".header__nav").removeClass("is-active");
  })

  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').click(function() {
    let href = $(this).attr('href');
    let target = $(href === '#' || href === '' ? 'html' : href);
    let position = target.offset().top - 110;
    $('body,html').animate({ scrollTop:position },500,'swing');
    return false;
  });

  /*=================================================
  PICK UP スライダー
  ===================================================*/
  // カルーセル用 jQueryプラグイン「slick」の設定
  // マニュアル：https://kenwheeler.github.io/slick/
  $(".pickup__slides").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

  /*=================================================
  スクロール時の画像フェード表示
  ===================================================*/
  // スクロール時のイベント
  $(window).scroll(function () {
    // fadeinクラスに対して順に処理を行う
    $(".fadein").each(function () {
      // スクロールした距離
      let scroll = $(window).scrollTop();
      // fadeinクラスの要素までの距離
      let target = $(this).offset().top;
      // 画面の高さ
      let windowHeight = $(window).height();
      // fadeinクラスの要素が画面下にきてから200px通過した
      // したタイミングで要素を表示
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });


});