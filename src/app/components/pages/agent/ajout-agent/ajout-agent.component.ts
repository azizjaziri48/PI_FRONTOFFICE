import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/models/admin';
import { Agent } from 'src/app/models/agent';
import { AdminService } from 'src/app/UserService/admin.service';
import { AgentService } from 'src/app/UserService/agent.service';
import { TokenStorageService } from 'src/app/UserService/token-storage-service.service';

@Component({
  selector: 'app-ajout-agent',
  templateUrl: './ajout-agent.component.html',
  styleUrls: ['./ajout-agent.component.css']
})
export class AjoutAgentComponent implements OnInit {


  constructor( ) {
     
     }

  ngOnInit(): void {
  }
  

}
