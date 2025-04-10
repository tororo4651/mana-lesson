const loading = document.getElementById('loading');
const loadingText = document.querySelector('#loading p');

const keyframes = {
  opacity: [1, 0]
};

window.addEventListener('load', (e) => {

  loadingText.animate(
    {
      opacity: [1, 0],
      offset: [0.8, 1]
    },
    {
      duration: 2000,
      // easing: 'ease',
      fill: 'forwards'
    }
  );


  // loading.animate(
  //   {
  //     backgroundColor: ['rgba(238, 221, 136, 1)', 'rgba(238, 221, 136, 0)'],
  //     backdropFilter: ['blur(10px)', 'blur(0)'],
  //     visibility: 'hidden'
  //   },
  //   {
  //     duration: 2000,
  //     delay: 1200,
  //     easing: 'ease',
  //     fill: 'forwards'
  //   }
  // );

}, false);
