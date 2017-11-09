var Twit = require('twit');
var TwitterBot = require('node-twitterbot').TwitterBot;

var Bot = new TwitterBot({
  consumer_key: process.env.BOT_CONSUMER_KEY,
  consumer_secret: process.env.BOT_CONSUMER_SECRET,
  access_token: process.env.BOT_ACCESS_TOKEN,
  access_token_secret: process.env.BOT_ACCESS_TOKEN_SECRET
});

// McGregor Quotes
var quotesPoll = [
  '"You might win some, you might lose some. But you go in, you challenge yourself, you become a better man, a better individual, a better fighter."',
  '"I enjoy competition. I enjoy challenges. If a challenge is in front of me and it appeals to me, I will go ahead and conquer it."',
  '"Excellence is not a skill. Excellence is an attitude."',
  '"Failure is not an option for me. Success is all I envision."',
  '"My success isn’t a result of arrogance. It’s a result of belief."',
  '"We’re not just here to take part. We’re here to take over."',
  '"Nothing good ever comes from worrying or sitting there feeling sorry for yourself. Keep positive and keep pushing on and things will turn good."',
  '“There’s no talent here, this is hard work. This is an obsession. Talent does not exist, we are all human beings. You could be anyone if you put in the time. You will reach the top, and that’s that. I am not talented, I am obsessed.”',
  '"Trash talk? Smack talk? This is an American term that makes me laugh. I simply speak the truth. I\'m an Irish man"',
  '"For [Aldo] to say he is the king and I am the joker, if this was a different time, I would invade his favela on horseback and kill anyone that was not fit to work. But we are in a new time. So I\'ll whoop his ass in July."'
];

// Emojis Polls Quotes
var emojisPoll = ['🔥', '🥊', '🇮🇪', '🏆'];
function chooseRandom(quote) {
  return quote[Math.floor(Math.random() * quote.length)];
}

// Randomizing the Tweet
var phrase =
  chooseRandom(quotesPoll) +
  ' ' +
  chooseRandom(emojisPoll) +
  '\n' +
  '𝘊𝘰𝘯𝘯𝘰𝘳 𝘔𝘤𝘎𝘳𝘦𝘨𝘰𝘳';

// console.log(phrase); //debugging

// Tweet
Bot.tweet(phrase);
