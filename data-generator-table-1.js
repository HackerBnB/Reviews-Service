const fs = require('fs');

const csv = require('fast-csv');

const ws = fs.createWriteStream('data-gen-table-1.csv');

const rooms = [];

const createRooms = () => {
  for (let i = 1; i < 5000001; i += 1) {
    const room = {};
    room.roomId = i;
    room.roomName = 'room' + i;   
    rooms.push(room);
  }
  return rooms;
};

createRooms();

csv.write(rooms, { headers: true }).pipe(ws);

// console.log(rooms);
// 