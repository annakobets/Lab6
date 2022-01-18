export class Record {
    static of(data: Object): any {
      throw new Error('Method not implemented.');
    }
    constructor(
      public name: string,
      //public author: string,
      public date: string,
      public description: string,
      public id?: number,
    ) {}
  }