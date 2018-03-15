const photoUrls = require('./photoUrls.json');
const userUrls = require('./userUrls.json');
const names = require('./names.json');
const faker = require('faker');
const fs = require('fs');
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/wegot', (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log('mongoose connected');
//   }
// });

// mongoimport --db wegot --collection photos --drop --file ~/hr/guinzar-gallery/database/data.json --type json --jsonArray
const writeStream = fs.createWriteStream('data.json');
writeStream.write('[');
const numEntries = 10000000;
let i = 0, nameIndex = 0, userIndex = 0, photoIndex = 0;
function write() {
  let ok = true;
  while (i < numEntries && ok) {
    // console.log(i + ' ' + ok)
    let photos = [];
    for (let n = 0; n < 10; n += 1) {
      const photo = {
        url: `http://dfvt5qu7sqzrv.cloudfront.net/${photoUrls[photoIndex + n]}`,
        userName: faker.name.findName(),
        userPic: `${userUrls[userIndex + n]}`,
        date: faker.date.past(3),
        caption: faker.lorem.sentence(),
      };
      photos.push(photo);
    }
    userIndex += 10;
    photoIndex += 10;
    if (userIndex >= userUrls.length) userIndex = 0;
    if (photoIndex >= photoUrls.length) photoIndex = 0;
    let str = `{"id":${i + 1},"name":"${names[nameIndex]}","photos":${JSON.stringify(photos)}}`;
    if (i !== numEntries - 1) str += ',';
    else str += ']';
    nameIndex += 1;
    if (nameIndex >= names.length) nameIndex = 0;
    if ((i + 1) % 100000 === 0) console.log(((i + 1) / 1000000) + ' mil entries created');
    i += 1;
    ok = writeStream.write(str);
  }
  if (i < numEntries) {
    writeStream.once('drain', write);
  }
}
write();
