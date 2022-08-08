const modalBtnOpen = $(".present__btn");
const modalBtnClose = $(".modal-order__close");
const modalOrder = $(".modal-order");
const modalOrderInput = $(".modal-order__input");
const modalOrderTitle = $(".modal-order__title");

const menuBtnOpen = $(".header__burger");
const menuBtnClose = $(".navigation__close");
const menu = $(".navigation");
const page = $("body");

page.on("click", function (e) {
    if (menu.offset().left === 0) {

        if (e.target.closest('.navigation__close') || 
        !e.target.closest('.navigation')) {
            menu.animate({
                left: -400 + 'px'
            }, 500, function () {
                menuBtnClose.animate({
                  opacity: 0,
                }, 300, "swing");
            });
        }
    }
});

menuBtnOpen.on("click", function () {
    menu.animate({
        left: 0,
    }, 500, function () {
        menuBtnClose.animate({
          opacity: 1,
        }, 300, "swing");
    });
});




modalBtnOpen.on("click", function () {
  modalOrder.show(500);
});

modalBtnClose.on("click", function () {
  modalOrder.hide(500);
});

modalOrderInput.focus(function () {
  modalOrderTitle.text(`Введите ${$(this).attr("placeholder").toLowerCase()}`);
});

modalOrderInput.blur(function () {
  modalOrderTitle.text("Заполните форму");
});

const foo = function () {
    $(this).next().toggleClass('active');
    $(this).next().slideDown();
};

$(".characteristics__title").on("click", foo);


$(".modal-order__form").submit(function (e) {
  e.preventDefault();
  // $.post('https://jsonplaceholder.typicode.com/todos', $(this).serialize())

  // .then(function(data) {
  //     console.log(data)
  //     return data;
  // })
  // .then(function(request) {
  //     console.log(request)
  // })
  // .catch(function(err) {
  //     console.lof(err.status)
  // });

  $.ajax({
    url: "https://jsonplaceholder.typicode.com/todos",
    type: "POST",
    data: $(this).serialize(),
    success(data) {
      modalOrderTitle.text(`Спасибо заявка принята, номер заявки - ${data.id}`);
      $(".modal-order__form").slideUp(300);
    },
    error() {
      modalOrderTitle.text(`Что-то пошло не так, попробуйте еще раз!`);
    },
  });
});

// modalOrderInput.keydown(function(event) {
// });

// modalOrderInput.keypress(function(event) {
// });

// modalOrderInput.keyup(function(event) {
// });

// modalOrderInput.mouseleave(function(event) {
// });

// modalOrderInput.on('input', function(event) {
// });
