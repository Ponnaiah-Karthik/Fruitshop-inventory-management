import * as React from 'react';
import { Button } from "react-bootstrap";
import { useState } from 'react';


const DeleteStock=()=>{
  const [StockId,setStockId]=useState();
  
  return(
    <div>
        <br/><br/><br/>
    <div class="mx-auto d-grid gap-3" style={{width:400}}>
    <form action="" class="justify-content-center">
                            <div class="form-group p-2">
                                <label classNme="sr-only">Stock Id</label>
                                <input type="number" class="form-control" placeholder="Enter Id" onChange={e => setStockId(e.target.value)}/>
                            </div>
                            <div className='form-group p-2'>
                            <Button variant="primary" type="submit">Delete</Button>
                            </div>
                        </form>
                        </div>

    </div>
  )
}


export default DeleteStock;