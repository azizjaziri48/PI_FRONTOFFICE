import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pack } from 'src/app/models/Pack';
import { PackService } from 'src/app/Services/pack.service';

@Component({
  selector: 'app-pack-front',
  templateUrl: './pack-front.component.html',
  styleUrls: ['./pack-front.component.css']
})
export class PackFrontComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

  }



}
