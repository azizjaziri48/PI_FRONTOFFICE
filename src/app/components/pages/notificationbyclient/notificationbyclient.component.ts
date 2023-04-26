import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-notificationbyclient',
  templateUrl: './notificationbyclient.component.html',
  styleUrls: ['./notificationbyclient.component.css'],
  changeDetection:ChangeDetectionStrategy.Default
})
export class NotificationbyclientComponent implements OnInit {
  closeResult = '';
  page: number = 1;
  count: number = 0;
  tableSize: number = 6;
  tableSizes: any = [3, 6, 9, 12];
  filterTerm!: string;

  listNotifications: any;
  listNotificationss: any;
  form = false;
  notification!: Notification;
  not:any;


  constructor( private modalService: NgbModal , private chRef : ChangeDetectorRef , private http: HttpClient) { }

  ngOnInit(): void {
  
   

  }


  private headers: HttpHeaders;


   onTableDataChange(event: any) {
    this.page = event;
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }







}
