console.log('Open Teste API')

fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(json => console.log(json))

function createProductAnunce() {
  const productAnunce = document.querySelector('.product-container')

  productAnunce.innerHTML = `
  <div class="anunce">
    <img src="" alt="" class="image-product">
    <h2 class="title-product"></h2>
    <p class="description"></p>
    <span class="price"></span>
  </div>
  `
}
