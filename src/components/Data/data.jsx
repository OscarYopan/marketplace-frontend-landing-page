  export const Data = () => {

    function data() {
      fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }

    return (
      <div>{data}</div>
    )
  }

  // https://fakestoreapi.com/docs
  