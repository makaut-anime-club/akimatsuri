import React, { useEffect, useState } from "react";

// import events from "../json/events";
import "./Events.css";
import Card from "./UI/Card";

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);

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
            setLoading(true)
            fetchEvents();
            setLoading(false)
        }
    ,[])
  return (
    <section id="events" className="events">
      <div className="bg-image">
        <div className="content">
          {loading && <h1>Loading...</h1>}
          {!loading && <h1>{events.length > 0? 'Events' : 'Nothing  found'}</h1>}
          {!loading && <ul className="cards">
            {events.map((event) => (
              <li key={event.id}>
                <Card
                  title={event.name}
                  body={event.description}
                  link={event.link}
                  imgLink={event.imageURL}
                  imgDescription={event.name}
                  cardBGColor='#7484cf'
                />
              </li>
            ))}
          </ul>}
        </div>
      </div>
    </section>
  );
};

export default Events;
