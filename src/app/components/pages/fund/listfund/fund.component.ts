import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fund } from 'src/app/models/fund';
import { Inves } from 'src/app/models/inves';
import {FundService} from 'src/app/Services/fund.service'

import {InvesService} from 'src/app/Services/inves.service'
import {LoadupService} from 'src/app/Services/loadup.service'
import {FilterupService} from 'src/app/Services/filterup.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.css']
})
export class FundComponent implements OnInit {
 
constructor(private FundService: FundService , private router: Router ,
  private InvesService :InvesService,
  private route:ActivatedRoute,
    private LoadupService: LoadupService ,
    private FilterupService: FilterupService ,
    private modalService: NgbModal ,
    private invesService : InvesService ){}

  
ngOnInit(): void {
 
}

}


