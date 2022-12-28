import Layout from "./components/layout/Layout";
import InvoiceForm from "./components/Invoices/InvoiceForm";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { useState } from "react";
import Invoices from "./page/Invoices";

const DUMMY_ITEMS= [
  {
    id: 'e1',
    name: 'Toilet Paper',
    quantity: 1,
    price: 10.99 
  },
  {
    id: 'e2',
    name: 'Bread',
    quantity: 2,
    price: 3.44
  }

]

function App() {

  const [invoices, setInvoices] = useState([DUMMY_ITEMS]);

   return (
    <Layout>
      <Switch>

        <Route path="/home" exact>
          <HomePage />      
        </Route>

        <Route path="/" exact>
          <Redirect to = "/home"/>
        </Route>
        

        {/* <Route path="/invoices" exact>
          <Invoices invoices = {invoices}/>
        </Route> */}

        <Route path="/new-invoice">
          <InvoiceForm />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;
