const textarea = document.querySelector('textarea');
const count = document.querySelector('.count');

textarea.addEventListener('input', function(e) {
  count.textContent = this.value.length;

  if (this.value.length > 100) {
    count.classList.add('is-warning');
  } else {
    count.classList.remove('is-warning');
  }
}, false);
