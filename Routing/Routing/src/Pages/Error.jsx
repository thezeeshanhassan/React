import MainNavigation from "../Components/MainNavigation";
import "../index.css";

export default function Error() {
  return (
    <>
      <MainNavigation></MainNavigation>
      <main>
        <h1>Page Not Found</h1>
        <p>An Error Occured</p>
      </main>
    </>
  );
}
