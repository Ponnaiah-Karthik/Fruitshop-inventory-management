import * as React from 'react';
import {useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function ViewStock() {
  const [Stock,setStock]=useState([])

  const{id}=useParams();

  useEffect(()=>{
    loadStock();
  },[]);

  const loadStock=async()=>{
    const result=await axios.get("http://localhost:8080/GetAllStock")
    setStock(result.data);
  }
  const deleteStock=async(id)=>{
      await axios.delete(`http://localhost:8080/DelStockById/${id}`)
      loadStock(); 
  }

  return(
    <div>
        <div className='bg-secondary'>    
  <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand className='text-white' href="#home">Stock</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto className='text-white'">
          <Link className="nav-link"  to="/stock" style={{ textDecoration: 'none' }}>Add Stock</Link>
          <Link  className="nav-link" to="/viewStock" style={{ textDecoration: 'none' }}>View Stock</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>

      <div className='container'>
        <div className='py-3'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Item Name</th>
      <th scope="col">Item Quantity</th>
      <th scope="col">Selling Price</th>
      <th scope='col'>Item Id</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>

    {
      Stock.map((Stock,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{Stock.stoItemName}</td>
      <td>{Stock.stoQuantity}</td>
      <td>{Stock.stoSellingPrice}</td>
      <td>{Stock.stoItemId}</td>
      <td>
        <Link className='btn btn-outline-warning mx-2'
          to={`/updateStock/${Stock.stoItemId}`}>
            Edit
            </Link>
        
        <button className='btn btn-outline-danger mx-2'
        onClick={()=>deleteStock(Stock.stoItemId)}>Delete</button>
      </td>
    </tr>
      ))
    }
    
    
  </tbody>
</table>
        </div>
      </div>
    </div>
  )
}
