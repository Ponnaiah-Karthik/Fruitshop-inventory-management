import * as React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { useState } from 'react';

const DeletePurchase=()=>{
  const [PurchaseId,setPurchaseId]=useState();
  return(
    <div>
        <br/><br/><br/>
    <div class="mx-auto d-grid gap-3" style={{width:400}}>
    <form action="" class="justify-content-center">
                            <div class="form-group p-2">
                                <label classNme="sr-only">Purchase Id</label>
                                <input type="text" class="form-control" placeholder="Enter the Id" onChange={e => setPurchaseId(e.target.value)}/>
                            </div>
                            <div className='form-group p-2'>
                            <Button variant="primary" type="submit">Delete</Button>
                            </div>
                        </form>
                        </div>

    </div>
  )
}


export default DeletePurchase;