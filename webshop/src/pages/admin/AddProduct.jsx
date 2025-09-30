import { useState } from "react";
import productsJSON from "../../data/products.json"
import toast, { Toaster } from 'react-hot-toast';
import { TextField } from "@mui/material";
import Dropdown from "../../components/ui/Dropdown";
import Checkbox from "../../components/ui/Checkbox";
// import { NumberField } from '@base-ui-components/react/number-field';

function AddProduct() {
  const [product, setProduct] = useState({});
  const categories = ["drink", "snack", "fruit", "electronics", "clothing"];

  function add() {
    if (!product.name) {
      toast.error("Cannot add without name");
      return;
    }

    if (!product.price || product.price <= 0) {
      toast.error("Price not correct");
      return;
    }

    productsJSON.push(product);
    toast.success('Product successfully added');
  }

  function updateField(value, key) {
    setProduct({...product, [key]: value});
  }

  return (
    <div>
      <div>Ajutine väljakuvamine: {JSON.stringify(product)}</div>
      <br />
      <TextField label="ID" type="number"
        onChange={(e) => setProduct({...product, id: Number(e.target.value)})} />
      <br /><br />
      <TextField label="Name" 
        onChange={(e) => setProduct({...product, name: e.target.value})} />
      <br /><br />
      <TextField label="Price" type="number"
        onChange={(e) => setProduct({...product, price: Number(e.target.value)})} />
      <br /><br />
      <TextField label="Image" 
        onChange={(e) => setProduct({...product, image: e.target.value})} />
      <br /><br />
      
      <Checkbox handleChecked={updateField} label="Active" />
      
      <Dropdown handleSelect={updateField} options={categories} header="category" />
      <br /><br />
      {/* <input onChange={(e) => setProduct({...product, category: e.target.value})} type="text" /> <br /> */}
      <button onClick={add}>Sisesta</button> <br />

      <Toaster />
    </div>
  )
}

export default AddProduct