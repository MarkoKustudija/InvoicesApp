
import InvoiceItem from "./InvoiceItem";
import classes from './InvoiceList.module.css';

const InvoiceList = (props) => {

  
  return (
    <div className={classes.sorting}>
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
