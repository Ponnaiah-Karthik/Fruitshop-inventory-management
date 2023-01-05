import * as React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useParams,Link,useLocation} from 'react-router-dom';
import { Navbar,Container,Nav} from 'react-bootstrap';


export default function UpdateCustomer(){
    

    const {id}=useParams()
    console.log(id);
    const custCustomerid=id;
    console.log("id fetched:"+id);

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
    await axios.put(`http://localhost:8080/UpdateCustomerById/${id}`,Customer)
    window.confirm("Customer Table is Updated");
  };

  useEffect(()=>{
    loadCustomer();
  },[]); 

  const loadCustomer=async()=>{
        const result=await axios.get(`http://localhost:8080/GetCustomerById/${custCustomerid}`)
        console.log(result)
        console.log(custCustomerName)
        setCustomer(result.data)
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
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4  mt-2 shadow'>
          <h2 className='text-center m-4'>Update Customer</h2>
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