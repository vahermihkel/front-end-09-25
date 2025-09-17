import { useState } from "react";
import productsJSON from "../../data/products.json"
import toast, { Toaster } from 'react-hot-toast';
import { TextField } from "@mui/material";
// import { NumberField } from '@base-ui-components/react/number-field';

function AddProduct() {
  const [product, setProduct] = useState({});

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
      
      <div className="items-center mb-4">
        <input 
          id="active-checkbox" 
          type="checkbox" 
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          onChange={(e) => setProduct({...product, active: e.target.checked})}
        />
        <label htmlFor="active-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Active
        </label>
      </div>
      
      <label>Category</label> <br />
      <input onChange={(e) => setProduct({...product, category: e.target.value})} type="text" /> <br />
      <button onClick={add}>Sisesta</button> <br />

       <Toaster />
    </div>
  )
}

export default AddProduct