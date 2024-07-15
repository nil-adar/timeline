# My Project Timeline 

## Description
for now :
stage 1 
the  project is a single-page application  built with React. It displays a timeline of events, allows filtering of events by category and location, and supports a dark mode toggle.

## Components

### App.js

The main entry point of the application. It sets up the routes, manages global state, and handles API requests to fetch event data.

### Timeline.js

A component that displays a list of events in a timeline format. It receives event data as props and renders each event in the appropriate order.

### EventDetailsPage.js

A component that displays detailed information about a selected event. It fetches the event data based on the event ID from the URL parameters and renders the event details.

### ToggleSwitch.js

A component that provides a toggle switch to enable or disable dark mode. It updates the global state to switch between light and dark themes.




Contains the global styles for the application, including styles for light and dark modes, and specific styles for the timeline and event details components.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository
2. Start the development server: `npm start`
3. Open your browser and navigate to `http://localhost:3000`
