import React, { Fragment } from "react";
import classes from './InvoiceItem.module.css';

const InvoiceItem = (props) => {

  
  return (
    <Fragment>
      <div className={classes.item}>
        <h1> Item name:{props.name}</h1>
        <h3> Quantity: {props.quantity}</h3>
        <h3> Price: {props.price} $</h3>
        <h3> Total : {props.quantity * props.price}  $</h3>
        <button onClick={() => props.onDelete(props.id)}>DELETE</button>
      </div>
    </Fragment>
  );
};

export default InvoiceItem;
