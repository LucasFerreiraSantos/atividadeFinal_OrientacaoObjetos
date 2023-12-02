import { User } from "./models/user";
import { Tweet } from "./models/tweet";

function createUser(
  name: string,
  username: string,
  email: string,
  password: string
) {
  try {
    return new User(name, username, email, password);
  } catch (error) {
    console.log(error.message);
    return null;
  }
}
const user = createUser("Lucas", "@lucasSantos", "lucas@gmail.com", "1234");
const user1 = createUser("Lucas", "@lucasFerreira", "lucas@gmail.com", "1234");
const user2 = createUser("Jean", "@Jean", "Jean@gmail.com", "2345");

const tweet = new Tweet("vai vasco", "reply");

console.log(user);
console.log(user1);
console.log(user2);

user2.sendTweet("Tweetssssss");

user.sendTweet("Borraaaaaa");
user.follow(user2);
user.showFeed();
user.showTweets();

tweet.reply("vasco vai cair");
tweet.show(user);
tweet.showReplies();
