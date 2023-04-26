import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-admin-credit',
  templateUrl: './admin-credit.component.html',
  styleUrls: ['./admin-credit.component.css']
})
export class AdminCreditComponent implements OnInit {
  order=1;
  closeResult = '';
  page = 1;
  count = 0;
  tableSize = 6;
  tableSizes: any = [3, 6, 9, 12];

  constructor() {}

  onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
  }
  





  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef



}
