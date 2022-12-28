import { useState } from "react";
import CreateArea from "../components/CreateArea";

const NewInvoice = (props) => {

const [invoices, setInvoices] = useState([]);
    const [isThereInvoices, setIsThereInvoices] = useState(false);
  
    function addInvoice(newInvoice) {
      setInvoices((prevState) => {
        return [...prevState, newInvoice];
      });
      console.log('added');
      setIsThereInvoices(true);
      
    }

  return (
    <div>
      <CreateArea onAdd={addInvoice} />
    </div>
  );
};

export default NewInvoice;
