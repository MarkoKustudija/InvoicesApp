import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import InvoiceList from "./components/invoices/InvoiceList";
import { useEffect, useState } from "react";
import InvoiceForm from "./components/invoices/InvoiceForm";
import NoInvoicesFound from "./components/invoices/NoInvoicesFound";
// import NewInvoice from "./components/invoices/NewInvoice";

function App() {

  const [invoices, setInvoices] = useState([]);
  const [isThereInvoices, setIsThereInvoices] = useState(false);
  const [isEntering, setIsEntering] = useState(false);
  
  const [showInovices, setShowInvoices]=useState(false);

  const history = useHistory();


  useEffect(() => {
    if (isEntering) {
      history.push("/invoices");
    }
    window.localStorage.setItem('my_key', JSON.stringify({invoices}));

  }, [isEntering, history, invoices]);

  // useEffect(()=> {
  //   const data = localStorage.getItem();
  //   if(data === "1") setIsThereInvoices(true);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('my_key', "1");
  //   setIsThereInvoices(true);
  // }, []);

  // useEffect(()=> {
  //   const data = window.localStorage.getItem('my_key');
  //   if(data === 'my_key' ) setIsThereInvoices(JSON.parse(data));
  //   console.log(data);
  // }, [])

 
  // useEffect(()=> {
  //   window.localStorage.setItem('my_key', JSON.stringify(isThereInvoices));
  // }, [isThereInvoices])

  

  

  const addInvoiceHandler = (newInvoice) => {
    setInvoices((prevValue) => {
      return [...prevValue, newInvoice];
    });
    setIsThereInvoices(true);
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
          {/* <NewInvoice onAdd = {addInvoiceHandler} /> */}
        </Route>
       

      </Switch>
    </Layout>
  );
}

export default App;
