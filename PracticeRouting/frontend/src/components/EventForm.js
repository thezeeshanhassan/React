import { Form, useNavigate, useNavigation, redirect } from "react-router-dom";
import axios from "axios";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  // console.log(isSubmitting)
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          defaultValue={event ? event.title : ""}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          defaultValue={event ? event.image : ""}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          defaultValue={event ? event.date : ""}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          defaultValue={event ? event.description : ""}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;

export async function action({ request, params }) {
  const data = await request.formData();
  console.log(params);
  const id = params.eventId;
  const method = request.method;
  console.log(method + " " + id);

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events/";
  if (method == "PATCH") {
    url = url + id;
  }

  // const response = await axios.method(url, eventData, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  const response = await axios({
    method: method, // Dynamically use POST or PATCH
    url: url,
    data: eventData,
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.statusText == "OK") {
    throw {
      message: "Error Occured! Could Not Save",
      status: 500,
    };
  }
  return redirect("/events");
}
