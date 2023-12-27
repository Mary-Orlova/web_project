const button1 = document.querySelector('#button1');
const button2 = document.querySelector('#button2');
const button3 = document.querySelector('#button3');
// коллекция тултипов
const triggers1 = document.querySelectorAll(".tooltip1");
const triggers2 = document.querySelectorAll(".tooltip2");
const triggers3 = document.querySelectorAll(".tooltip3");

Popper.createPopper(button1, tooltip1, {
    placement: 'top',
  });


  Popper.createPopper(button2, tooltip2, {
    placement: 'top',
  });

  Popper.createPopper(button3, tooltip3, {
    placement: 'top',
  });
