const userUrls = require('./userUrls.json');
const faker = require('faker');
const fs = require('fs');
// const ids = require('./ids.json');
// console.log(ids);
// mongoimport --db wegot --collection photos --drop --file ~/hr/guinzar-gallery/database/data.json --type json --jsonArray
const writeStream = fs.createWriteStream('users.json');
writeStream.write('[');
const numEntries = 1000000;
let i = 0, userIndex = 0;
function write() {
  let ok = true;
  while (i < numEntries && ok) {
    const user = {
      id: i + 1,
      name: faker.name.findName(),
      join: faker.date.past(8),
      pic: userUrls[userIndex],
    };
    userIndex += 1;
    if (userIndex >= userUrls.length) userIndex = 0;
    let str = JSON.stringify(user);
    if (i !== numEntries - 1) str += ',';
    else str += ']';
    if ((i + 1) % 100000 === 0) console.log(((i + 1) / 1000000) + ' mil user entries created');
    i += 1;
    ok = writeStream.write(str);
  }
  if (i < numEntries) {
    writeStream.once('drain', write);
  }
}
write();
