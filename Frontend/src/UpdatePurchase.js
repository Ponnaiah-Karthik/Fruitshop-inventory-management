import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams,Link} from 'react-router-dom';
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function UpdatePurchase(){
    

    const {id}=useParams()
    console.log(id);
    const purTransactionId=id;
    console.log("id fetched:"+id);

  const [Purchase,setPurchase]=useState({
    purCost:null,
    purDaT:"",
    purQuantityBought:null
  });

  const{purCost,purDaT,purQuantityBought}=Purchase
  
  const AddInput=(e)=>{
    setPurchase({...Purchase,[e.target.name]:e.target.value})
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/UpdatePurchaseById/${id}`,Purchase)
    window.confirm("Purchase Table is Updated");
  };

  useEffect(()=>{
    loadPurchase();
  },[]); 

  const loadPurchase=async()=>{
        const result=await axios.get(`http://localhost:8080/GetPurchaseById/${purTransactionId}`)
        console.log(result)
        setPurchase(result.data)
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
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
          <h2 className='text-center m-4'>Update Sales</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='purQuantityBought' className='form-label'>Purchase Quantity Bought</label>
            <input type={"number"} className='form-control' placeholder='Enter DaT'
            name="purQuantityBought"
            value={purQuantityBought}
            onChange={(e)=>AddInput(e)}/>
          </div>

          <div className='mb-3'>
            <label htmlFor='purCost' className='form-label'>Purchase Item Cost</label>
            <input type={"number"} className='form-control' placeholder='Enter single unit cost'
            name="purCost"
            value={purCost}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='purDaT' className='form-label'>Purchase Date & Time</label>
            <input type={"datetime-local"} className='form-control'
            name="purDaT"
            value={purDaT}
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