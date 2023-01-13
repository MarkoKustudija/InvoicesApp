import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import InvoiceList from "./components/invoices/InvoiceList";
import { useEffect, useState } from "react";
import InvoiceForm from "./components/invoices/InvoiceForm";
import NoInvoicesFound from "./components/invoices/NoInvoicesFound";
import NotFound from "./NotFound";

function App() {

  const [invoices, setInvoices] = useState([]);
  const [isThereInvoices, setIsThereInvoices] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("my_key", JSON.stringify({ invoices }));
    if (isEntering) {
      history.push("/invoices");
    }
    
  }, [isEntering, history, invoices]);

  
  // useEffect(() => {
  //   localStorage.setItem('my_key', JSON.stringify(invoices));
  // }, [invoices]);


  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('my_key'));
  //   if (items) {
  //    setInvoices(items);
  //   }
  // }, []);

  
  const addInvoiceHandler = (newInvoice) => {
    setInvoices((prevValue) => {
      return [...prevValue, newInvoice];
    });
  
    setIsThereInvoices(true)
    setIsEntering(true);
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

        <Route path="*">
          <NotFound />
        </Route>
        
      </Switch>
    </Layout>
  );
}

export default App;
