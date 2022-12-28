


import React, { useState } from "react";

const InvoiceForm = (props) => {

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

  function submitInvoice(event) {
    
    props.onAdd(invoice);
    setInvoice({
      name: "",
      quantity: "",
      price: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
     
        <div>
          <input
            onChange={handleChange}
            type="name"
            id="name"
            name="name"
            value={invoice.name}
            placeholder = "Item Name"
          />
        </div>
        <div>
          <input
            onChange={handleChange}
            type="number"
            min="1"
            step="1"
            id="quantity"
            name="quantity"
            value={invoice.quantity}
            placeholder = "Quantity"
          />
        </div>
        <div >
          <input
            onChange={handleChange}
            type="number"
            min="0.1"
            step="0.01"
            id="price"
            name="price"
            value={invoice.price}
            placeholder = "Price"
          />
        </div>
        <button onClick={submitInvoice}> Add </button>
      </form>
      {props.total}
    </div>
  );
}

export default InvoiceForm;
