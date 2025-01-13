const slideLeft = (entries, obs) => {
  entries.forEach((entry, index, array) => {

    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.animate(
        {
          translate: ['100% 0', 0]
        },
        1000
      );

      obs.unobserve(entry.target);
    }
  });
};


const slideLeftObserver = new IntersectionObserver(slideLeft);


const images = document.querySelectorAll('img');

images.forEach((image, index, array) => {
  slideLeftObserver.observe(image);
});
