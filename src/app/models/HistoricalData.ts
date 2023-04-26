export class HistoricalData {
    id: number;
    rate: number;
    date: string;
  
    constructor(id: number, rate: number, date: string) {
      this.id = id;
      this.rate = rate;
      this.date = date;
    }
  }
  