import { useState } from "react"
import ParcelMachines from "../components/ParcelMachines";
import Payment from "../components/Payment";

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || []);

  function deleteProduct(index) {
    products.splice(index,1);
    // setProducts([...products]);
    setProducts(products.slice());
  }

  // const deleteProduct = (index) => {
  // }

  return (
    <div>
      {products.length === 0 ?
        <div>Ostukorv on tühi</div>  :
        <>
          <div>Ostukorvis on {products.length} toodet</div>
          <button onClick={() => setProducts([])}>Tühjenda</button>
        </>
      }   

      {/* <div>Coca-cola</div>
      <div>Fanta</div>
      <div>Sprite</div> */}
      {products.map((product, index) => 
        <div key={index}>
          <span>{product.name}</span>
          <button onClick={() => deleteProduct(index)}>x</button>
        </div>
      )}

      <br />
      <div>Ostukorvi kogusumma on xx €</div>

      <br /><br />
      <ParcelMachines />
      <br /><br />
      <Payment />
    </div>
  )
}

export default Cart