import { v4 as uuidv4 } from 'uuid'

export class CardModel {
  public id: string

  constructor(
    public title: string,
    public username: string,
    public imagePath: string,
    public description?: string,
  ) {
    this.id = uuidv4()
  }
}
