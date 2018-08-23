const siege = require('siege')

let stress = siege().on(3002).concurrent(40);

const num = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
}

for (let i=1; i < 100000; i++) {
	const int = num(10000000);
	stress = stress.for(1).times.get(`/api/rooms/${int}/reviews`)
}

stress.attack();





