
# Database Task - REST API with MongoDB and ExpressJS

## Objective
Create a REST API using ExpressJS and Mongoose to manage posts with CRUD operations (Create, Read, Update, Delete).

## Technologies Used
- Node.js
- ExpressJS
- MongoDB
- Mongoose
- Nodemon

## Project Setup

1. Clone the repository:

   git clone <repository-url>
  
2. Install dependencies:
  
   npm install
 
3. Start the server:
 
   npm run dev
 
4. Make sure MongoDB is running locally at:

   mongodb://127.0.0.1:27017/databaseTask
 

## API Endpoints

| Method | Route               | Description                     |
|--------|-------------------|---------------------------------|
| GET    | /api/getPosts      | Get all posts                   |
| POST   | /api/addPosts      | Add a new post                  |
| DELETE | /api/delPosts/:id  | Delete a post by ID             |
| PATCH  | /api/post/:id      | Update a post by ID             |

## Example Request Body for POST / PATCH

{
  "title": "My First Post",
  "content": "This is the content of my post."
}


## Notes
- Use tools like Postman to test the API endpoints.
- Ensure MongoDB is running locally before starting the server.
- All routes are prefixed with `/api`.
