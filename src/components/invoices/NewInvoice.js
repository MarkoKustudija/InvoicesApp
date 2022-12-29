
import InvoiceForm from "./InvoiceForm";

const NewInvoice = (props) => {

//   const [invoices, setInvoices] = useState([]);

//   const [isEntering, setIsEntering] = useState(false);

//   const history = useHistory();

//   useEffect(() => {
//     if (isEntering) {
//       history.push("/invoices");
//     }
//   }, [isEntering, history]);

//   const addInvoiceHandler = (newInvoice) => {
//     setInvoices((prevValue) => {
//       return [...prevValue, newInvoice];
//     });
//   };

  return <InvoiceForm onAdd={props.onAdd} />;
};

export default NewInvoice;
