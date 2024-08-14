const heading = document.querySelector('#heading');

const keyframes = {
  backgroundPosition: ['right top', 'left top'],
  color: ['rgb(255 255 255 / 0%)', 'rgb(255 255 255 / 100%)']
};

const options = {
  duration: 1000,
  easing: 'ease',
  fill: 'forwards'
};


heading.animate(keyframes, options);
