import Layout from "./components/layout/Layout";
import InvoiceForm from "./components/Invoices/InvoiceForm";
import { useState } from "react";
import InvoiceItem from "./components/Invoices/InoviceItem";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [isThereInvoices, setIsThereInvoices] = useState(false);

  const deleteInvoice = (id) => {
    setInvoices((prevStates) => {
      return prevStates.filter((item, index) => {
        return index !== id;
      });
    });
    console.log("deleted");
  };

  return (
    <Layout>
      <Switch>

        <Route path="/home" exact>
          <HomePage />
        </Route>

        {invoices.map((item, index) => {
          return (
            <InvoiceItem
              key={index}
              id={index}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onDelete={deleteInvoice}
            />
          );
        })}

        <Route path="/new-invoice">
          <InvoiceForm />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;
