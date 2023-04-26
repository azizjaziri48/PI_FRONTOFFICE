import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fund } from 'src/app/models/fund';
import {FundService} from 'src/app/Services/fund.service'

@Component({
  selector: 'app-formfund',
  templateUrl: './formfund.component.html',
  styleUrls: ['./formfund.component.css']
})
export class FormfundComponent implements OnInit {
  
  constructor( ) { }

  ngOnInit(): void {
 
  }
 

}
