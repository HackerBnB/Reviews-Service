const mongoose = require('mongoose');
const faker = require('faker');
const db = require('./models');

class ReviewGenerator {
  constructor() {
    this.reviews = [];
  }

  createReviews() {
    const years = [2016, 2017, 2018];
    for (let i = 0; i < 100; i += 1) {
      for (let j = 0; j < Math.floor(Math.random() * (76)); j += 1) {
        const review = {};
        review.room_id = i;
        review.user = faker.name.findName();
        review.created_at = `${faker.date.month()} ${years[Math.floor(Math.random() * (3))]}`;
        review.review_text = faker.lorem.paragraph();
        review.image_url = `https://s3-us-west-1.amazonaws.com/airfecuserimages/randPeopleImages/randPerson${Math.floor(Math.random() * (12)) + 1}.jpg`;

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
        const reviewItem = new db.Review(review);
        const temp = reviewItem.save();
        this.reviews.push(temp);
      }
    }

    // close connection to db
    Promise.all(this.reviews)
      .then((results) => {
        console.log('sample item', results);
        console.log(`${results.length} entrys saved in DataBase`);
      })
      .catch((err) => {
        console.error(err);
      })
      .then(() => {
        mongoose.connection.close(() => {
          process.exit(0);
        });
      });
    return this.reviews;
  }
}

db.Review.remove({}).exec((err) => {
  if (err) {
    console.log(err);
  }
  const reviewGenerator = new ReviewGenerator();
  const fakeReviews = reviewGenerator.createReviews();
});
// 