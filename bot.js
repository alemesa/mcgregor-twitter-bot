var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});
var phraseArray = [
  '"You might win some, you might lose some. But you go in, you challenge yourself, you become a better man, a better individual, a better fighter."',
  '"I enjoy competition. I enjoy challenges. If a challenge is in front of me and it appeals to me, I will go ahead and conquer it."',
  '"Excellence is not a skill. Excellence is an attitude."',
  '"Failure is not an option for me. Success is all I envision."',
  '"My success isn’t a result of arrogance. It’s a result of belief."',
  '"We’re not just here to take part. We’re here to take over."'
];
function chooseRandom(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
var phrase = chooseRandom(phraseArray) + '\n';
Bot.tweet(phrase);
