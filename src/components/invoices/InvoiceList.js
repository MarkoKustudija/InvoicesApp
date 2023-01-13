import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import InvoiceItem from "./InvoiceItem";
import classes from "./InvoiceList.module.css";

// helper function
const sortInvoices = (inovices, ascending) => {
  return inovices.sort((invoiceA, invoiceB) => {
    if (ascending) {
      return invoiceA.id > invoiceB.id ? 1 : -1;
    } else {
      return invoiceA.id < invoiceB.id ? 1 : -1;
    }
  });
};

const data = [
  {
    price : -1,
    quantity: -1
  }
];

const InvoiceList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isSortingDESC = queryParams.get("sort") === "desc";

  const sortedInvoices = sortInvoices(props.invoices, isSortingDESC);
  // const invoices = [sortedInvoices];
  // const [invoices, setInvoices] = useState([sortedInvoices]);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingDESC ? "asc" : "desc"}`,
    });
  };

  // useEffect(() => {
  //   localStorage.setItem("my_key", JSON.stringify(invoices));
  // }, [invoices]);

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("my_key"));
  //   if (items) {
  //     setInvoices(items);
  //   }
  // }, []);

  console.log(data);

  function InvoiceTotal ({
    invoices}) {
      const total = invoices.reduce((acc, invoice) => acc + invoice.price * invoice.quantity, 0);
      return <div className={classes.total}><h1>All Invoices Total : {total} $</h1></div>
    }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandler}>
          Sort {!isSortingDESC ? "Ascending" : "Descending"}{" "}
        </button>
      </div>

      <ul className={classes.list}>
        {sortedInvoices.map((item, index) => {
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
        < InvoiceTotal invoices =  {sortedInvoices} />
      </ul>      
    </Fragment>
  );
};

export default InvoiceList;
