const fs = require('fs');

const csv = require('fast-csv');

const ws = fs.createWriteStream('data-gen-table-2-part-10.csv');

const faker = require('faker');

const reviews = [];
let count = 31497185;  //3501731, 7001348, 10503086, 14001832, 17498512,20999142,24499870, 27998083, 31497184
const createReviews = () => {
  const years = [2016, 2017, 2018];
  for (let i = 9; i < 11; i += 1) {
    const numberOfReviews = faker.random.number({
      min: 1,
      max: 8,
    });

    for (let j = 1; j < numberOfReviews; j += 1) {
      const review = {};
      review.id = count;
      count += 1;
      review.userId = Math.floor(Math.random() * (1000000));
      review.roomId = i;  
      review.created_at = `${faker.date.month()} ${years[Math.floor(Math.random() * (3))]}`;
      review.review_text = faker.lorem.paragraph();
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
    }
  }

  return reviews;
};

createReviews();
console.log(count);

csv.write(reviews, { headers: true }).pipe(ws);

// console.log(reviews);
