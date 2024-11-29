const bar = document.getElementById('bar');


const getScrollPercentage = (e) => {
  const pageHeight = document.documentElement.scrollHeight;
  const viewHeight = document.documentElement.clientHeight;
  const scrolled = window.scrollY;

  bar.style.width = `${scrolled / (pageHeight - viewHeight) * 100}%`;
};


window.addEventListener('scroll', getScrollPercentage, false);
