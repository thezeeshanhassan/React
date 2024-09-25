import { useEffect } from "react";
import EventList from "../components/EventsList";
const axios = require("axios");

const event = [
  {
    id: "1",
    title: "Event 1",
    date: Date.now(),
    image: "https://aba",
  },
];

export default function EventsPage() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios("/");
      console.log(response);
    };
    fetchData();
  }, []);

  return <EventList events={event}></EventList>;
}
