# tilr-interview

This is the interview test for the full-stack JavaScript developer position at Tilr.

The app is a very basic React/Node/Postgres app for asking and answering yes/no questions.

Currently the app only provides the ability to make new questions and browse existing questions.

It is up to you to add what features you think will be useful while showing off your knowledge of React, Node, SQL, (S)CSS, and programming in general.

Some example features you could consider adding:

- Answering questions does something
- Viewing yes/no answer percentages
- Authentication system
- Allowing text answers for questions
- Only letting question askers see the answers
- Unit tests

These are just options, you're welcome and encouraged to be creative.

## Setting up

Make sure you have [Docker](https://www.docker.com/get-started) and [Node](https://nodejs.org/en/) installed.

### Database

Run `docker-compose up` from the project directory to set up the Postgres DB.

### API

`cd` into the `api` directory and run `npm run dev` to start the Node API.

### React app

`cd` into the `client` directory and run `npm start` to start the React app.

### Migrate and seed

`cd` back into the `api` directory and run `npm run db:refresh` to run the migrations and seed the database.

## Submitting the test

Make a Pull Request into the master branch of this repo when you're done.
Please include a list of changes/features you've added (a txt file is fine).
