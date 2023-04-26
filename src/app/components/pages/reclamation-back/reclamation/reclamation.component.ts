import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ReclamationService} from '../../../../Services/reclamation.service';
import {Reclamation} from '../../../../models/Reclamation';

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {


 

  constructor( ) { }

  ngOnInit(): void {
   
}



}

