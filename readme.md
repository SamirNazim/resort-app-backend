The first assignment for WEB422 @ Seneca.

This repository was created for Rest-Inn. It utilizes Express and Node for backend, MongoDB for databasing, and bcrypt for password encryption. This program allows the Rest-Inn to add and/or retrieve customers by their ID. In addition, it manages the properties of Rest-Inn by retrieving, deleting, updating and viewing them. 

Each folder was created with modular, seperation of concerns design. A brief overiew of each folder as follows:

services: contains UserServices and PropertyServices. UserServices holds the methods to add a user and retrieve a user from the database by id.
model: contains Property and User schema for the MongoDB database.
middleware: contains validation. This ensures the data entry for specific routes meet the criteria (i.e. ensuring a title, location and price is set for properties).
controllers: contains PropertyController and UserController. This router works in conjuction with server.js to modularize the entire program. Routers in the controller contain the path, validation (if needed), and the methods needed from services.