const start_btn = document.querySelector('#start');
const stop_btn = document.querySelector('#stop');

// generate random color
const randomlist = '0123456789ABCDEF'; //16 Values range from 0-9 and A-F
let defaultvalue = '#212121';
function generateRandomColorvalue() {
  let randomColor = '#';
  for (let i = 0; i < 6; i++) {
    randomColor += randomlist[Math.floor(Math.random() * 16)];
  }
  return randomColor;
}
let interval;
let startchangingcolor = function () {
  if (!interval) {
    interval = setInterval(() => {
      document.body.style.backgroundColor = generateRandomColorvalue();
    }, 1000);
  }
};
let stopchangingcolor = function () {
  clearInterval(interval);
  // document.body.style.backgroundColor =defaultvalue
  interval = null;
};
start_btn.addEventListener('click', startchangingcolor);
stop_btn.addEventListener('click', stopchangingcolor);
