import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";
export default function MainNavigation() {
  console.log(classes);
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/product"}
                className={({ isActive }) => {
                  return isActive ? classes.active : undefined;
                }}
              >
                Product
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
