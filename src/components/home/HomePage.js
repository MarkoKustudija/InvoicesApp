import classes from "./Home.module.css";
import React, { useState } from "react";
import InvoiceForm from "../Invoices/InvoiceForm";

const HomePage = () => {

    const [invoices, setInvoices] = useState([]);
    const [isThereInvoices, setIsThereInvoices] = useState(false);

    function addInvoice(newInvoice) {
        setInvoices((prevState) => {
          return [...prevState, newInvoice];
        });
        setIsThereInvoices(true);
      }


  return (
    <div className={classes.home}>
        {!isThereInvoices &&  <form><h1>No invoices yet</h1></form>}
        <InvoiceForm onAdd = {addInvoice}/>
      
    </div>
  );
};

export default HomePage;
