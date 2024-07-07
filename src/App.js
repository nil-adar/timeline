import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import eventData from './data.json';
import Timeline from './components/Timeline';
import EventDetailsPage from './components/EventDetailsPage';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  const [category, setCategory] = useState('all');
  const [location, setLocation] = useState('all');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isNightMode, setIsNightMode] = useState(false);
  const [yearRange, setYearRange] = useState({ start: 1900, end: new Date().getFullYear() });

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleYearRangeChange = (event) => {
    const { name, value } = event.target;
    setYearRange(prevRange => ({
      ...prevRange,
      [name]: parseInt(value)
    }));
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    let filtered = [];
    if (category === 'all') {
      filtered = eventData.events;
    } else {
      filtered = eventData.events.filter(event => event.categories.includes(category));
    }

    if (location !== 'all') {
      filtered = filtered.filter(event => event.location === location);
    }

    filtered = filtered.filter(event => {
      const eventYear = new Date(event.date).getFullYear();
      return eventYear >= yearRange.start && eventYear <= yearRange.end;
    });

    filtered.sort((a, b) => new Date(a.date) - new Date(b.date));

    setFilteredEvents(filtered);
    setEvents(filtered);
  }, [category, location, yearRange]);

  const generateYearOptions = (start, end) => {
    const options = [];
    for (let year = start; year <= end; year += 10) {
      options.push(<option key={year} value={year}>{year}</option>);
    }
    return options;
  };

  const generateLocationOptions = () => {
    const locations = [...new Set(eventData.events.map(event => event.location))];
    return locations.map(location => <option key={location} value={location}>{location}</option>);
  };

  return (
    <Router>
      <div className={`App ${isNightMode ? 'night-mode' : 'day-mode'}`}>
        <ToggleSwitch isNightMode={isNightMode} toggleNightMode={toggleNightMode} />
        <header className="App-header">
          <select onChange={handleCategoryChange} value={category}>
            <option value="all">All</option>
            <option value="wars">Wars</option>
            <option value="israeliEvents">Israeli Events</option>
            <option value="historic">Historic</option>
            <option value="space">Space</option>
          </select>
          <select onChange={handleLocationChange} value={location}>
            <option value="all">All Locations</option>
            {generateLocationOptions()}
          </select>
          <div>
            <label>
              Start Year:
              <select
                name="start"
                value={yearRange.start}
                onChange={handleYearRangeChange}
              >
                {generateYearOptions(1900, new Date().getFullYear())}
              </select>
            </label>
            <label>
              End Year:
              <select
                name="end"
                value={yearRange.end}
                onChange={handleYearRangeChange}
              >
                {generateYearOptions(1900, new Date().getFullYear())}
              </select>
            </label>
          </div>
          <Routes>
            <Route path="/" element={<Timeline events={filteredEvents} />} />
            <Route path="/event/:eventId" element={<EventDetailsPage events={events} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
