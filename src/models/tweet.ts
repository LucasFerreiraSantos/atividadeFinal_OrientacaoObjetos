import { randomUUID } from "crypto";
import { User } from "./user";
import { Like } from "./like";

export class Tweet {
  private _id: string;
  replies: Tweet[] = [];
  likes: User[] = [];
  createdAt: Date;
  constructor(
    public content: string,
    public type: string = "normal" || "reply"
  ) {
    this._id = randomUUID();
    this.createdAt = new Date();
  }

  get id(): string {
    return this._id;
  }

  reply(content: string) {
    const newReply = new Tweet(content, "reply");
    this.replies.push(newReply);
    console.log(`Reply enviado.`);
    return newReply;
  }

  like(user: User, like: Like) {
    this.likes.push(user);
    console.log(`${user.username} deu um like ${like.id}`);
  }

  show(user: User) {
    const addLikes = this.likes.length;
    console.log(`${user.username}: ${this.content}\n
    ${addLikes}\n
    > ${this.replies.join("\n > ")}`);
  }

  showReplies() {
    console.log(`  > ${this.replies.join("\n > ")}`);
  }
}
