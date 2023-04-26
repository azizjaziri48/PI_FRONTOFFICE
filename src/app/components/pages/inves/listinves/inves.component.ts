import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Inves } from 'src/app/models/inves';
import {InvesService} from 'src/app/Services/inves.service';
import Swal from 'sweetalert2';
import {saveAs} from 'file-saver/dist/FileSaver';

@Component({
  selector: 'app-inves',
  templateUrl: './inves.component.html',
  styleUrls: ['./inves.component.css']
})
export class InvesComponent implements OnInit {
  

 
  constructor() { }
  


  ngOnInit(): void {

  }

  }

