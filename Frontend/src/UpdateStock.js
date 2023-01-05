import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams,Link} from 'react-router-dom';
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function UpdateStock(){
    

    const {id}=useParams()
    console.log(id);
    const stoItemId=id;
    console.log("id fetched:"+id);

  const [Stock,setStock]=useState({
    stoSellingPrice:null,
    stoItemName:"",
    stoQuantity:null
  });


  const{stoSellingPrice,stoItemName,stoQuantity}=Stock
  
  const AddInput=(e)=>{
    setStock({...Stock,[e.target.name]:e.target.value})
  }

  const onSubmit=async(e)=>{
    e.preventDefault();
    await axios.put(`http://localhost:8080/UpdateStockById/${id}`,Stock)
    window.confirm("Stock Table is Updated");
  };

  useEffect(()=>{
    loadStock();
  },[]); 

  const loadStock=async()=>{
        const result=await axios.get(`http://localhost:8080/GetStockById/${stoItemId}`)
        console.log(result)
        setStock(result.data)
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
          <Link className="nav-link"  to="/customer" style={{ textDecoration: 'none' }}>Add Stock</Link>
          <Link  className="nav-link" to="/viewCustomer" style={{ textDecoration: 'none' }}>View Stock</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>



    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
          <h2 className='text-center m-4'>Update Stock</h2>
          <form onSubmit={(e)=>onSubmit(e)}>
          <div className='mb-3'>
            <label htmlFor='stoItemName' className='form-label'>Stock Item Name</label>
            <input type={"text"} className='form-control' placeholder='Enter Item Name'
            name="stoItemName"
            value={stoItemName}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='stoSellingPrice' className='form-label'>Item Selling Price</label>
            <input type={"number"} className='form-control' placeholder='Enter Selling Price'
            name="stoSellingPrice"
            value={stoSellingPrice}
            onChange={(e)=>AddInput(e)}/>
          </div>
          <div className='mb-3'>
            <label htmlFor='stoQuantity' className='form-label'>Item Quantity</label>
            <input type={"number"} className='form-control' placeholder='Enter Quantity'
            name="stoQuantity"
            value={stoQuantity}
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