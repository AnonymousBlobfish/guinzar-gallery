const photoUrls = require('./photoUrls.json');
// const userIds = require('./ids.json');
const names = require('./names.json');
const faker = require('faker');
const fs = require('fs');

// mongoimport --db wegot --collection photos --drop --file ~/hr/guinzar-gallery/database/data.json --type json --jsonArray
const writeStream = fs.createWriteStream('data.json');
writeStream.write('[');
const numEntries = 10000000;
let i = 0, nameIndex = 0, photoIndex = 0;
function write() {
  let ok = true;
  while (i < numEntries && ok) {
    // console.log(i + ' ' + ok)
    const photos = [];
    for (let n = 0; n < 8; n += 1) {
      const photo = {
        url: photoUrls[photoIndex + n],
        user_id: Math.floor(Math.random() * 1000000) + 1,
        // user_id: userIds[Math.floor(Math.random() * 1000)]['_id'],
        caption: faker.lorem.sentence(),
      };
      photos.push(photo);
    }
    photoIndex += 8;
    if (photoIndex >= photoUrls.length) photoIndex = 0;
    let str = `{"id":${i + 1},"name":"${names[nameIndex]}","photos":${JSON.stringify(photos)}}`;
    if (i !== numEntries - 1) str += ',';
    else str += ']';
    nameIndex += 1;
    if (nameIndex >= names.length) nameIndex = 0;
    if ((i + 1) % 100000 === 0) console.log(((i + 1) / 1000000) + ' mil restaurant entries created');
    i += 1;
    ok = writeStream.write(str);
  }
  if (i < numEntries) {
    writeStream.once('drain', write);
  }
}
write();
