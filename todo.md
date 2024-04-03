##Server-side File Structure

The server directory contains all the files related to the backend of your application. Here’s a suggested file structure for the server directory:

config: This directory holds configuration files for your backend, such as database connection settings, environment variables, and middleware configurations.

controllers: Each route or resource in your application can have its own controller file. These files contain the logic for handling requests, processing data, and generating responses.

models: This directory contains the database models or schemas for your application. Each model represents a specific data structure and handles interactions with the database.

routes: The API routes for your application reside in this directory. Each route file is responsible for defining the endpoints, mapping them to the appropriate controller functions, and handling request validation and authentication.

server.js: This file acts as the entry point for your backend application. It sets up the Express server, establishes database connections, and defines middleware configurations.


Now i need to set up the backend and set up the schema


first i need to figure this shit out yar the controllers , configs , routes etc 



Dynamic Task ID Generation
Creating a Task: When a new task is created through the frontend (e.g., a user submits a form to add a new task), the frontend sends a request to the backend to create the task. The backend then generates a unique ID for the new task (often using MongoDB's ObjectId or a similar mechanism), stores the task in the database, and returns the newly created task, including its ID, back to the frontend.
Storing the Task ID: The frontend receives the newly created task, including its ID, and typically updates the UI to display the new task. The task's ID is stored in the frontend's state or in a local storage mechanism, so it can be used later for operations like updating or deleting the task.
Using the Task ID: When the user wants to perform an operation on the task (e.g., marking it as completed, editing its details, or deleting it), the frontend retrieves the task's ID from where it was stored. This ID is then included in the request to the backend, allowing the backend to identify which task the operation should be applied to.


so here basically i will decide what controller function i should have in here 


for the tasks

1. create a single task   POST 

2. get all the tasks of the current user  GET   

<!-- 3. get a single task of the current user  GET    will not do this below the reason  -->


so the difference between 2 and 3 is that we will use the get single task when the user is logged in its not that ki whenever the user will create a task we will 

rerender the whole list 

what if i rerender the whole list in reverser order so that the new task will be on the top
so by that i think i dont need to create the step 3


step 4. update a single task of the current user  PUT

step 5. delete a single task of the current user  DELETE

step 6. delete all the tasks of the current user  DELETE
