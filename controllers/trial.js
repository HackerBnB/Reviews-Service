// const models = require('../models');

// module.exports = {
//   get: (req, res) => {
//       console.log('hi');
//       models.pool.connect((err, client, release) => {
//   if (err) {
//     return console.error('Error acquiring client', err.stack)
//   }
//   client.query((`SELECT * FROM reviews WHERE roomId = ${req.params.roomId}`), (err, result) => {
//     release()
//     if (err) {
//       return console.error('Error executing query', err.stack)
//     }
//     console.log(result.rows);
//     res.send(result.rows);
//   });
// });

// },
//     // const results = [];
    
//   //   models.pool.connect((err, client, done) => {
//   //     if (err) {
//   //       done();
//   //       console.log(err);
//   //       return res.status(500).json({ success: false, data: err });
//   //     }
//   //     console.log('connected');

//   //     const query = client.query(`SELECT * FROM reviews WHERE roomId = ${req.params.roomId}`);
//   //     client.query(query, (err, results) => {
//   //       console.log(query);
//   //       if (err) {
//   //         console.log('error in data');
//   //       }
//   //     });
//   //     client.query('end', (rows) => {
//   //       done();
//   //       console.log('res' , rows);
//   //       return res.json(rows);
//   //     });
//   //   });
//   // },

// //   const getRoomById = (roomId, cb) => {
// //   const queryStr = `select * from photos where room_id = ${roomId};`;
// //   connection.query(queryStr, (err, results) => {
// //     if (err) {
// //       console.log('Error retrieving data!');
// //       return;
// //     }
// //     cb(results);
// //   });
// // };





//   post: (req, res) => {
//     console.log(req.body);
//     models.Review.create( req.body, (err, result) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//       res.send(result);
//     };
//   });
// },

//   delete: (req, res) => {
//     models.Review.deleteMany({ room_id: Number(req.params.roomId) }, (err, reviews) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.send(reviews);
//       }
//     });
//   },

//     put: (req, res) => {
//     models.Review.updateOne({ room_id: Number(req.params.roomId) }, (err, reviews) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.send(reviews);
//       }
//     });
//   }


// };


// /*

// database queries here
// */


