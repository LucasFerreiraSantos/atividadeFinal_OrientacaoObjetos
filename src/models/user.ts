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
    users.forEach((item) => {
      if (item._id === this._id || item.username === this.username) {
        console.log(`Um usuário com esses dados já foi criado.`);
      } else {
        users.push(this);
      }
    });
  }

  get id(): string {
    return this._id;
  }

  sendTweet(tweet: Tweet) {
    tweets.push(tweet);
    console.log(`${this.username} enviou um novo tweet: ${tweet}.`);
  }

  follow(user: User) {
    console.log(
      `${this.username} seguiu: ${user}.\nSeu número de seguidores é: ${this
        .follows++}.`
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
        console.log(`${this.username} não criou nenhum Tweet.`);
      }
    });
  }
}
