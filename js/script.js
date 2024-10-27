const slideLeft = (entries, obs) => {

  for (let i = 0; i < entries.length; i++) {
    if (entries[i].isIntersecting) {
      entries[i].target.animate(
        {
          translate: [0, '100%']
        },
        {
          duration: 2000,
          pseudoElement: '::after',
          easing: 'ease',
          fill: 'forwards'
        }
      );

      obs.unobserve(entries[i].target);
    }
  }



  // entries.forEach((entry, index, array) => {
  //   // console.log(entry);
  //   if (entry.isIntersecting) {
  //     entry.target.animate(
  //       {
  //         translate: [0, '100%']
  //       },
  //       {
  //         duration: 2000,
  //         pseudoElement: '::after',
  //         easing: 'ease',
  //         fill: 'forwards'
  //       }
  //     );

  //     obs.unobserve(entry.target);
  //   }
  // });

};


const slideLeftObserver = new IntersectionObserver(slideLeft);


const slideLeftElements = document.getElementsByClassName('scroll');

for (let i = 0; i < slideLeftElements.length; i++) {
  slideLeftObserver.observe(slideLeftElements[i]);
}


// slideLeftElements.forEach((slideLeftElement, index, array) => {
//   slideLeftObserver.observe(slideLeftElement);
// });
