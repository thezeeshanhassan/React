import { useLoaderData, useParams } from "react-router-dom";
import EventItem from "../components/EventItem";
import axios from "axios";

export default function EventDetailPage() {
 
  const data = useLoaderData();
   console.log(data.data.events[0]);
  return (
    <>
      <EventItem event={data.data.events[0]}></EventItem>
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
