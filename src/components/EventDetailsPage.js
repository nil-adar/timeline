import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EventDetailsPage = ({ events }) => {
  const { eventId } = useParams();
  const event = events.find(e => e.id === parseInt(eventId));
  const navigate = useNavigate();

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="event-details-page">
      <button onClick={() => navigate(-1)}>חזור</button>
      <h2>{event.title}</h2>
      <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
      <p><strong>Location:</strong> {event.location}</p>
      <p><strong>Description:</strong> {event.description}</p>
    </div>
  );
};

export default EventDetailsPage;
