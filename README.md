# Star Wars Viz React App

## Concept

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Clone the repository

```
git clone https://github.com/mbergevoet/frontend-applications-2021-2022
```

To start the React App you need to run

```
npm start
```

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## :computer: Demo link

If you don't want to clone and run the app localy you can view the live build on heroku by going to the following link\
https://star-wars-viz.herokuapp.com/

# :fax: About the API

For this course I'm using the [Star Wars API](https://swapi.dev/). This API is and open REST API which means you don't need a key to access it. But because it's free you only get 10.000 requests per day. That's still a lot of requests but there is a limit.\
Obiously the API returns JSON String data which I can use to inject it into a HTML page.\
Unfortunatly for me, the API hasn't been updated since 2014. Because of that the newer Star Wars movies aren't available so there isn't as much content.\
<br> Down below I've written examples of possible endpoints and URL's. \

Base URL:

> https://swapi.dev/api/

Example requests:

> https://swapi.dev/api/films/

> https://swapi.dev/api/people/

> https://swapi.dev/api/planets/

> https://swapi.dev/api/species/

> https://swapi.dev/api/starships/

> https://swapi.dev/api/vehicles/

Example single request:

> https://swapi.dev/api/people/1/

Response example:

```js
{

    "name": "Luke Skywalker",
    "height": "172",
    "mass": "77",
    "hair_color": "blond",
    "skin_color": "fair",
    "eye_color": "blue",
    "birth_year": "19BBY",
    "gender": "male",
    "homeworld": "https://swapi.dev/api/planets/1/",
    "films": [
    	"https://swapi.dev/api/films/2/",
    	"https://swapi.dev/api/films/6/",
    	"https://swapi.dev/api/films/3/",
    	"https://swapi.dev/api/films/1/",
    	"https://swapi.dev/api/films/7/"
    ],
    "species": [
    	"https://swapi.dev/api/species/1/"
    ],
    "vehicles": [
    	"https://swapi.dev/api/vehicles/14/",
    	"https://swapi.dev/api/vehicles/30/"
    ],
    "starships": [
    	"https://swapi.dev/api/starships/12/",
    	"https://swapi.dev/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.dev/api/people/1/"

}
```

## :bookmark_tabs: License

This repository uses the [MIT](https://github.com/mbergevoet/frontend-applications-2021-2022/blob/master/LICENSE) license. © Merlijn Bergevoet 2021
