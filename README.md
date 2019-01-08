# Eat-Da-Burger!

## Description
Eat-Da-Burger! is an app that lets users input the names of burgers they would like to eat. After adding a burger - it will appear in a list on the left side of the screen with a button that allows the user to "devour" it. Once the user decides to devour the burger - it will be moved to a list on the  right side of the screen. 

## Tools Used
This simple full stack app is architected in MVC and written in JavaScript using the following:
Node Express server to monitor user input,
Express-Handlebars for HTML templating and rendering to the screen,
MySQL for our database structure,
ORM - instead of interacting directly with MySQL we use an orm written in Javascript,
and of course there is some HTML and CSS.

## Design
Eat-Da-Burger! is designed with MVC in mind. Our model is housed within the burger.js file within the Models directory. Views are held within the views folder and our controllers are all housed within burgers_controller.js. 

## Demo
You can demo Eat-Da-Burger! [here]().

## Additional Tasks to be Completed
[ ] UI needs to be cleaned up.
[ ] Add Delete button to "already devoured" side of the screen.
[ ] Right justify buttons for appearance.
[ ] Allow longer burger descriptions in more convenient form. Then wrap them in the above lists.