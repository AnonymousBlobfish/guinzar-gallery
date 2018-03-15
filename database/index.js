const mongoose = require('mongoose');
const PhotosSchema = mongoose.Schema({
  url: String,
  userName: String,
  userPic: String,
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

const Photos = mongoose.model('Photos', photoSchema);

// findAll retrieves all stories
function findAll(callback) {
  Photos.find({}, callback);
}

// findOne will retrieve the photo associated with the given id
function findOne(id, callback) {
  console.log('database finding by id:', id);
  Photos.find({ id }, callback);
}

// insertOne will insert on entry into database
function insertOne(entry, callback) {
  Photos.create(entry, callback);
}

exports.findOne = findOne;
exports.findAll = findAll;
exports.insertOne = insertOne;
