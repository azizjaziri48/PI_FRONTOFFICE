import { Component, OnInit } from '@angular/core';
import blogbox from '../../../../data/blog.json';
import { AccountService } from 'src/app/services/account.service';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {



  constructor(private accserv : AccountService) { }
  
  ngOnInit(): void {
  }
  
 

 

}
