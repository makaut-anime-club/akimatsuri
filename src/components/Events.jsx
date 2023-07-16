import React, { useEffect, useState } from "react";

// import events from "../json/events";
import "./Events.css";
import content from "../json/content";
import Card from "./UI/Card";

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(
        () => {
            const fetchEvents = async () => {
                const response = await fetch('https://akimatsuri-makaut-default-rtdb.asia-southeast1.firebasedatabase.app/events.json')
                const resData = await response.json();

                const loadedEvents = [];

                for(const key in resData) {
                    loadedEvents.push(
                        {
                            id: key,
                            name: resData[key].name,
                            imageURL: resData[key].image,
                            imageAltText: resData[key].imageAlt,
                            description: resData[key].description,
                            details: resData[key].details,
                            link: resData[key].link,
                        }
                    )
                }
                setEvents(loadedEvents);
            }
            fetchEvents();
        }
    ,[])
  return (
    <section id="events" className="events">
      <div className="bg-image">
        <div className="content">
          <h1>{content.events.title}</h1>
          <ul className="cards">
            {events.map((event) => (
              <li key={event.id}>
                <Card
                  title={event.name}
                  body={event.description}
                  link={event.link}
                  imgLink={event.imageURL}
                  imgDescription={event.name}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Events;
