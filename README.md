<h1>🌟 About Middleware </h1>
<p>Middleware is required for helping developers in building applications more effectively and efficiently. The middleware will act as a connection between data, 
applications, and the users. These middleware in node.js is a function that will have all the access for requesting an object, responding to an object, and moving to
the next middleware function in the application request-response cycle.  </p>
<p> Middleware are like any general functions which takes three parameters request, response and next function. These middleware are used to execute some function 
before the response is send to the client. It mostly gets used for authentication, that before we send the response, we can authenticate if the API request is 
called from the client with proper user credentials or not. These middleware can be applied on the whole application level as well as on one particular API route.</p>

<h2>⭐ next() function </h2>
<p>Next function is a very important, after the end of each middleware we should execute next function so that the program execution can move either to next middleware 
or the main route,if this function is not added then execution will not move forward.</p>
