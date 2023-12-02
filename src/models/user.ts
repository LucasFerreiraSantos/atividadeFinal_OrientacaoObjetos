import { randomUUID } from "crypto";
import { users } from "../data/users";
import { Tweet } from "./tweet";

export class User {
  private _id: string;
  private followers: User[] = [];
  private tweets: Tweet[] = [];
  constructor(
    private name: string,
    private _username: string,
    private email: string,
    private password: string
  ) {
    this._id = randomUUID();

    if (users.find((user) => user.username === this.username)) {
      throw new Error("Este username já existe!");
    }
    users.push(this);
  }

  get id(): string {
    return this._id;
  }

  get username() {
    return this._username;
  }

  sendTweet(content: string) {
    const newTweet = new Tweet(content, "normal");
    this.tweets.push(newTweet);
    console.log(`Tweet enviado.`);
    return newTweet;
  }

  follow(user: User) {
    this.followers.push(user);
    console.log(`${this.username} seguiu ${user.username}!.`);
  }

  showFeed() {
    this.followers.forEach((feed) => {
      console.log(feed.tweets);
    });
    console.log(`Fim do Feed!`);
  }

  showTweets() {
    console.log(this.tweets);
  }
}
