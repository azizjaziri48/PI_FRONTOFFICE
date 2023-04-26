import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pack } from 'src/app/models/Pack';
import { Partner } from 'src/app/models/Partner';
import { Product } from 'src/app/models/product';
import { PackService } from 'src/app/Services/pack.service';
import { PartnerService } from 'src/app/Services/partner.service';
import { ProductService } from 'src/app/Services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 
  

  constructor() { }
   
  ngOnInit(): void {
  }


}



