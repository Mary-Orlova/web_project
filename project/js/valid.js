document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.order__form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7(999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
        rule: 'required',
        errorMessage: "Вы не ввели имя"
      },

      {
        rule: 'minLength',
        value: 3,
        errorMessage: "Не достаточное количество символов в строке имя"
      },

      {
        rule: 'maxLength',
        value: 20,
        errorMessage: "Вы ввели больше чем положено (поле имя)"
      }
    ])

    .addField('.tel', [{
        rule: 'required',
        errorMessage: "Вы не ввели телефон"
      },

      {
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Не достаточное количество символов в строке телефон',
    }])

    .addField('.mail', [{
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Вы не корректно ввели email',
      }
    ]);
})
