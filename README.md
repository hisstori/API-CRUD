# MERN Project (back-end)
Building out the back-end of an API, using node.js, mongoose ODM, MongoDB.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Express.js
MongoDB
Mongoose ODM
Node.js
```

### Installing

Clone this down to your local machine and open the project folder. Once inde the project folder install the related packages with...
```
npm install
```

Navigate into your cloned directory and start your localhost by issuing the following in your CLI...
```
node lib/db/seed.js
```

After you seed your database you can run your server with the following command...
```
node lib/index.js
```

Next issue the following in a seperate terminal to run your local MongoDB database and mongo shell...
```
mongo
```

Once you have your mongo shell running you may issue a number of commands, but we will starrt with these just to get a bit of sample information...
```
show dbs //will show all current databases
use books-api //will switch to books-api database
```

## API Endpoints
```
/books/     <- All books.
```
```
/books/id/:id     <- Book id detail page.
```
```
/authors/:authors     <- Search for one author.
```
```
/categories/:categories     <- Search for specific categories.
```

## Built With These Technologies

* [Express](http://expressjs.com/en/starter/installing.html) - Back-End framework used for the application.
* [MongoDB](https://www.mongodb.com/) - Database used for user information.
* [Mongoose ODM](https://mongoosejs.com/) - Object Data Modeling library used.
* [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) - Cloud database used to handle deployment.
* [NodeJs](https://nodejs.org/en/) - JavaScript runtime used.
* [Heroku](https://www.heroku.com/) - Hosted site for deployment.

### Packages Used

* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
* [cors](https://www.npmjs.com/package/cors) - CORS is a node.js package for providing a Connect/Express    middleware that can be used to enable CORS with various options.
* [node-fetch](https://www.npmjs.com/package/node-fetch) - A light-weight module that brings window.fetch to Node.js

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Ryan Brown** - *All work completed* - [GitHub](https://github.com/Hisstori)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Zakk
* Paula
* SEI 35 cohort
