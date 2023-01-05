import * as React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react';


const DeleteSales=()=>{
  const [BillId,setBillId]=useState();
  
  return(
    <div>
        <br/><br/><br/>
    <div class="mx-auto d-grid gap-3" style={{width:400}}>
    <form action="" class="justify-content-center">
                            <div class="form-group p-2">
                                <label classNme="sr-only">Sales Id</label>
                                <input type="number" class="form-control" placeholder="Enter Id" onChange={e => setBillId(e.target.value)}/>
                            </div>
                            <div className='form-group p-2'>
                            <Button variant="primary" type="submit">Delete</Button>
                            </div>
                        </form>
                        </div>

    </div>
  )
}


export default DeleteSales;