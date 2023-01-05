import * as React from 'react';
import { useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar,Container,Nav} from 'react-bootstrap';

export default function AddSales(){
  const [Sales,setSales]=useState({
    salItemCost:null,
    salDaT:"",
    salQuantity:null,
    salTotalCost:null,
    stoItemId:null
  });

  const{salDaT,salItemCost,salQuantity,salTotalCost,stoItemId}=Sales
  
  const AddInput=(e)=>{
    setSales({...Sales,[e.target.name]:e.target.value})
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/SaveSales",Sales)
    window.confirm("Data Added in Sales Table");
  };

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
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
          <h2 className='text-center m-4'>Add Sales</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='SalDaT' className='form-label'>Sales Date and Time</label>
            <input type={"datetime-local"} className='form-control' placeholder='Enter Name'
            name="salDaT"
            value={salDaT}
            onChange={(e)=>AddInput(e)}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='salItemCost' className='form-label'>Sales Item Cost</label>
            <input type={"number"} className='form-control' placeholder='Enter single unit cost'
            name="salItemCost"
            value={salItemCost}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='salQuantity' className='form-label'>Sales Quantity</label>
            <input type={"number"} className='form-control' placeholder='Enter quantity'
            name="salQuantity"
            value={salQuantity}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='salTotalCost' className='form-label'>Sales Total Cost</label>
            <input type={"number"} className='form-control' placeholder='Enter Total cost'
            name="salTotalCost"
            value={salTotalCost}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='stoItemId' className='form-label'>Sales Item Id</label>
            <input type={"number"} className='form-control' placeholder='Enter Item Id'
            name="stoItemId"
            value={stoItemId}
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