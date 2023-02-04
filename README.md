# LightBnB

The purpose of this project is to design a database and use server-side JavaScript to display the information from queries to web pages. I will be able to apply my existing knowledge of complex SQL queries, database and ERD (entity relationship diagram) design to integrate the database with a Node backend.

In this project, I have:

* Designed the database and create an ERD for the tables.
* Created the database and the tables using the ERD.
* Added fake data to the database to make testing queries easier.
* Wrote queries.
* Connected the database to a JavaScript application in order to interact with the data from a web page.

## Project Structure

```
├── public
│   ├── index.html
│   ├── javascript
│   │   ├── components 
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_property_form.js
│   │   │   ├── property_listing.js
│   │   │   ├── property_listings.js
│   │   │   ├── search_form.js
│   │   │   └── signup_form.js
│   │   ├── index.js
│   │   ├── libraries
│   │   ├── network.js
│   │   └── views_manager.js
│   └── styles
├── sass
└── server
  ├── apiRoutes.js
  ├── database.js
  ├── json
  ├── server.js
  └── userRoutes.js
```

* `public` contains all of the HTML, CSS, and client side JavaScript. 
  * `index.html` is the entry point to the application. It's the only html page because this is a single page application.
  * `javascript` contains all of the client side javascript files.
    * `index.js` starts up the application by rendering the listings.
    * `network.js` manages all ajax requests to the server.
    * `views_manager.js` manages which components appear on screen.
    * `components` contains all of the individual html components. They are all created using jQuery.
* `sass` contains all of the sass files. 
* `server` contains all of the server side and database code.
  * `server.js` is the entry point to the application. This connects the routes to the database.
  * `apiRoutes.js` and `userRoutes.js` are responsible for any HTTP requests to `/users/something` or `/api/something`. 
  * `json` is a directory that contains a bunch of dummy data in `.json` files.
  * `database.js` is responsible for all queries to the database. 
 
## ERD

![Alt text](https://github.com/ive-m/LightBnB/blob/master/images/ERD.png)

## Dependencies

    "bcrypt": "^3.0.6",
    "body-parser": "^1.19.0",
    "cookie-session": "^1.3.3",
    "express": "^4.17.1",
    "nodemon": "^1.19.1",
    "pg": "^8.8.0"
  
## App Set up

  * Create a database in psql with the command=> CRATE DATABASE lightbnb;
  * Run the schema file => \i migrations/01_schema.sql
  * Start the server => In the directory LightBnB_WebApp-master run the command in the terminal: npm run local
  * In your browser type the url=> localhost:3000

  
## Project Functionalities

  * Search => the users search listed properties by city, price or rate.
  * Login => log in if the user has an account.
  * Sign Up => the user creates an account.
  * Create Listing => users list a property for rent.
  * My Listings => show all the listed properties owned by the user.
  * My Reservations => show all reservations that the user has. 

## Screeshots

Load the site
![Alt text](https://github.com/ive-m/LightBnB/blob/master/images/Load.png)

Log in 
![Alt text](https://github.com/ive-m/LightBnB/blob/master/images/Login.png)

Search 
![Alt text](https://github.com/ive-m/LightBnB/blob/master/images/Search.png)

Sign Up 
![Alt text](https://github.com/ive-m/LightBnB/blob/master/images/Sign%20Up.png)

User logged in 
![Alt text](https://github.com/ive-m/LightBnB/blob/master/images/User%20Logged%20in.png)

## Learning Outcomes

  In completing this project, I am able to:
  * Explain the importance and application of SQL/relational databases for web applications.
  * Describe the key components that make up a relational database.
  * Design database tables using primary and foreign keys correctly.
  * Determine if a data model should use one-to-many or many-to-many relationships when designing relational databases.
  * Utilize SELECT statements to solve common data query questions involving GROUP BY, WHERE, LIMIT, ORDER.
  * Utilize CREATE, UPDATE, DELETE statements to modify existing database table structure and records.
  * Use JOIN statements to combine information from related tables to build more complex result sets.
  * Use asynchronous (promise-based) postgres JS libraries to query data from Node applications.
  * Use the psql CLI to interact with and explore a database.
  * Research database queries through documentation and other references.

## Work Outcomes

  By completing this project, I am being prepared to be able to do the following on the job:
  * Troubleshoot and debug problems associated with web development.
  * Demonstrate problem solving skills by developing basic algorithms to solve coding challenges or katas.
  * Evaluate or analyze coding solutions / ideas, and their limitations and/or benefits.
  * Contribute to full-stack web applications using modern software development patterns, tools and workflows.
  * Contribute to the backend of web applications that use industry-standard languages (Ruby) and frameworks (Rails and Express).
  * Integrate into common development team workflows (git, github workflow, automated testing, and code reviews).
  * Extend existing database design, as well as writing realistic SQL queries to CRUD data in SQL databases.
  * Create API services and/or consumers that use modern data formats such as JSON.