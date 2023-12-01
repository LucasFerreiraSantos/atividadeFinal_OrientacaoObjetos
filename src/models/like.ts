import { randomUUID } from "crypto";

export class Like {
  private _id: string;
  constructor() {
    this._id = randomUUID();
  }
}
