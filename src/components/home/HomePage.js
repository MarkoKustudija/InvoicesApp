import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {


  const [isThereInvoices, setIsThereInvoices] = useState(false);


  return (
    <div className={classes.home}>
      {!isThereInvoices && <h1>No invoices yet!</h1>}
      <Link className="btn" to="/new-invoice">
        Add new Invoice
      </Link>
    </div>
  );
};

export default HomePage;
