import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event';
import { unemployedpopulation } from 'src/app/models/unemployedpopulation';
import {EventService} from 'src/app/Services/event.service'
import {LoadupService} from 'src/app/Services/loadup.service'
import {FilterupService} from 'src/app/Services/filterup.service'
import { Agent } from 'src/app/models/agent';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import dayGridPlugin from '@fullcalendar/daygrid';
import { HttpClient } from '@angular/common/http';
import { CalendarOptions, DateSelectArg, EventApi, EventClickArg } from '@fullcalendar/angular';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {




  constructor( ) { }

   

  ngOnInit(): void {

  }


}
