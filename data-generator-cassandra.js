const fs = require('fs');

const faker = require('faker');

const reviews = [];
const arr = [];
let count = 1;
const createReviews = () => {
  const years = [2016, 2017, 2018];
  for (let i = 1; i < 4; i++) { 
    const numLoop = Math.floor(Math.random() * (8));
    for (let j = 1; j < numLoop; j++) {
      const review = {};
      review.id = count;
      count += 1;
      review.roomId = i;
      review.roomName = 'room' + i;
      review.user = faker.name.findName();
      review.created_at = `${faker.date.month()} ${years[Math.floor(Math.random() * (3))]}`;
      review.review_text = faker.lorem.paragraph();
      review.image_url = `https://s3-us-west-1.amazonaws.com/airfecuserimages/randPeopleImages/randPerson${Math.floor(Math.random() * (12)) + 1}.jpeg`;

      review.accuracy_rating = faker.random.number({
        min: 1,
        max: 5,
      });
      review.communication_rating = faker.random.number({
        min: 1,
        max: 5,
      });
      review.cleanliness_rating = faker.random.number({
        min: 1,
        max: 5,
      });
      review.location_rating = faker.random.number({
        min: 1,
        max: 5,
      });
      review.check_in_rating = faker.random.number({
        min: 1,
        max: 5,
      });
      review.value_rating = faker.random.number({
        min: 1,
        max: 5,
      });
      review.is_reported = faker.random.boolean();
      reviews.push(review);
      let tsv = `${review.roomId}\t${review.roomName}\t${review.user}\t${review.created_at}\t${review.review_text}\t${review.image_url}\t${review.accuracy_rating}\t${review.communication_rating}\t${review.cleanliness_rating}\t${review.location_rating}\t${review.check_in_rating}\t${review.value_rating}\t${review.is_reported}\n`;
      arr.push(tsv);
    }
  }
  return reviews;
};

createReviews();

// const textTSV = (reviews, i) => {
//   let tsv = '';
//   // tsv = tsv + `${reviews[i].roomId}\t${reviews[i].roomName}\t${reviews[i].user}\t${reviews[i].created_at}\t${reviews[i].review_text}\t${reviews[i].image_url}\t${reviews[i].accuracy_rating}\t${reviews[i].communication_rating}\t${reviews[i].cleanliness_rating}\t${reviews[i].location_rating}\t${reviews[i].check_in_rating}\t${reviews[i].value_rating}\t${reviews[i].is_reported}\n`;
//   return tsv;
// };

fs.writeFileSync(`data-gen.tsv`, arr, 'utf-8', (err) => {
  if (err) throw err;
  console.log(`Success`);
});


console.log(reviews);
console.log(arr);


// const textTSV = (reviews, i) => {
//   let tsv = '';
//   tsv = tsv + `${reviews[i].roomId}\t${reviews[i].roomName}\t${reviews[i].user}\t${reviews[i].created_at}\t${reviews[i].review_text}\t${reviews[i].image_url}\t${reviews[i].accuracy_rating}\t${reviews[i].communication_rating}\t${reviews[i].cleanliness_rating}\t${reviews[i].location_rating}\t${reviews[i].check_in_rating}\t${reviews[i].value_rating}\t${reviews[i].is_reported}\n`;
//   return tsv;
// };

// const execute = (arr, i) => {
//   fs.writeFileSync(`data-gen.tsv`, textTSV(arr, i), 'utf-8', (err) => {
//     if (err) throw err;
//     // console.log(`Success`);
//   });
// }

// for (let i = 0; i < reviews.length; i++) { 
//   execute(reviews[i], i);
// }
// 