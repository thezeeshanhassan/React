import { Outlet } from "react-router-dom";
import MainNavigation from "../Components/MainNavigation";
import "../index.css";
export default function Root() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
