import classes from "./HomePage.module.css";
// import React, { useState } from "react";
// import InvoiceForm from "../Invoices/InvoiceForm";
import { Link } from "react-router-dom";
import { useState } from "react";
import InvoiceItem from "../Invoices/InoviceItem";

const HomePage = () => {

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
    <div className={classes.noquotes}>
      {!isThereInvoices && <h1>No invoices yet!</h1>}
      <Link className="btn" to="/new-invoice">
        Add new Invoice
      </Link>

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
    </div>
  );
};

export default HomePage;
