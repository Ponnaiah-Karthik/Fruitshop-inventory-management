import * as React from 'react';
import {useState,useEffect} from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function ViewCustomer() {
  const [Customer,setCustomer]=useState([])

  const{id}=useParams();

  useEffect(()=>{
    loadCustomer();
  },[]);

  const loadCustomer=async()=>{
    const result=await axios.get("http://localhost:8080/GetAllCustomer")
    setCustomer(result.data);
  }
  const deleteCustomer=async(id)=>{
      await axios.delete(`http://localhost:8080/DelCustomerById/${id}`)
      loadCustomer(); 
  }

  return(
    <div>
      <div className='bg-secondary'>    
  <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand className='text-white' href="#home">Customer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto className='text-white'">
          <Link className="nav-link"  to="/customer" style={{ textDecoration: 'none' }}>Add Customer</Link>
          <Link  className="nav-link" to="/viewCustomer" style={{ textDecoration: 'none' }}>View Customer</Link>
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
      <th scope="col">Customer Name</th>
      <th scope="col">Mobile Number</th>
      <th scope="col">Customer Id</th>
      <th scope='col'>Action</th>
    </tr>
  </thead>
  <tbody>

    {
      Customer.map((Customer,index)=>(
        <tr>
      <th scope="row" key={index}>{index+1}</th>
      <td>{Customer.custCustomerName}</td>
      <td>{Customer.custPhoneNumber}</td>
      <td>{Customer.custCustomerid}</td>
      <td>
        <Link className='btn btn-outline-warning mx-2'
          to={`/updateCustomer/${Customer.custCustomerid}`}>
            Edit
            </Link>
        
        <button className='btn btn-outline-danger mx-2'
        onClick={()=>deleteCustomer(Customer.custCustomerid)}>Delete</button>
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
