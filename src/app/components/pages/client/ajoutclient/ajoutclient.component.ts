import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/models/agent';
import { Client } from 'src/app/models/Client';
import { AgentService } from 'src/app/UserService/agent.service';
import { ClientService } from 'src/app/UserService/client.service';
import { TokenStorageService } from 'src/app/UserService/token-storage-service.service';

@Component({
  selector: 'app-ajoutclient',
  templateUrl: './ajoutclient.component.html',
  styleUrls: ['./ajoutclient.component.css']
})
export class AjoutclientComponent implements OnInit {
 
  constructor() { 
   
  }

  ngOnInit(): void {
 
   }

 
}
