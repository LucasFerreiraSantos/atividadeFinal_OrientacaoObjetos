import { randomUUID } from "crypto";
import { tweets } from "../data/tweets";
import { replies } from "../data/replys";
import { Like } from "./like";

export class Tweet {
  private _id: string;
  content: string;
  type: string;
  createdAt: Date;
  constructor(content: string, type: string) {
    this._id = randomUUID();
    this.content = content;
    this.type = type;
    this.createdAt = new Date();
    tweets.push(this);
  }

  get id(): string {
    return this._id;
  }

  reply(newContent: string): void {
    replies.push(newContent);
    console.log(`Tweet: ${this}\n Replys: ${replies}`);
  }

  like() {}

  show() {}

  showReplies() {}
}
