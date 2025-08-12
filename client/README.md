# Coffee Brew Log Application

## Overview
The Coffee Brew Log application allows users to create, read, update, and delete brew entries. It features a responsive front-end built with React and a back-end powered by Express, communicating via a JSON API.

## Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Visit `http://localhost:3000` to view the application.

## Frontend Structure

- **public/index.html**: The main HTML file where the React app is rendered.
- **src/index.js**: The entry point for the React application.
- **src/App.jsx**: The main component that manages the state of brew entries.
- **src/components/BrewForm.jsx**: Component for creating and editing brew entries.
- **src/components/BrewList.jsx**: Component that displays a list of brew entries.
- **src/components/BrewItem.jsx**: Component that represents a single brew entry.

## Usage
- Users can add new brew entries using the BrewForm component.
- Brew entries are displayed in a list format, allowing users to view all entries.
- Each entry can be edited or deleted as needed.

## API Integration
The frontend communicates with the backend API at `/api/brews` for all CRUD operations. Ensure the backend server is running to interact with the API.

## Responsive Design
The application is designed to be responsive and should work well on both desktop and mobile devices.

## Contributing
Feel free to contribute by submitting issues or pull requests. Your feedback and contributions are welcome!