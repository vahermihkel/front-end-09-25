import { useRef, useState } from "react"
import productsJSON from "../../data/products.json"
import { Table } from "react-bootstrap";
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from "../../components/ui/ConfirmationModal";
import ConfirmationModal2 from "../../components/ui/ConfirmationModal2";


// let indexToBeDeleted; <--- saab ka muutujat välja tõsta, aga mittesoovitatav

function ManageProducts() {
  const [products, setProducts] = useState(productsJSON);
  const indexToBeDeleted = useRef();
  const confirmationModalRef = useRef();
  const confirmationModalRef2 = useRef();

  // const [indexToBeDeleted, setIndexToBeDeleted] = useState(); <---- saab ka

  function deleteProduct() {
    products.splice(indexToBeDeleted.current, 1);
    setProducts(products.slice());
    toast.success('Product successfully deleted');
    // setShow(false);
    // confirmationModalRef.current.handleClose();
    confirmationModalRef2.current.handleClose();
  }

  function openModal(index) {
    // confirmationModalRef.current.handleShow();
    confirmationModalRef2.current.handleShow();
    indexToBeDeleted.current = index;
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
              <td><button onClick={() => openModal(index)}>x</button></td>
            </tr>)}
        </tbody>
      </Table>

      <ConfirmationModal 
        ref={confirmationModalRef} 
        deleteItem={deleteProduct} 
        subject="product"
        />

      <ConfirmationModal2
        ref={confirmationModalRef2}
        deleteItem={deleteProduct} 
        subject="product2"
      />

      <Toaster />
    </div>
  )
}

export default ManageProducts
