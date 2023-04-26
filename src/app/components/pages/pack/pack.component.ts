import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  HttpHeaders, HttpParams } from '@angular/common/http';

import { Pack } from 'src/app/models/Pack';
import { Product } from 'src/app/models/product';
import { PackService } from 'src/app/Services/pack.service';
import { ProductService } from 'src/app/Services/product.service';
import Swal from 'sweetalert2';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {
  
  constructor() { }
  

  ngOnInit(): void {
  
  }
 
}
