# guanoBot
Facebook Messenger Bot for casual conversation and simple calendar functionality


Used NodeJS to set up a local webhook ExpressJS server, then created a grok proxy server to connect it to Facebook. Then connected it to Dialogflow to allow for actual conversation to happen as well as created intents that would allow for reminders for events, homework, etc. to be scheduled from user messages. Fully functional except for one webhook that still needs to be connected for reminders. 

ToDo: Create a small Mongo DB to store schedule events, for easy retrievals for when users say something along the lines of "show all reminders"
