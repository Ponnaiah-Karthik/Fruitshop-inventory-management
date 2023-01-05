import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom';

const Home=()=>{
  let navigate = useNavigate();
  const routeChange=(path)=> {
    navigate(path);
  }
  return(
    <div>
      <br/>
      <br/>
      <div style={{top:200,left:75,position:'absolute'}}>
      <div className=" align-middle d-flex flex-row mb-4">
      <div className='d-flex justify-content-center' style={{padding:"25px 25px 25px 25px"}}>
       <Card style={{ width: '18rem'}} onClick={()=>{routeChange("/stock")}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Stock</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      
    </Card>
    </div>
    <div className='d-flex justify-content-center' style={{padding:"25px 25px 25px 25px"}}>
       <Card style={{ width: '18rem' }} onClick={()=>{routeChange("/purchase")}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Purchase</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
    </Card>
    </div>
    <div className='d-flex justify-content-center' style={{padding:"25px 25px 25px 25px"}}>
       <Card style={{ width: '18rem' }}  onClick={()=>{routeChange("/sales")}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Sales</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
    </Card>
    </div>
    <div className='d-flex justify-content-center ' style={{padding:"25px 25px 25px 25px"}}>
       <Card style={{ width: '18rem' }} onClick={()=>{routeChange("/customer")}}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Customer</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      
      
    </Card>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Home;