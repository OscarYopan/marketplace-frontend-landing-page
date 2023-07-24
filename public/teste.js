console.log('Open Teste API')

dataImport()

function dataImport() {
  fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json))
}

// https://fakestoreapi.com/docs
