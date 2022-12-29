import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> Invoice App </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" activeClassName={classes.active}>
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink to="/invoices" activeClassName={classes.active}>
              All Invoices
            </NavLink>
          </li>
          <li>
            <NavLink to="/new-invoice" activeClassName={classes.active}>
              New Invoice
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
