import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";





@Component({
  selector: 'app-agent-kh',
  templateUrl: './agent-kh.component.html',
  styleUrls: ['./agent-kh.component.css']
})
export class AgentKHComponent implements OnInit {
 
  filterTerm!: string;

  closeResult = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];


  
  constructor( private router: Router,
     private modalService: NgbModal) { }



  ngOnInit(): void {


  }
}