import React, { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import classes from "./InvoiceForm.module.css";
import Card from "../UI/Card";

const InvoiceForm = (props) => {
  const [isEntering, setIsEntering] = useState(false);

  const nameInputRef = useRef();
  const quantityInputRef = useRef();
  const priceInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    props.onAdd({name: enteredName, quantity: enteredQuantity, price: enteredPrice});
    
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
              // onChange={handleChange}
              type="name"
              id="name"
              name="name"
              // value={invoice.name}
              placeholder="Item Name"
              ref = {nameInputRef}
            />
          </div>
          <div className={classes.control}>
            <input
              // onChange={handleChange}
              type="number"
              min="1"
              step="1"
              id="quantity"
              name="quantity"
              // value={invoice.quantity}
              placeholder="Quantity"
              ref = {quantityInputRef}
            />
          </div>
          <div className={classes.control}>
            <input
              // onChange={handleChange}
              type="number"
              min="0.1"
              step="0.01"
              id="price"
              name="price"
              // value={invoice.price}
              placeholder="Price"
              ref = {priceInputRef}
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
