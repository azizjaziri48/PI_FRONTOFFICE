import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { AgentDialogueComponent } from '../agent-dialogue/agent-dialogue.component';
import blogbox from '../../../data/blog.json';
import Swal from 'sweetalert2'; 
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

enum classification{
  ConisitentStar, FutureStar, HighImpactStar , RoughDiamond ,
	CoreEmployee , TrustedProfessionel, InconsistentPlayer , EffectiveEmployee, Underperformer 

}
@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})

export class AgentComponent implements OnInit {
 





ngOnInit(): void {

  }
  
  

  

   
 
}


