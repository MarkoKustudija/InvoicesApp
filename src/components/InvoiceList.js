
import { useState } from "react";
import InvoiceItem from "./InvoiceItem";

const InvoiceList = (props) => {

  
  return (
    <div>
      {props.invoices.map((item, index) => {
        return (
          <InvoiceItem
            key={index}
            id={index}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDelete={props.onDelete}
          />
        );
      })}
    </div>
  );
};

export default InvoiceList;
