const texts = document.getElementsByClassName('text');

const images = document.getElementsByTagName('img');
const images2 = document.querySelectorAll('img');


images.forEach((image, index, array) => {
  image.addEventListener('mouseover', function() {
    texts[0].innerText = this.alt;

    this.animate(
      {
        opacity: [0, 1]
      },
      {
        duration: 500
      }
    );
  }, false);
});
