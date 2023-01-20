import Layout from "./components/layout/Layout";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import InvoiceList from "./components/invoices/InvoiceList";
import { useEffect, useState } from "react";
import InvoiceForm from "./components/invoices/InvoiceForm";
import NoInvoicesFound from "./components/invoices/NoInvoicesFound";
import NotFound from "./NotFound";
import { useDispatch, useSelector } from "react-redux";
import { homeActions } from "./store/home";

function App() {


  const isInvoice = useSelector((state) => state.home.isThereAnyInvoices); // false
  const dispatch = useDispatch();

  const [invoices, setInvoices] = useState(
    !localStorage.getItem("key") ? [] : JSON.parse(localStorage.getItem("key"))
  );

  // const [isThereInvoices, setIsThereInvoices] = useState(false);

  const [isEntering, setIsEntering] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (isEntering) {
      history.push("/invoices");
    }

    localStorage.setItem("key", JSON.stringify(invoices));
  }, [isEntering, history, invoices]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("key"));
    if (items) {
      setInvoices(items);
    }

    console.log("Items : " + items);
  }, []);


  const addInvoiceHandler = (newInvoice) => {
    setInvoices((prevValue) => {
      return [...prevValue, newInvoice];
    });

    // setIsThereInvoices(true);
    setIsEntering(true);
    dispatch(homeActions.check());
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
        {/* {!isThereInvoices && ( */}
        {!isInvoice && (
          <Route path="/home" exact>
            <NoInvoicesFound />
          </Route>
        )}

        {isInvoice && (
          <Route path="/home" exact>
            <HomePage />
          </Route>
        )}

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
