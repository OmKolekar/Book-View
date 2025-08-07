import React, { useRef, useState, useEffect, useContext } from 'react';
import { EventContext } from '../context/EventContext';
import InputBar from '../components/InputBar';
import { Link } from 'react-router-dom';

const VisitorPage = () => {
  const [visitorName, setVisitorName] = useState('');
  const inputRef = useRef(null);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const {
    eventName,
    organizer,
    visitors,
    setVisitors
  } = useContext(EventContext);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleCheckIn = () => {
    if (visitorName.trim() === '') return;
    setVisitors([...visitors, visitorName]);
    setWelcomeMessage(`Welcome, ${visitorName}!`);
    setVisitorName('');
    inputRef.current.focus();
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="card border-0 shadow-lg p-4" style={{ width: '100%', maxWidth: '600px' }}>
        <div className="card-body">
          <h3 className="card-title text-center text-primary mb-4">Visitor Check-In</h3>

          {/* Input Section */}
          <div className="mb-3">
            <label className="form-label fw-semibold">Your Name</label>
            <div className="input-group">
              <InputBar
                placeholder="Enter your name"
                value={visitorName}
                onChange={setVisitorName}
                inputRef={inputRef}
              />
              <button
                onClick={handleCheckIn}
                className="btn btn-primary"
              >
                Check In
              </button>
            </div>
          </div>

          {/* Welcome Message */}
          {welcomeMessage && (
            <div className="alert alert-success text-center">
              {welcomeMessage}
            </div>
          )}

          {/* Visitor Count */}
          <div className="text-center mb-3">
            <span className="badge bg-secondary fs-6 px-3 py-2">
              Total Visitors: {visitors.length}
            </span>
          </div>

          {/* Visitor List */}
          {visitors.length > 0 && (
            <ul className="list-group list-group-flush mb-4">
              {visitors.map((name, index) => (
                <li
                  key={index}
                  className="list-group-item list-group-item-action"
                >
                  {name}
                </li>
              ))}
            </ul>
          )}

          {/* Event Info */}
          <div className="mb-4">
            <p className="mb-1 text-muted">
              <strong>Event:</strong> {eventName || 'Not set'}
            </p>
            <p className="mb-0 text-muted">
              <strong>Organizer:</strong> {organizer || 'Not set'}
            </p>
          </div>

          {/* Navigation */}
          <Link
            to="/event"
            className="btn btn-outline-dark w-100"
          >
            Manage Event Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VisitorPage;
