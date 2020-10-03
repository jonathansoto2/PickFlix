require('dotenv/config');

const express = require('express');
const app = express();
const mongoose = require('./database/mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const Movies = require('./database/db_models/movies');
const User = require('./database/db_models/user');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());



app.listen(1234, function() {
    console.log('listening on Port:1234')
  })



// GET request


  app.get('/sample_mflix', (req, res) => {
	Movies.find({})
	.then(movies => res.send(movies))
	.catch((err) => console.log(err))
  });


  //GET specific 
  app.get('/sample_mflix/:movieId', (req,res) => {
	Movies.find({_id: req.params.movieId})
	.then((movies) => res.send(movies))
	.catch((err) => console.log(err))
  })


  app.get('/users', (req, res) => {
	User.find({})
	.then(user => res.send(user))
	.catch((err) => console.log(err))
  });

  app.get('/users/:userId', (req,res) => {
	User.find({_id: req.params.userId})
	.then((users) => res.send(users))
	.catch((err) => console.log(err))
  })

  app.post('/users', (req, res) => {
	(new User({'name' : req.body.first_name, 
	'email': req.body.email, 'password': req.body.password }))
	.save()
	.then((user) => res.send(user))
	.catch((err) => console.log(err))	
  })