import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import Invoices from "./pages/Invoices";
import NewInvoice from './pages/NewInvoice';
import InvoiceList from "./components/InvoiceList";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

// const DUMMY_ITEMS= [
//   {
//     id: 1,
//     name: 'Toilet Paper',
//     quantity: 1,
//     price: 10.99 
//   },
//   {
//     id: 2,
//     name: 'Bread',
//     quantity: 2,
//     price: 3.44
//   }

// ]

function App() {

  const [invoices , setInvoices] = useState([]);

  const addInvoiceHandler = (newInvoice) => {
    setInvoices(prevValue => {
      return [...prevValue, newInvoice];
    })

  }

  const deleteInvoice = (id) => {
    setInvoices(prevStates => {
      return prevStates.filter(( item, index) => {
        return index !== id;
      });
    });
    console.log('deleted');
  }


   return (
    <Layout>
    <Switch>
      
      <Route path="/home" exact>
        <HomePage />
      </Route>

      <Route path="/" exact>
        <Redirect to = "/home" />
      </Route>
      
      {/* <Route path="/invoices" exact>
        <Invoices />
      </Route> */}

      <Route path="/invoices" exact>
        <InvoiceList  invoices={invoices} onDelete = {deleteInvoice} />
      </Route>

      {/* <Route path="/new-invoice" exact>
        <NewInvoice />
      </Route> */}

      <Route path="/new-invoice" exact>
        <CreateArea onAdd = {addInvoiceHandler}/>
      </Route>
      
    </Switch>
  </Layout>
  );
}

export default App;
