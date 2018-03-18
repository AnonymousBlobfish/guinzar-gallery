const mysql = require('./sql.js');
const mongoose = require('mongoose');

const PhotosSchema = mongoose.Schema({
  url: String,
  date: Date,
  caption: String,
});

const photoSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  photos: [PhotosSchema],
});

const userSchema = mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  join: Date,
  pic: String,
});

const Photos = mongoose.model('Photos', photoSchema);
const Users = mongoose.model('Users', userSchema);

// findAll retrieves all stories
// function findAll(callback) {
//   Photos.find({}, callback);
// }

// findOne will retrieve the photo associated with the given id
function findOne(id, callback) {
  console.log('database finding rest by id:', id);
  Photos.find({ id }, callback);
}
function findUsers(ids, callback) {
  console.log('database finding user by ObjectIds:', ids);
  Users.find({ id: { $in: ids } }, callback);
}
// // insertOne will insert on entry into database
// function insertOne(entry, callback) {
//   Photos.create(entry, callback);
// }

exports.findOne = findOne;
exports.findUsers = findUsers;
// exports.findAll = findAll;
// exports.insertOne = insertOne;
