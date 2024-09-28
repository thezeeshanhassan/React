import EventsList from "../components/EventsList";
import axios from "axios";

export default function EventsPage() {
  return (
    <>
      <EventsList></EventsList>
    </>
  );
}

export async function eventLoader() {
  const reponse = await axios.get("http://localhost:8080/events");
  return reponse.data.events;
}
