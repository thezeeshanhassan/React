import { useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
export default function EditEventPage() {
  const res = useRouteLoaderData("event-detail");
  return (
    <>
      <EventForm event={res.data.events[0]} method={"PATCH"}></EventForm>
    </>
  );
}


