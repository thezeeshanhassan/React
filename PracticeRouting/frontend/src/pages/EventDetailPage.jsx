import { redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
import axios from "axios";

export default function EventDetailPage() {
  const res = useRouteLoaderData("event-detail");
  return (
    <>
      <EventItem event={res.data.events[0]}></EventItem>
    </>
  );
}

export async function loader({ params }) {
  const id = params.eventId;
  const response = await axios.get("http://localhost:8080/events", {
    id: id,
  });
  if (!response) {
    throw {
      message: "Could Not Fetch Details For Event",
      status: 500,
    };
  } else {
    return response;
  }
}

export async function action({ params }) {
  console.log("Hello");
  const id = params.eventId;
  const response = await axios.delete(`http://localhost:8080/events/${id}`);

  if (response.statusText != "OK") {
    throw {
      message: "Could Not Delete Event",
      status: 500,
    };
  }
  return redirect("/events");
}
