import React, { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import InputBar from '../components/InputBar';
import { Link } from 'react-router-dom';

const EventPage = () => {
  const { eventName, setEventName, organizer, setOrganizer } = useContext(EventContext);
  const [newEventName, setNewEventName] = useState(eventName);
  const [newOrganizer, setNewOrganizer] = useState(organizer);

  const handleSave = () => {
    setEventName(newEventName);
    setOrganizer(newOrganizer);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Event Info Manager</h2>

      <div className="mb-3">
        <InputBar
          placeholder="Enter Event Name"
          value={newEventName}
          onChange={setNewEventName}
        />
      </div>

      <div className="mb-3">
        <InputBar
          placeholder="Enter Organizer Name"
          value={newOrganizer}
          onChange={setNewOrganizer}
        />
      </div>

      <button onClick={handleSave} className="btn btn-success mb-3">
        Save Event Info
      </button>

      <div className="mb-3">
        <p><strong>Current Event:</strong> {eventName || 'No event set'}</p>
        <p><strong>Organizer:</strong> {organizer || 'No organizer set'}</p>
      </div>

      <Link to="/" className="btn btn-outline-primary">
        Back to Check-In
      </Link>
    </div>
  );
};

export default EventPage;
