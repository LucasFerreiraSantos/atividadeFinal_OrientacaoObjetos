import { randomUUID } from "crypto";
import { tweets } from "../data/tweets";

export class Tweet {
  private _id: string;
  content: string;
  type: string;
  constructor(content: string, type: string) {
    this._id = randomUUID();
    this.content = content;
    this.type = type;
    tweets.push(this);
  }

  get id(): string {
    return this._id;
  }
}
