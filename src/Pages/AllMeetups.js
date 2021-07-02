import React, { useState, useEffect } from "react";

import MeetupList from "../Components/Meetups/MeetupList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const loadData = async () => {
      const response = await fetch(
        "https://react-meetup-wab-app-default-rtdb.firebaseio.com/meetups.json"
      );
      const data = await response.json();
      const meetups = [];
      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key],
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    };
    loadData();
  }, []);

  if (isLoading) {
    return (
      <section>
        <h3>Loading...</h3>
      </section>
    );
  }

  return (
    <div>
      <h1>All Splendours</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetups;
