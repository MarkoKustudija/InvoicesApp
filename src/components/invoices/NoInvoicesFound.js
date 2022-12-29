
import classes from './NoInvoicesFound.module.css';
import { Link } from 'react-router-dom';
import React from 'react';

const NoInvoicesFound = (props) => {
  return (
    <div className={classes.noinvoices}>
      <p>No invoices yet!</p>
      <Link className='btn' to='/new-invoice'>
        Add new Invoice 
      </Link>
    </div>
  );
};

export default NoInvoicesFound;
