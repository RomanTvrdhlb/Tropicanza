const countDownDate = new Date("Oct 25, 2023 23:37:25").getTime();
const item = document.querySelector('.timer .timer__value');

function formatedValue(value, countValue) {
    return value < countValue ? '0' + value : '' + value
}

const x = setInterval(function() {

  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  item.innerHTML = formatedValue(days,10) + " " + formatedValue(hours,10) + " "
  + formatedValue(minutes, 10)  + " " + formatedValue(seconds, 10) + " ";

  if (distance < 0) {
    clearInterval(x);
    item.innerHTML = "EXPIRED";
  }
}, 1000);