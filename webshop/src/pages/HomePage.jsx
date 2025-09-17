import { useState } from "react"
import productsJSON from "../data/products.json"
import { Button } from "@mui/material";
import { Button as BButton } from "react-bootstrap";

function HomePage() {
  const [products, setProducts] = useState(productsJSON);

  function sortAZ() {
    productsJSON.sort((a,b) => a.name.localeCompare(b.name));
    setProducts(productsJSON.slice());
    // setProducts([...products]);
  }

  function sortZA() {
    productsJSON.sort((a,b) => b.name.localeCompare(a.name));
    setProducts(productsJSON.slice());
  }

  function sortPriceAsc() {
    productsJSON.sort((a,b) => a.price - b.price);
    setProducts(productsJSON.slice());
  }

  function sortPriceDesc() {
    productsJSON.sort((a,b) => b.price - a.price);
    setProducts(productsJSON.slice());
  }

  function filterUnder500() {
    const result = productsJSON.filter(product => product.price > 5);
    setProducts(result);
  }

  function filterActives() {
    const result = productsJSON.filter(product => product.active);
    setProducts(result);
  }

  function addToCart(product) {
    // const cartLS = JSON.parse(localStorage.getItem("cart") || "[]");
    const cartLS = JSON.parse(localStorage.getItem("cart")) || [];
    cartLS.push(product); 
    localStorage.setItem("cart", JSON.stringify(cartLS));
  } 

  // LocalStorage-sse array panemiseks:
  // 1. võtan localStorage-st ( localStorage.getItem() )
  // 2. võtan jutumärgid maha ( JSON.parse() )
  // 3. lisan ühe elemendi juurde ( .push() )
  // 4. panen jutumärgid tagasi peale ( JSON.stringify() )
  // 5. panen localStorage-sse tagasi ( localStorage.setItem() )

  return (
    <div>
      <div>Kokku on {products.length} toodet</div>
      <Button onClick={() => sortAZ()}>Sorteeri A-Z</Button>
      <Button onClick={sortZA}>Sorteeri Z-A</Button>
      <Button onClick={sortPriceAsc}>Sorteeri hind kasvavalt</Button>
      <Button onClick={sortPriceDesc}>Sorteeri hind kahanevalt</Button>
      <br />
      <Button onClick={() => filterUnder500()}>Filtreeri odavamad kui 500</Button>
      <Button onClick={() => filterActives()}>Filtreeri aktiivsed</Button>

      {products.map(product => 
        <div key={product.id}>
          <div>{product.name}</div>
          <div>{product.price}€</div>
          <BButton onClick={() => addToCart(product)}>Lisa ostukorvi</BButton>
        </div>
      )}
    </div>
  )
}

export default HomePage

// LocalStorage -------> Cart
// Fail xxxxx
// Firebase (server) + andmebaas   GET/PUT
// MongoDB
// Java+Spring + PostgreSQL