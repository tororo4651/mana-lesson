const patterns = document.querySelectorAll('img');

patterns.forEach((pattern, index, array) =>{
  pattern.addEventListener('mouseover', (e) => {
    document.body.style.backgroundImage = `url(${e.target.src})`;

    pattern.animate(
      {
        opacity: [0, 1]
      },
      500
    );
  }, false);
});
