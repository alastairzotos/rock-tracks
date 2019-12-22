# Rock Tracks

## Usage
```
npm start
```

Then go to http://localhost:9001


## Documentation

The application is built with Typescript and uses a client/server structure.

### Server

The server uses an Express server to deliver pages and respond to requests for tracks.

There are three endpoints:
* `/get-tracks` gets a list of 50 rock tracks
* `/get-track` gets a single track by ID
* `*` is everything else, in this case the pages `/` and `/track`

### Client

The client uses React, React Router DOM, Redux (including React-Redux and Redux-Observable) and RxJS, and is compiled with webpack & Typescript.

It has a simple module system, whereby a module consists of Redux Epics and reducers, and pages.
This is all defined in `client/src/core`.

The application is an instance of a module. It has actions for loading and settings tracks and errors, and a corresponding reducer.

There are two Epics: one for fetching all tracks and one for fetching an individual track.

There are also two pages: a home page and a track details page.
It uses the `@loadable/component` package to optimize loading of pages.


## Future improvements

* Write some tests
* Add a linter
* More webpack optimisations and structure in general, including aliasing some parts such as `core`
* Add Babel for more browser compatibility
* Separate out the fetch endpoints into an object
* Make the module system more generic
* Maybe split up the reducer
* Remove inline styling and put into external CSS classes
* Create a 404 page
* Maybe more specific error messages
* A type-safe `createReducer` function that doesn't require a `switch` statement
* Probably more...
