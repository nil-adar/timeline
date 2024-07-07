import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EventDetailsPage = ({ events }) => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const event = events.find(e => e.id === parseInt(eventId));

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details-page">
      <button className="back-button" onClick={() => navigate('/')}>חזור</button>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {event.date}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
  );
};

export default EventDetailsPage;
