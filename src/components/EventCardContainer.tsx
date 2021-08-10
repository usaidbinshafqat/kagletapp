import firebase from "firebase";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { EventDetails, EventCards } from "./EventCards";
import axios from "axios";

export const GetEventCards = () => {};

export const EventCardContainer = () => {
  const [eventsList, setEventsList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      /** Backup method: REST API */
      //   const result = await axios(
      //     "https://kaglet-91224-default-rtdb.firebaseio.com/events.json"
      //   );
      // console.log(Object.values(result.data));
      // setEventsList(Object.values(result.data));

      let allEvents = firebase.database().ref("events");

      allEvents.once("value").then((snapshot) => {
        console.log(snapshot.val());
        setEventsList(Object.values(snapshot.val()));
      });
    };
    fetchData();
  }, []);

  console.log("eventsList", eventsList);

  return (
    <>
      {Object.values(eventsList).map((event: any) => (
        <EventCards
          name={event.name}
          time={event.time}
          location={event.location}
        />
      ))}
    </>
  );
};
