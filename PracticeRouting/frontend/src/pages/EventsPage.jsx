import EventsList from "../components/EventsList";
import axios from "axios";

export default function EventsPage() {
  return (
    <>
      <EventsList></EventsList>
    </>
  );
}

export async function loader() {
  const reponse = await axios.get("http://localhost:8080/events");
  if (!reponse) {
    throw {
      message: "Error Occured! Something Went Wrong",
      staus: 500,
    };
  }
  return reponse.data.events;
}
