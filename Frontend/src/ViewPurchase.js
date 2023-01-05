import * as React from 'react';
import {useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function ViewPurchase() {
  const [Purchase,setPurchase]=useState([])

  const{id1}=useParams(); 

  useEffect(()=>{
    loadPurchase();
  },[]);

  const loadPurchase=async()=>{
    const results=await axios.get("http://localhost:8080/GetAllPurchase")
    setPurchase(results.data);
  }
  const deletePurchase=async(id1)=>{
      await axios.delete(`http://localhost:8080/DelPurchaseById/${id1}`)
      loadPurchase(); 
  }

  return(
    <div>
        <div className='bg-secondary'>    
  <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand className='text-white' href="#home">Purchase</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto className='text-white'">
          <Link className="nav-link"  to="/customer" style={{ textDecoration: 'none' }}>Add Purchase</Link>
          <Link  className="nav-link" to="/viewCustomer" style={{ textDecoration: 'none' }}>View Purchase</Link>
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
      <th scope="col">Date & Time</th>
      <th scope="col">Item Cost Price</th>
      <th scope="col">Quantity Bought</th>
      <th scope='col'>Transaction Id</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>

    {
      Purchase.map((Purchase,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{Purchase.purDaT}</td>
      <td>{Purchase.purCost}</td>
      <td>{Purchase.purQuantityBought}</td>
      <td>{Purchase.purTransactionId}</td>
      <td>
        <Link className='btn btn-outline-warning mx-2'
          to={`/updatePurchase/${Purchase.purTransactionId}`}>
            Edit
            </Link>
        
        <button className='btn btn-outline-danger mx-2'
        onClick={()=>deletePurchase(Purchase.purTransactionId)}>Delete</button>
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
