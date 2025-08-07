import React, { createContext, useState } from 'react';

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [eventName, setEventName] = useState('');
  const [organizer, setOrganizer] = useState('');
  const [visitors, setVisitors] = useState([]);

  const value = {
    eventName,
    setEventName,
    organizer,
    setOrganizer,
    visitors,
    setVisitors
  };

  return (
    <EventContext.Provider value={value}>
      {children}
    </EventContext.Provider>
  );
};
