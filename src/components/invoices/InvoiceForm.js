import React, { Fragment, useState } from "react";
import { Prompt } from "react-router-dom";
import classes from "./InvoiceForm.module.css";
import Card from "../UI/Card";

const InvoiceForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const [invoice, setInvoice] = useState({
    name: "",
    quantity: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInvoice((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function submitFormHandler(event) {
    event.preventDefault();
    props.onAdd(invoice);
    setInvoice({
      name: "",
      quantity: "",
      price: "",
    });
    
  }

  const formFocusHandler = () => {
    console.log("Focus!");
    setIsEntering(true);
  };

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  let message =
    "Are you shure you want to leave the form? All your data will be lost!!!";

  return (
    <Fragment>
      <Prompt when={isEntering} message={(location) => message} />
      <Card>
        <form
          className={classes.form}
          onFocus={formFocusHandler}
          onSubmit={submitFormHandler}
        >
          <div className={classes.control}>
            <input
              onChange={handleChange}
              type="name"
              id="name"
              name="name"
              value={invoice.name}
              placeholder="Item Name"
            />
          </div>
          <div className={classes.control}>
            <input
              onChange={handleChange}
              type="number"
              min="1"
              step="1"
              id="quantity"
              name="quantity"
              value={invoice.quantity}
              placeholder="Quantity"
            />
          </div>
          <div className={classes.control}>
            <input
              onChange={handleChange}
              type="number"
              min="0.1"
              step="0.01"
              id="price"
              name="price"
              value={invoice.price}
              placeholder="Price"
            />
          </div>
          <br/>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Add Invoice
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default InvoiceForm;
