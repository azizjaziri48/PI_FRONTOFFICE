import { Component, OnInit } from '@angular/core';
import {Credit} from '../../../../models/Credit';
import {CreditService} from '../../../../Services/CreditService';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';
import {Client} from '../../../../models/Client';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {


  constructor() {
   
  }
 
  ngOnInit(): void {
  



  }


}
