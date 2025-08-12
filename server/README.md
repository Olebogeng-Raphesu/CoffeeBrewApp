# Coffee Brew Log Application - Backend

## Overview
The Coffee Brew Log application is a full-stack application that allows users to create, read, update, and delete brew entries. The backend is built using Node.js and Express, providing a RESTful API for the frontend to interact with.

## Setup Instructions

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (for database storage)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd coffee-brew-log-app/backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB database and update the connection string in `src/app.js`.

### Running the Application
To start the backend server, run:
```
npm start
```
The server will run on `http://localhost:5000` by default.

## API Endpoints

### Brew Entries
- **GET /api/brews**: Retrieve all brew entries.
- **POST /api/brews**: Create a new brew entry.
- **PUT /api/brews/:id**: Update an existing brew entry by ID.
- **DELETE /api/brews/:id**: Delete a brew entry by ID.

## Folder Structure
- `src/app.js`: Entry point of the application, sets up the server and middleware.
- `src/controllers/brewsController.js`: Contains the logic for handling brew-related requests.
- `src/models/brew.js`: Defines the Brew model and schema.
- `src/routes/brews.js`: Contains the routes for brew entries.

## License
This project is licensed under the MIT License.