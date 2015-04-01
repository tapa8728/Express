# Express
http://expressjs.com/starter/hello-world.html

# Set up Express Skeleton App
**npm init** ...  to help initialize a Package.json file

**npm install express-generator** ... Use the application generator tool, express, to quickly create a application skeleton.

**express myapp** ... the following creates an Express app named myapp in the current working directory. 

**npm install** ... install the dependencies

**DEBUG=myapp ./bin/www** ... run the app

The app starts a server and listens on port 3000 for connection. It will respond with “Hello World!” for requests to the homepage. For every other path, it will respond with a 404 Not Found.

Save the code in a file named app.js and run it with the following command.
**node app.js**

# Basic Routing Tutorial 
- Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
- Each route can have one or more handler functions, which is / are executed when the route is matched.
- Route definition takes the following structure
- **app.METHOD(PATH, HANDLER)**, where app is an instance of express, **METHOD** is an HTTP request method, **PATH** is a path on the server, and **HANDLER** is the function executed when the route is matched.

# Routing
- Routing refers to the definition of end points (URIs) to an application and how it responds to client requests.
- A route is a combination of a URI, a HTTP request method (GET, POST, and so on), and one or more handlers for the endpoint. - A **route method** is derived from one of the HTTP methods, and is attached to an instance of express.
- Express supports the following routing methods corresponding to HTTP methods: **get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, and connect.**
- *To route methods which translate to invalid JavaScript variable names, use the bracket notation. For example, app['m-search']('/', function ...*
- **app.all()** which is not derived from any HTTP method. It is used for loading middleware at a path for all request methods.

# Route Paths
- Route paths, in combination with a request method, define the endpoints at which requests can be made to. They can be strings, string patterns, or regular expressions.

# Route Handlers

