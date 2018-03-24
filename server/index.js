require('newrelic');
const request = require('supertest')
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');

mongoose.connect('mongodb://gallery:potato@172.31.6.92/wegot');

const db = require('../database/index.js');

const app = express();

app.use(cors());
// app.use(morgan('dev'));
app.use(bodyParser.json());

// serve static files from dist dir
app.use('/restaurants/:id', express.static(path.join(__dirname, '../client/dist')));

// if no ID typed into url bar, redirect to this ID
app.get('/', (req, res) => {
  res.status(200).redirect('/restaurants/ChIJUcXYWWGAhYARmjMY2bJAG2s');
});

// retrieve data from API(db)
app.get('/api/restaurants/:id/gallery', (req, res) => {
  const { id } = req.params;
  // console.log('server querying for id: ', id);
  db.findOne(id, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      const result = { name: data[0].name, photos: JSON.parse(data[0].photos) };
      const { photos } = result;
      // console.log(photos);
      const userIds = photos.map(photo => photo.user_id);
      // console.log(userIds);
      db.findUsers(userIds, (err, data) => {
        if (err) {
          res.sendStatus(500);
        } else {
          // console.log(data);
          const users = data.reduce((acc, user) => {
            acc[user.id] = user;
            return acc;
          }, {});
          for (let i = 0; i < photos.length; i += 1) {
            photos[i].userName = users[photos[i].user_id].name;
            photos[i].userPic = users[photos[i].user_id].pic;
            // photos[i].userJoin = users[photos[i].user_id].join;
          }
          res.json(result);
        }
      });
      // const result = data[0].toObject();
      // const { photos } = result;
      // const userIds = photos.map(photo => photo.user_id);
      // db.findUsers(userIds, (err, data) => {
      //   if (err) {
      //     res.sendStatus(500);
      //   } else {
      //     const users = data.reduce((acc, user) => {
      //       acc[user.id] = user;
      //       return acc;
      //     }, {});
      //     for (let i = 0; i < photos.length; i += 1) {
      //       photos[i].userName = users[photos[i].user_id].name;
      //       photos[i].userPic = users[photos[i].user_id].pic;
      //       photos[i].userJoin = users[photos[i].user_id].join;
      //     }
      //     res.json(result);
      //   }
      // });
    }
  });
});

app.listen(3001, () => console.log('Gallery App listening on port 3001!'));

module.exports = app;
