import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams,Link} from 'react-router-dom';
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function UpdateSales(){
    

    const {id}=useParams()
    console.log(id);
    const salBillId=id;
    console.log("id fetched:"+id);

  const [Sales,setSales]=useState({
    salItemCost:null,
    salDaT:"",
    salQuantity:null,
    salTotalCost:null
  });

  const{salDaT,salItemCost,salQuantity,salTotalCost}=Sales
  
  const AddInput=(e)=>{
    setSales({...Sales,[e.target.name]:e.target.value})
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/UpdateSalesById/${id}`,Sales)
    window.confirm("Sales Table is Updated");
  };

  useEffect(()=>{
    loadSales();
  },[]); 

  const loadSales=async()=>{
        const result=await axios.get(`http://localhost:8080/GetSalesById/${salBillId}`)
        console.log(result)
        setSales(result.data)
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
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
          <h2 className='text-center m-4'>Update Sales</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='salDaT' className='form-label'>Sales Date and Time</label>
            <input type={"datetime-local"} className='form-control' placeholder='Enter DaT'
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
          
          <button type='submit' className='mb-3 btn btn-outline-primary'>Submit</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}