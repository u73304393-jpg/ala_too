
const dishes = [
  ['Бешбармак', 750, 'https://i.pinimg.com/1200x/23/e9/22/23e9226388afe255a41f0d3bbfbfc392.jpg'],
  ['Куурдак', 600, 'https://i.pinimg.com/1200x/8f/9c/c0/8f9cc0989ad4a3155e57acdbaa31d46b.jpg'],
  ['Манты', 270, 'https://i.pinimg.com/736x/f8/cd/46/f8cd4691a5209632dda4d5cca7feac85.jpg'],
  ['Шорпо', 230, 'https://img.iamcook.ru/2023/upl/recipes/cat/u-033c4d9fea92aff22acc34fa7f52a9f9.jpg'],
  ['Лагман', 260, 'https://i.pinimg.com/1200x/03/b9/4f/03b94fa258955d51ea22c557cc7d8264.jpg']
  
];

const menu = document.getElementById('menu');
const cartBtn = document.getElementById('cartBtn');
const cartBox = document.getElementById('cart');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');

let cart = [];

dishes.forEach(d => {
  menu.innerHTML += `
    <div class="card">
      <img src="${d[2]}" alt="${d[0]}">
      <h3>${d[0]}</h3>
      <p class="price">${d[1]} сом</p>
      <button onclick="addToCart('${d[0]}', ${d[1]}, '${d[2]}')">
        Себетке кошуу
      </button>
    </div>
  `;
});

function addToCart(name, price, img) {
  cart.push({ name, price, img });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    cartItems.innerHTML += `
      <li class="cart-item">
        <img src="${item.img}">
        <div>
          <b>${item.name}</b><br>
          ${item.price} сом
        </div>
      </li>
    `;
    total += item.price;
  });

  cartTotal.textContent = total;
  cartCount.textContent = cart.length;
}

cartBtn.onclick = () => {
  cartBox.style.display =
    cartBox.style.display === 'block' ? 'none' : 'block';
};

