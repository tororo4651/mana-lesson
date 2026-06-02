const juices = [
  {
    name: 'イチゴ',
    image: 'strawberry',
    price: 400
  },
  {
    name: 'ライム',
    image: 'lime',
    price: 400
  },
  {
    name: 'マンゴー',
    image: 'mango',
    price: 400
  },
  {
    name: 'レモン',
    image: 'lemon',
    price: 400
  },
  {
    name: 'イチジク',
    image: 'fig',
    price: 400
  },
  {
    name: 'リンゴ',
    image: 'apple',
    price: 400
  }
];


const menu = document.querySelector('#menu');


for (let i = 0; i < juices.length; i++) {
  const { name, image, price } = juices[i];

  const content =
   `<div class="juice">
      <img class="juice__image" src="images/${image}.jpg">
      <h2 class="juice__name">${name}</h2>
      <p class="juice__price">${price}円</p>
    </div>`;

  menu.insertAdjacentHTML('beforeend', content);
}


// juices.forEach((juice, index, array) => {
//   const { name, image, price } = juice;

//   const content =
//     `<div class="juice">
//       <img class="juice__image" src="images/${image}.jpg">
//       <h2 class="juice__name">${name}</h2>
//       <p class="juice__price">${price}円</p>
//     </div>`;

//   menu.insertAdjacentHTML('beforeend', content);
// });
