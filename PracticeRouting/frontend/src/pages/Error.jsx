import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  let title = "An Error Occured";
  let message = "Some thing Went Wrong";

  if (error.status === 500) {
    let title = "An Error Occured";
    let message = error.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Sorry! Page Not Found.";
  }
  return (
    <>
      <MainNavigation></MainNavigation>
      <PageContent title={title}>{message}</PageContent>
    </>
  );
}
