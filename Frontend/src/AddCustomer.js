import * as React from 'react';
import { useState,routeChange } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar,Container,Nav} from 'react-bootstrap';

export default function AddCustomer(){
  const [Customer,setCustomer]=useState({
    custCustomerName:"",
    custPhoneNumber:null
  });

  const{custCustomerName,custPhoneNumber}=Customer
  
  const AddInput=(e)=>{
    setCustomer({...Customer,[e.target.name]:e.target.value})
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/SaveCustomer",Customer)
    window.confirm("Data Added in Customer Table");
  };

  return(
    <div>
  <div className='bg-secondary'>    
  <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand className='text-white' href="#home">Customer</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto className='text-white'">
          <Link className="nav-link"  to="/customer" style={{ textDecoration: 'none' }}>AddCustomer</Link>
          <Link  className="nav-link" to="/viewCustomer" style={{ textDecoration: 'none' }}>View Customer</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
    <br/><br/>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
          <h2 className='text-center m-4'>Add Customer</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='custCustomerName' className='form-label'>Customer Name</label>
            <input type={"text"} className='form-control' placeholder='Enter Name'
            name="custCustomerName"
            value={custCustomerName}
            onChange={(e)=>AddInput(e)}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='custPhoneNumber' className='form-label'>Customer  Mobile Number</label>
            <input type={"number"} className='form-control' placeholder='Enter Mobile Number'
            name="custPhoneNumber"
            value={custPhoneNumber}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <button type='submit' className='mb-3 btn btn-outline-primary'>Submit</button>
          </form>
        </div>
      </div>
        
    </div>
    </div>
  )
}