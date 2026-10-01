const text = document.querySelector('.text');


const images = document.querySelectorAll('.gallery > img');

images.forEach((image, index, array) => {
  image.addEventListener('mouseover', (e) => {
    text.textContent = e.target.alt;

    e.target.animate(
      {
        opacity: [0, 1]
      },
      500
    );
  }, false);
});
