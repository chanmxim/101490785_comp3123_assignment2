# COMP3123 Assignment 1 - Express & MongoDB API

This is a simple Express.js application using MongoDB(+mongoose) for managing users and employees.

> **Note:** The repository includes a `.env` file for easy local testing. I know that `.env` should **not** be included in a repository, but it is included here for convenience since this is just an assignment.

---

## Deployment link

https://101490785comp3123assignment1deploym.vercel.app/

Repository of the deployment: https://github.com/chanmxim/101490785_comp3123_assignment1_deployment

---

## Instructions to Run Locally

1. **Clone the repository**  
```bash
git clone git@github.com:chanmxim/101490785_COMP3123_Assignment1.git
cd 101490785_COMP3123_Assignment1
```

2. **Install dependencies**  
```bash
npm i
```

3. **Run the application**  
```bash
npm run dev
```
or
```bash
npm run start
```

4. **Troubleshooting**  
- If there are any errors, they are most likely related to the database connection.  
- If the app cannot connect to the provided MongoDB Atlas, replace the connection string in `.env` with your own MongoDB Atlas URI.  
- Ensure that a database named `comp3123_assignment1` exists in your MongoDB cluster.

---

## Postman Instructions

> **Note:** The provided json collection contains requests for local testing **only**

1. **Import Collection**  
   - Import the provided JSON collection into Postman.

2. **Initial Data**  
   - Initially, the database will be empty.  
   - Create at least 1 users and 2 employees first using the **POST** requests.

3. **Testing GET Requests**  
   - Use the **GET** requests to retrieve all users or employees.  
   - Copy the `_id` from the response to use for other requests.

4. **Using IDs for Other Requests**  
   - For **GET by ID**, **DELETE**, and **PUT** requests, replace the EID parameter/query with the EID copied from the GET responses.  
   - This ensures that the requests target the correct document in the database.
