import firebase from "firebase";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { EventDetails, EventCards } from "./EventCards";
import moment from "moment";

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

      var dateToday = new Date();

      dateToday.setHours(dateToday.getHours() - 2);

      var timeTwoHoursAgoMS = dateToday.getTime();

      console.log(dateToday);

      let allEvents = firebase
        .database()
        .ref("events")
        .startAfter(timeTwoHoursAgoMS)
        .orderByChild("eventTime");

      allEvents.once("value").then((snapshot) => {
        // console.log(snapshot.val());
        // setEventsList(Object.values(snapshot.val()));
        var fetchedEvents = [] as any;
        snapshot.forEach(function (child) {
          fetchedEvents.push(child.val());
        });
        setEventsList(fetchedEvents);
      });
    };
    fetchData();
  }, []);

  console.log("eventsList", eventsList);

  function timeConverter(timeFromFirebase: string) {
    let dateString = timeFromFirebase;
    let stringToDate = new Date(dateString);
    return moment(stringToDate).format("MMMM Do, h:mm a");
  }

  return (
    <>
      {Object.values(eventsList).map((event: any) => (
        <EventCards
          name={event.eventName}
          time={timeConverter(event.eventTime)}
          location={event.eventLocation}
          type={event.eventType}
          email={event.hostEmail}
        />
      ))}
    </>
  );
};
