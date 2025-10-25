import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';

const swiper = new Swiper(...);

async function getProducts() {
    let response = await fetch("store.json")
    let products = await response.json()
    return products
};

function getCardHTML(product){
    return`<div class="card" style="width: 18rem;">
  <img src="img/${product.img}" <class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${product.title}</h5>
    <p class="card-text">${product.proce}Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}

// Викликаємо асинхронну функцію та очікуємо на отримання продуктів
getProducts().then(function (products) {
    let productsList = document.querySelector('.products-list')
    if (productsList) {
        products.forEach(function (product) {
            // Відображаємо товари на сторінці
            productsList.innerHTML += getCardHTML(product)
        })
    }
    // Отримуємо всі кнопки "Купити" на сторінці
    let buyButtons = document.querySelectorAll('.products-list .cart-btn');
    // Навішуємо обробник подій на кожну кнопку "Купити"
    if (buyButtons) {
        buyButtons.forEach(function (button) {
            button.addEventListener('click', addToCart)
        });
    }
})
