import { useState } from "react";
import InvoiceList from "../components/InvoiceList";


const DUMMY_ITEMS= [
  {
    id: 1,
    name: 'Toilet Paper',
    quantity: 1,
    price: 10.99 
  },
  {
    id: 2,
    name: 'Bread',
    quantity: 2,
    price: 3.44
  }

]

const Invoices = (props) => {

  const [invoices, setInvoices] = useState([]);

  const deleteInvoice = (id) => {
    setInvoices(prevStates => {
      return prevStates.filter(( item, index) => {
        return index !== id;
      });
    });
    console.log('deleted');
  }
 
  return (
    <div>
      <InvoiceList invoices={invoices}  onDelete = {deleteInvoice}/>
    </div>
  );
};

export default Invoices;
