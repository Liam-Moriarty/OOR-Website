import React from "react";
import "./event.css";
import { events } from "../../../constants/constants";

const Events = () => {
  return (
    <section className="sectionContainer eventExtended">
      <h2>GET INVOLVED</h2>
      <div className="events-wrapper">
        {events.map((event) => (
          <div key={event.id} className="events">
            <img src={event.bgImg} alt="events img" />
            <div className="events-info">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;
