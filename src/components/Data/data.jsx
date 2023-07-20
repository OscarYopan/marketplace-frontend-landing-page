
 
  export const data = () => {

    function data() {
      fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(json=>console.log(json))
    }

    return (
      <div></div>
    )
  }
  