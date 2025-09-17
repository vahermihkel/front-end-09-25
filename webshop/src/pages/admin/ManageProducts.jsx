import { useState } from "react"
import productsJSON from "../../data/products.json"
import { Table } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';

function ManageProducts() {
  const [products, setProducts] = useState(productsJSON);

  function deleteProduct(index) {
    products.splice(index, 1);
    setProducts(products.slice());
    // setProducts([...products]);
    toast.success('Product successfully deleted');
  }

  return (
    <div>
      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Active</th>
            <th>Category</th>
            <th>Image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => 
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.active ? "Aktiivne": "Mitteaktiivne"}</td>
              <td>{product.category}</td>
              <td><img className="logo" src={product.image} alt="" /></td>
              <td><button onClick={() => deleteProduct(index)}>x</button></td>
            </tr>)}
        </tbody>
      </Table>

      <Toaster />
    </div>
  )
}

export default ManageProducts
