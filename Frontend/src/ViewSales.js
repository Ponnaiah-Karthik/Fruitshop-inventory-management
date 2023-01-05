import * as React from 'react';
import {useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function ViewSales() {
  const [Sales,setSales]=useState([])

  const{id}=useParams();

  useEffect(()=>{
    loadSales();
  },[]);

  const loadSales=async()=>{
    const result=await axios.get("http://localhost:8080/GetAllSales")
    setSales(result.data);
  }
  const deleteSales=async(id)=>{
      await axios.delete(`http://localhost:8080/DelSalesById/${id}`)
      loadSales(); 
  }

  return(
    <div>
        <div className='bg-secondary'>    
  <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand className='text-white' href="#home">Sales</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto className='text-white'">
          <Link className="nav-link"  to="/customer" style={{ textDecoration: 'none' }}>Add Sales</Link>
          <Link  className="nav-link" to="/viewCustomer" style={{ textDecoration: 'none' }}>View Sales</Link>
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
      <th scope="col">Item Cost</th>
      <th scope="col">Quantity</th>
      <th scope='col'>Total Cost</th>
      <th scope='col'>Bill Id</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>

    {
      Sales.map((Sales,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{Sales.salDaT}</td>
      <td>{Sales.salItemCost}</td>
      <td>{Sales.salQuantity}</td>
      <td>{Sales.salTotalCost}</td>
      <td>{Sales.salBillId}</td>
      <td>
        <Link className='btn btn-outline-warning mx-2'
          to={`/updateSales/${Sales.salBillId}`}>
            Edit
            </Link>
        
        <button className='btn btn-outline-danger mx-2'
        onClick={()=>deleteSales(Sales.salBillId)}>Delete</button>
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
