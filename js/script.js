
const juices = [
  {
    name: 'イチゴ',
    img: 'strawberry.jpg',
    price: 450
  },
  {
    name: 'ライム',
    img: 'lime.jpg',
    price: 400
  },
  {
    name: 'マンゴー',
    img: 'mango.jpg',
    price: 500
  },
  {
    name: 'レモン',
    img: 'lemon.jpg',
    price: 400
  },
  {
    name: 'イチジク',
    img: 'fig.jpg',
    price: 500
  },
  {
    name: 'リンゴ',
    img: 'apple.jpg',
    price: 400
  }
];


const menu = document.querySelector('.menu');


juices.forEach((juice, index, array) => {
  const { name, img, price } = juice;

  const content =
   `<div class="menu__item">
      <img class="menu__itemImage" src="./images/${img}" alt="">

      <p class="menu__itemName">${name}</p>

      <p class="menu__itemPrice">${price}円</p>
    </div>`;

  menu.insertAdjacentHTML('beforeend', content);
});
