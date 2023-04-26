export class SimulationResult {
    id: number;
    projectId: number;
    projectName: string;
    investmentAmount: number;
    simulatedReturn: number;
    finalAmount: number;
  
    constructor(id: number, projectId: number, projectName: string,
                investmentAmount: number, simulatedReturn: number, finalAmount: number) {
      this.id = id;
      this.projectId = projectId;
      this.projectName = projectName;
      this.investmentAmount = investmentAmount;
      this.simulatedReturn = simulatedReturn;
      this.finalAmount = finalAmount;
    }
  }