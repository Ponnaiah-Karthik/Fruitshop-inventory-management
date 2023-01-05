import * as React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Navbar,Container,Nav} from 'react-bootstrap';

export default function AddPurchase(){
  const [Purchase,setPurchase]=useState({
    purQuantityBought:null,
    purCost:null,
    stoItemId:null
  });

  const{purQuantityBought,purCost,stoItemId}=Purchase
  
  const AddInput=(e)=>{
    setPurchase({...Purchase,[e.target.name]:e.target.value})
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.post("http://localhost:8080/SavePurchase",Purchase)
    window.confirm("Data Added in Purchase Table");
  };

  return(
    <div>
      
      <div className='bg-secondary'>    
  <Navbar collapseOnSelect expand="lg" bg="secondary" variant="secondary">
      <Container>
        <Navbar.Brand className='text-white' href="#home">Purchase</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto className='text-white'">
          <Link className="nav-link"  to="/purchase" style={{ textDecoration: 'none' }}>Add Purchase</Link>
          <Link  className="nav-link" to="/viewPurchase" style={{ textDecoration: 'none' }}>View Purchase</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>




    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
          <h2 className='text-center m-4'>Add Purchase</h2>
          <form onSubmit={(e)=>onSubmit(e)}>

          <div className='mb-3'>
            <label htmlFor='purQuantityBought' className='form-label'>Sales Item Cost</label>
            <input type={"number"} className='form-control' placeholder='Enter Quantity Bought'
            name="purQuantityBought"
            value={purQuantityBought}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='purCost' className='form-label'>Sales Quantity</label>
            <input type={"number"} className='form-control' placeholder='Enter Cost Price'
            name="purCost"
            value={purCost}
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