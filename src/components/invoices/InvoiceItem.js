import React, { Fragment } from "react";
import classes from './InvoiceItem.module.css';

const InvoiceItem = (props) => {

  const handleClick = () => {
    props.onDelete(props.id);
  };
  
  return (
    <Fragment>
      <div className={classes.item}>
        <h1> Item name :{props.name}</h1>
        <p> Quantity : {props.quantity}</p>
        <p> Price : {props.price}</p>
        <button onClick={handleClick}>DELETE</button>
      </div>
    </Fragment>
  );
};

export default InvoiceItem;
