$(function () {
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    blockId = $(this).data('scroll');
    blockOffset = $(blockId).offset().top;

    $("html, body").animate({
      scrollTop: blockOffset - 50
    }, 700);

  });

// Функция плавного скролла к нужному блоку с помошью data-scroll="#..."



  $("[data-modal]").on("click", function (event) {
    event.preventDefault();

    $(modal__resume).addClass('show');
  });

  $(modal__resume).on('click', function () {
    $(modal__resume).removeClass('show');
  });


});

// Функцыя присвоения и отзыва класса "show" для открытия и закрытия модального окна при клике