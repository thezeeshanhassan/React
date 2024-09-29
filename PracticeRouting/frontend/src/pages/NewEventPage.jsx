import EventForm from "../components/EventForm";
export default function NewEventPage() {
  return (
    <>
      <EventForm method={"POST"}></EventForm>
    </>
  );
}

// export async function action({ request, params }) {
//   const data = await request.formData();

//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };

//   const response = await axios.post("http://localhost:8080/events", eventData, {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   if(response.status === 422) {
//     return response;
//   }

//   if(!response.statusText == "OK") {
//     throw {
//       message : "Error Occured! Could Not Save",
//       status : 500
//     }
//   }
//   return redirect("/events");
// }
