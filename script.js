
// スライダー
$('.slider').slick({
  autoplay:false,
  autoplaySpeed:5000,
  dots:true,
  dotsClass: 'slick-dots',
  slidesToShow:1,
  arrows: true,

  //レスポンシブでの動作を指定
  responsive: [{
    breakpoint: 769,  //ブレイクポイントを指定
    settings: {
      slidesToShow: 1,
    }
  }]
});


// ハンバーガーメニュー
$(function(){
  $('.h-drawer').on('click',function(){
    $('.h-nav').addClass("open");
    $('.h-drawer-close').fadeIn();
    $('body').addClass('open');
  });
});

$(function(){
  $('.h-drawer-close').on('click',function(){
    $('.h-nav').removeClass("open");
    $(this).fadeOut();
    $('body').removeClass('open');
  });
});

$(function(){
  $('.h-nav > ul > a').on('click',function(){
    $('.h-nav').removeClass("open");
    $('.h-drawer-close').fadeOut();
    $('body').removeClass('open');
  });
});

// リンクのスムーススクロール
$(function(){
  $('a[href^="#profile"],a[href^="#service"],a[href^="#portfolio"],a[href^="#contact"]').click(function(){
    var headerHight = 0;
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top -headerHight;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// ページトップに戻るボタン
$(function(){
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 100) {
      $('.arrow-container').fadeIn();
    } else {
      $('.arrow-container').fadeOut();
    }
  });

  $('.arrow-container').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

// アコーディオン
$(function(){
  $('.port-h4').on('click',function(){
    $(this).toggleClass("is-active");
    $(this).next('.port-link').slideToggle();
  });
});