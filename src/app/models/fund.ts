
import { Project } from "./Project";
import { User } from './User';
export class Fund {
    idFund: number;
    amountFund: number;
    tauxFund: number;
    tauxGain: number;
    users: User[];
    project:Project[];
  }
  