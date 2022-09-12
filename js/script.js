const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      btnsClose = document.querySelectorAll('.menu__anim');


hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
    
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

btnsClose.forEach(item => item.addEventListener('click', () => {
    menu.classList.remove('active');
}));


function validateForms(form) {
    $(form).validate({
      rules: {
        name: "required",
        email: {
          required: true,
          email: true,
        },
        text: {
            required: true, 
        },
        check: {
            required: true,
        },
      },
      messages: {
        name: {
          required: "Please tell me your name",
          minlength: jQuery.validator.format("Required {0} symbols!"),
        },
        email: {
          required: "Please tell me your email",
          email: "Wrong email format",
        },
        text: {
            required: "Please tell me some information"
        },
        check: {
            required: "I need your aproval to continue"
        }
      },
    });
  }

  validateForms("#contact-form");


  // $("form").submit(function (e) {
  //   e.preventDefault();
  //   if (!$(this).valid()) {
  //     return;
  //   }
  //   $.ajax({
  //     type: "POST",
  //     url: "php/smart.php",
  //     data: $(this).serialize(),
  //   }).done(function () {
  //     $(this).find("input").val("");
  //     $('.thankyou').addClass('.thankyou__active');
  //     $("form").trigger("reset");
  //   });
  //   return false;
  // });