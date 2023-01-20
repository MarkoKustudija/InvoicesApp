import classes from "./NoInvoicesFound.module.css";
import { Link } from "react-router-dom";
// import React, { useState } from 'react';

const NoInvoicesFound = () => {
  return (
    <div className={classes.noinvoices}>
      <div>
        <p>No invoices yet!</p>
        <Link className="btn" to="/new-invoice">
          Add new Invoice
        </Link>
      </div>
    </div>
  );
};

export default NoInvoicesFound;
