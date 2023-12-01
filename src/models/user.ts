import { randomUUID } from "crypto";
import { users } from "../data/users";
import { tweets } from "../data/tweets";
import { Tweet } from "./tweet";

export class User {
  private _id: string;
  name: string;
  username: string;
  email: string;
  private _password: string;
  follows: number = 0;
  constructor(name: string, username: string, email: string, password: string) {
    this._id = randomUUID();
    this.name = name;
    this.username = username;
    this.email = email;
    this._password = password;
    users.push(this);
  }

  get id(): string {
    return this._id;
  }

  sendTweet(tweet: Tweet) {
    tweets.push(tweet);
    console.log(`Você enviou um novo tweet: ${tweet}.`);
  }

  follow(user: User) {
    console.log(
      `Você seguiu: ${user}.\nSeu número de seguidores é: ${this.follows++}.`
    );
  }

  showFeed() {
    console.log(tweets);
  }

  showTweets() {
    tweets.forEach((item) => {
      if (item.id === this._id) {
        console.log(item);
      } else {
        console.log(`Você não criou nenhum Tweet.`);
      }
    });
  }
}
