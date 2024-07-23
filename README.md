## Create a course selling website

### Description

For this project, we need to create a course selling website similar to the last one, but with JWTs for authentication. We'll introduce sign-in endpoints for both users and admins. For every authenticated request, we'll send the JWT in headers (Authorization: "Bearer <actual token>"). MongoDB will be used to store all the data persistently.

## Routes

### Admin Routes:

- POST /admin/signup
  Description: Creates a new admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { message: 'Admin created successfully' }
- POST /admin/signin
  Description: Logs in an admin account.
  Input Body: { username: 'admin', password: 'pass' }
  Output: { token: 'your-token' }
- POST /admin/courses
  Description: Creates a new course.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
  Output: { message: 'Course created successfully', courseId: "new course id" }
- GET /admin/courses
  Description: Returns all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

### User routes

- POST /users/signup
  Description: Creates a new user account.
  Input: { username: 'user', password: 'pass' }
  Output: { message: 'User created successfully' }
- POST /users/signin
  Description: Logs in a user account.
  Input: { username: 'user', password: 'pass' }
  Output: { token: 'your-token' }
- GET /users/courses
  Description: Lists all the courses.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
- POST /users/courses/:courseId
  Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { message: 'Course purchased successfully' }
- GET /users/purchasedCourses
  Description: Lists all the courses purchased by the user.
  Input: Headers: { 'Authorization': 'Bearer <your-token>' }
  Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }


To run this project locally, follow these steps:

1. Clone the Repository
Clone the repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/Nabeel-N/course-selling-app-jwt.git
2. Navigate to the Project Directory
Change to the project directory:

bash
Copy code
cd course-selling-app-jwt
3. Install Dependencies
Install the necessary dependencies using npm:

bash
Copy code
npm install
4. Set Up Environment Variables
Create a .env file in the root directory of the project. This file should include the environment variables required by the application. Example .env file content:

php
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-address>/<database>
PORT=3000
Replace <username>, <password>, <cluster-address>, and <database> with your actual MongoDB credentials and details.

5. Run the Application
Start the application using:

bash
Copy code
npm start
Your server will be running at http://localhost:3000.

6. API Documentation
Refer to the API documentation for details on available routes and how to use them.

