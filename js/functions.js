$(document).ready(function () {
  //etiqueta imagen como background en cada section 
  $("section").each(function () {
    var bgImgItemSlider = $(this).find("img.bg").attr("src");
    $(this).css({
      "background-image": "url(" + bgImgItemSlider + ")",
      "background-attachment": "fixed",
      "background-position": "center",
      "background-size": "cover"
    });
  });
  //background opacity
  var op = "<div class='op'></div>"
  $("img.bg").after(op);
  $(".op").css({
    "background": "rgba(51, 0, 102,.4)",
    "position": "absolute",
    "z-index": "0",
    "width": "100%",
    "height": "100%",
    "top": "0"
  });
  //links con scroll animado 
  $("a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    }
  });
  //busqueda avanzada
  $(".help-block").on('click', function () {
    $(this).find("span").toggleClass('fa-angle-up');
    $(this).find("span").toggleClass('fa-angle-down');
  });
  //pagination 
  var w = $(window).width();
  if (w < 780) {
    pageSize = 1;
  } else {
    pageSize = 8;
  }
  pagesCount = $(".album").length;
  var currentPage = 1;
  var nav = '';
  var totalPages = Math.ceil(pagesCount / pageSize);
  for (var s = 0; s < totalPages; s++) {
    nav += '<li class="numeros"><a href="javascript:void(0);">' + (s + 1) + '</a></li>';
  }
  $(".pag_prev").after(nav);
  $(".numeros").first().addClass("active");
  showPage = function () {
    $(".album").hide().each(function (n) {
      if (n >= pageSize * (currentPage - 1) && n < pageSize * currentPage)
        $(this).show();
    });
  }
  showPage();
  $(".pagination li.numeros").click(function () {
    $(".pagination li").removeClass("active");
    $(this).addClass("active");
    currentPage = parseInt($(this).text());
    showPage();
  });
  $(".pagination li.pag_prev").click(function () {
    if ($(this).next().is('.active')) return;
    $('.numeros.active').removeClass('active').prev().addClass('active');
    currentPage = currentPage > 1 ? (currentPage - 1) : 1;
    showPage();
  });
  $(".pagination li.pag_next").click(function () {
    if ($(this).prev().is('.active')) return;
    $('.numeros.active').removeClass('active').next().addClass('active');
    currentPage = currentPage < totalPages ? (currentPage + 1) : totalPages;
    showPage();
  });
});
//mostrar texto seleccionado en dropdown 
$(".dropdown-menu li a").click(function () {
  var selText = $(this).text();
  $(this).parents('.dropdown').find('.dropdown-toggle').html(selText + '<span class="caret pull-right"></span>');
});
//mixitup 
$(function () {
  var containerEl = document.querySelector('.content');
  var mixer = mixitup(containerEl);
});

//header scroll morfosis
$(function () {
  $('header').data('size', 'big');
});
$(window).scroll(function () {
  if ($(document).scrollTop() > 300) {
    if ($('header').data('size') == 'big') {
      $('header').data('size', 'small');
      $('header').addClass('small');
    }
  } else {
    if ($('header').data('size') == 'small') {
      $('header').data('size', 'big');
      $('header').removeClass('small');
    }
  }
});
$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });
});