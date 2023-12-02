import { randomUUID } from "crypto";

export class Like {
  private _id: string;
  constructor() {
    this._id = randomUUID();
  }

  get id(): string {
    return this._id;
  }
}
