var LindaClient = require('linda').Client;
var socket = require('socket.io-client').connect('http://linda-server.herokuapp.com');
var linda = new LindaClient().connect(socket);
var ts = linda.tuplespace('ami');
var twitter = require('twitter');

var client = new twitter({
  consumer_key: 'y5qbApYbkBuGkJFfFK2LIFVF4',
  consumer_secret: 'wg4Kcl2Easl4AEv4zLAnbIvJIfMsOc87iTDjpRDAPhuy8ObXJh',
  access_token_key: '2610972979-og3xrSx9chj5hSciqmJQOpTaeZQQ84irKT40P0k',
  access_token_secret: '6jXWPOv9w7hvcBk1tjp9chlhy3K5JWRqkkH3VVWzmOM79'
});

linda.io.on('connect', function() {
  	console.log("connect");

    ts.watch({type: "sensor", name: "ikea", value: 1023}, function(err, tuple){
      if(err) return;
      client.post('statuses/update', {status: 'ŧ‹”ŧ‹”ŧ‹”ŧ‹”(๑´ㅂ`๑)ŧ‹”ŧ‹”ŧ‹”ŧ‹”'}, function(error, tweet, response){
	if (!error) {
	  console.log(tweet);
	}
      });
	console.log("通知しました!");
    });
});
