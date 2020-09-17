/* addEvent('input[name=name]');
addEvent('input[name=email]');
addEvent('input[name=phone]');
addEvent('input[name=selector]')
    addEvent('input[name=eventAnswer]')
    addEvent('input[name=suggestion]')

function addEvent(className) {
    document.querySelector(className).addEventListener('click', (e) => {
        console.log();
        e.preventDefault();
        if (name.value === '') {
            console.log('沒有填寫資訊');
            console.log(name.value);
        } else {
            console.log('有填寫');
        }
        // console.log(className);
    });
}
 */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('submit');
  const nickName = document.querySelector('input[name]');

  const mail = document.querySelector('input[name=email]');

  const phone = document.querySelector('input[name=phone]');
  const event = document.querySelector('input[name=eventAnswer]');
  const suggestion = document.querySelector('input[name= suggestion]');
  const radio = document.querySelectorAll('.inputRadio');
  console.log(radio);

  const warn = document.getElementsByTagName('span')[0];
  const input = document.getElementsByTagName('input')[0];

  form.addEventListener('submit', (e) => {
    // console.log(warn);

    e.preventDefault();

    if (nickName.value === '' || mail.value === '' || phone.value === '' || event.value === '' || suggestion.value === '') {
      // 出現警告
      warn.classList.add('active');
      input.classList.add('warn');
      mail.classList.add('warn');
      phone.classList.add('warn');
      event.classList.add('warn');
      suggestion.classList.add('warn');
      console.log('沒有填寫資訊');
      // console.log(nickName.value);
    } else {
      console.log('有填寫');
      warn.classList.remove('active');
      input.classList.remove('warn');
      mail.classList.remove('warn');
      phone.classList.remove('warn');
      event.classList.remove('warn');
      suggestion.classList.remove('warn');
    }
  });


  // 讀取radio選取

  /* radio.addEventListener('click', getRadio);

  function getRadio() {
    for (let i = 0; i < radio.length; i += 1) {
      console.log(radio[i].value);
    }
  }
  getRadio(); */
});
