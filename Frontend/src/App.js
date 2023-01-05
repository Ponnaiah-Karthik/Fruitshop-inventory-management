import Header from './Header';
import {Routes, Route,BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';

import UpdateCustomer from './UpdateCustomer';
import AddCustomer from './AddCustomer';
import ViewCustomer from './ViewCustomer';
import AddSales from './AddSales';
import ViewSales from './ViewSales';
import UpdateSales from './UpdateSales';
import AddPurchase from './AddPurchase';
import ViewPurchase from './ViewPurchase';
import UpdatePurchase from './UpdatePurchase';
import AddStock from './AddStock';
import ViewStock from './ViewStock';
import UpdateStock from './UpdateStock';


function App() {
  return (<div>
    <Router>
      <Header/>
<Routes>
  <Route  path="/" element={<Home/>}/>
  
  {/* Customer Table */}
  <Route path="/customer" element={<AddCustomer/>}/>
  <Route path='/viewCustomer' element={<ViewCustomer/>}/>
  <Route path="/updateCustomer/:id" element={<UpdateCustomer/>}/>
  {/* Sales Table */}
  <Route  path="/sales" element={<AddSales/>}/>
  <Route path="/viewSales" element={<ViewSales/>}/>
  <Route path="/updateCustomer/:id" element={<UpdateSales/>}/>

  {/* Purchase Table */}
  <Route path="/purchase" element={<AddPurchase/>}/>
  <Route path="/viewPurchase" element={<ViewPurchase/>}/>
  <Route path="/updatePurchase/:id" element={<UpdatePurchase/>}/> 

  {/* Stock Table */}
  <Route path="/stock" element={<AddStock/>}/>
  <Route path="/viewStock" element={<ViewStock/>}/>
  <Route path="/updateStock/:id" element={<UpdateStock/>}/>

</Routes>
    </Router>
    </div>
  );
}

export default App;
