JUST WEATHER
A simple application using the endpoing provided by Amply Media.

Startup:
In order to start the app, Angular CLI is required as it utilizes the `ng` command.
If you would like to have an `npm start` version of this application, let me know
and I can create a /dist folder that a `server.js` file reads from.

-- open command line
-- `ng serve`
-- navigate to `localhost:4200`

Conversion Strategies:
As the todo points out, any and all decisions should be made with the idea of optimizing
conversion rates. I have implemeted the `daily_weather` array fromt he object returned from
the endpoint provided by Amply media. It outputs a simple console log describing the functionality
to be added. i.e. to create either a component factory / dialog using angular material with dditional
information of each day. If you would like me to include that functionality, I would be more than happy to.

signup for alerts can also be implemented, not in this current iteration as I didn't want to over-engineer this
test. This would be accomplished using an Angular Material form and a database using mongo and potentially the gmail
api using firebase and cloud functions. I can go into more detail in the implementation if required, or build out
a working model to prove my implementation is slim and efficient.

Agreement link:
The agreement link has been disabled via the `javascript:void(0)` command within the `href` attr.
I can create an additioanl component or dialog with `lorem ipsum` filler if you would like,

Requiring zip and agreement:
This is simple validation perfomred by utilizing angulars built in `ngDoCheck` lifecycle hook to
monitor the length of the zip code string, and to make sure the value of the checkbox is checked.
The button is removed from the DOM until these values equate to true.

Click tracking:
Click tracking is a simple event listener that adds to a `click-count`. I can plug this in to google
analytics if it is required. You will notice this very rudimentary `click counter` at the bottom of the
main page.

