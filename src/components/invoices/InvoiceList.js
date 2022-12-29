import { Fragment } from "react";
import InvoiceItem from "./InvoiceItem";
import classes from "./InvoiceList.module.css";

const InvoiceList = (props) => {
  return (
    <Fragment>
      <ul className={classes.list}>
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
        </ul>
    </Fragment>
  );
};

export default InvoiceList;
