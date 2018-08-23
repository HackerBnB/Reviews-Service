const redis = require('redis');

const models = require('../models');

// const redisAddress = process.env.REDIS;
// const redisClient = redis.createClient(redisAddress);
const redisClient = redis.createClient();

redisClient.on('connect', () => {
  console.log('connected to redis');
});

module.exports = {
  get: (req, res) => {
  //models.pool.query((`SELECT * FROM reviews WHERE roomId = ${req.params.roomId}`), (err, result) => {
  //     if (err) {
  //       return console.error('Error executing query', err.stack);
  //     }
  //     res.send(result.rows);
  //   });
  // },
    redisClient.get(`/reviews/${req.params.roomId}`, (err, results) => {
      if (results) {
        // console.log("Cache" + req.params.roomId, results);
        res.send(results);
      } else {
        const query = `SELECT * FROM reviews WHERE roomId = ${req.params.roomId}`;
        models.pool.query(query, (err, result) => {
          if (err) {
            console.log(err, 'error in query');
          } else {
            redisClient.setex(`/reviews/${req.params.roomId}`, 3000, JSON.stringify(result.rows));
            res.send(result.rows);
          }
        });
      }
    });
  },

  post: (req, res) => {
    // console.log(req.body);
    models.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      console.log('body ',req.body);
      const values = [req.body.id, req.body.userid, req.body.roomid, req.body.created_at, req.body.review_text, req.body.accuracy_rating, req.body.communication_rating, req.body.cleanliness_rating, req.body.location_rating, req.body.check_in_rating, req.body.value_rating, req.body.is_reported];

      client.query(`insert into reviews (id, userId, roomId, created_at, review_text, accuracy_rating, communication_rating, cleanliness_rating, location_rating, check_in_rating, value_rating, is_reported) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning *`, values, (err, result) => {
        // console.log(req.body.roomId);
        release();
        if (err) {
          return console.error('Error executing querylast', err);
        }
        res.send(result.rows);
      });
    });
  },

  postRooms: (req, res) => {
    // console.log(req.body);
    models.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      const values = [req.body.roomId, req.body.roomName];

      client.query(`insert into rooms (roomId, roomName) values ($1, $2) returning *`, values, (err, result) => {
        // console.log(req.body.roomId);
        release();
        if (err) {
          return console.error('Error executing query2', err);
        }
        res.send(result.rows);
      });
    });
  },

  postUsers: (req, res) => {
    // console.log(req.body);
    models.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      const values = [req.body.id, req.body.userName, req.body.image_url];

      client.query(`insert into users (id, userName, image_url) values ($1, $2, $3) returning *`, values, (err, result) => {
        // console.log(req.body.roomId);
        release();
        if (err) {
          return console.error('Error executing query3', err);
        }
        res.send(result.rows);
      });
    });
  },


  delete: (req, res) => {
    models.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      // const value = parseInt(req.params.roomId);
      // console.log('delid', req.params.roomId);
      const values = [parseInt(req.params.roomId)];
      client.query(`delete from reviews where roomId = $1 returning *`, values, (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query2', err);
        }
        res.send(result.rows);
      });
    });
  },

  deleteRooms: (req, res) => {
    models.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      // const value = parseInt(req.params.roomId);
      // console.log('delid', req.params.roomId);
      let values = [parseInt(req.params.roomId)];
      client.query(`delete from rooms where roomId = $1 returning *`, values, (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query2', err);
        }
        res.send(result.rows);
      });
    });
  },
  
  deleteUsers: (req, res) => {
    models.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      // const value = parseInt(req.params.roomId);
      // console.log('delid', req.params.roomId);
      let values = [parseInt(req.params.userId)];
      client.query(`delete from users where roomId = $1 returning *`, values, (err, result) => {
        release();
        if (err) {
          return console.error('Error executing query2', err);
        }
        res.send(result.rows);
      });
    });
  },

  put: (req, res) => {
    models.pool.connect((err, client, release) => {
      if (err) {
        return console.error('Error acquiring client', err.stack);
      }
      let values = [req.body.roomId, req.body.roomName];
      client.query(`update rooms set roomName = $2 where roomId = $1 returning *`, values, (err, result) => {
        // console.log(req.body.roomId);
        release();
        if (err) {
          return console.error('Error executing query2', err);
        }
        res.send(result.rows);
      });
    });
  }
};

/*
redisClient.get(`/reviews/${req.params.roomId}`, (err, results) => {
    if (results) {
      console.log("Cache" + req.params.roomId, results);
      res.send(results.row);
    } else {
      const query = `SELECT * FROM reviews WHERE id = ${req.params.roomId}`;
      client.query(query, (err, result) => {
        if (err) {
          console.log(err, 'error in query');
        } else {
          redisClient.set(`/reviews/${req.params.roomId}`, 3000, JSON.stringify(result.rows));
          res.send(result.rows);
        }
      })
    }
  });
});


*/