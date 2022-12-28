import React, { useState } from "react";

const CreateArea = (props) => {

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
        {/* <input
          onChange={handleChange}
          name="name"
          placeholder="Name"
          value={invoice.name}
        />
        <input
          onChange={handleChange}
          number="quantity"
          placeholder="Quantity"
          value={invoice.quantity}
        />
        <input
          onChange={handleChange}
          number="price"
          placeholder="Price"
          value={invoice.price}
        /> */}
        <div>
          {/* <label htmlFor="name">Item Name</label> */}
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
          {/* <label htmlFor="quantity">Quantity</label> */}
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
          {/* <label htmlFor="price">Price</label> */}
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

export default CreateArea;
