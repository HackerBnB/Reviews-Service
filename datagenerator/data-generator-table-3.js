const faker = require('faker');

const fs = require('fs');

const csv = require('fast-csv');

const ws = fs.createWriteStream('data-gen-table-3-PART.csv');

const users = [];

const createUsers = () => {
  for (let i = 1; i < 100; i += 1) {
    const user = {};
    user.id = i;
    user.userName = faker.name.findName();
    user.image_url = `https://s3-us-west-1.amazonaws.com/airfecuserimages/randPeopleImages/randPerson${Math.floor(Math.random() * (12)) + 1}.jpeg`;
    users.push(user);
  }
  return users;
};

createUsers();

csv.write(users, { headers: true }).pipe(ws);

 // console.log(users);
///