const juices = [
  {
    name: 'イチゴ',
    image: 'strawberry.jpg',
    price: '450'
  },
  {
    name: 'ライム',
    image: 'lime.jpg',
    price: '400'
  },
  {
    name: 'マンゴー',
    image: 'mango.jpg',
    price: '500'
  },
  {
    name: 'レモン',
    image: 'lemon.jpg',
    price: '400'
  },
  {
    name: 'イチジク',
    image: 'fig.jpg',
    price: '500'
  },
  {
    name: 'リンゴ',
    image: 'apple.jpg',
    price: '400'
  }
];


const juiceList = document.querySelector('.juiceList');


juices.forEach((juice, index, array) => {

  const { name, image, price } = juice;

  const content =
   `<li class="juiceList__item juiceCard">
      <h2 class="juiceCard__heading">${name}</h2>

      <img class="juiceCard__image" src="images/${image}" alt="">

      <p class="juiceCard__price">${price}円</p>
    </li>`;

  juiceList.insertAdjacentHTML('beforeend', content);

  const juiceCards = document.querySelectorAll('.juiceCard');

  juiceCards[index].animate(
    {
      opacity: [0, 1]
    },
    {
      duration: 1000,
      delay: index * 500,
      easing: 'ease',
      fill: 'both'
    }
  );

});
