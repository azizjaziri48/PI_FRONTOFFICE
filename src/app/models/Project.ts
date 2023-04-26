
import { Fund } from "./Fund";
import { User } from "./User";
import { Investor } from "./Investor";
import { IntevAge } from './IntevAge';

export interface Project {
    id: number;
    name: string;
    description: string;
    amountinvestment: number;
    currency: string;
    tauxinvest: number;
    intevage: IntevAge;
    riskscore: number;
    country: string;
    startdate: string;
    enddate: string;
    category: string;
    users: User[];
    finalamount: number;
    likes: User[];
    dislikes: User[];
    qrCode: string;
    investors: Investor[];
fund: Fund[];
}