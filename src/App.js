import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import InvoiceList from "./components/invoices/InvoiceList";
import { useState } from "react";
import InvoiceForm from "./components/invoices/InvoiceForm";
import NoInvoicesFound from "./components/invoices/NoInvoicesFound";

function App() {
  const [invoices, setInvoices] = useState([]);
  const [isThereInvoices, setIsThereInvoices] = useState(false);

  const addInvoiceHandler = (newInvoice) => {
    setInvoices((prevValue) => {
      return [...prevValue, newInvoice];
    });
    setIsThereInvoices(true);
  };

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
        {!isThereInvoices && (
          <Route path="/home" exact>
            <NoInvoicesFound />
          </Route>
        )}

        <Route path="/home" exact>
          <HomePage />
        </Route>

        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/invoices" exact>
          <InvoiceList invoices={invoices} onDelete={deleteInvoice} />
        </Route>

        <Route path="/new-invoice" exact>
          <InvoiceForm onAdd={addInvoiceHandler} />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
