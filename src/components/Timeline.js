import React from 'react';
import { Link } from 'react-router-dom';

const Timeline = ({ events }) => {
  return (
    <div>
      <h1>Events Timeline</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.date}</p>
            <p>{event.location}</p>
            <p>{event.description}</p>
            <Link to={`/event/${event.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
