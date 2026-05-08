const textarea = document.querySelector('textarea');
const count = document.getElementById('count');

textarea.addEventListener('keyup', function(e) {
  count.textContent = this.value.length;

  if (this.value.length > 100) {
    count.classList.add('warning');
  } else {
    count.classList.remove('warning');
  }
}, false);
