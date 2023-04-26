import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {

  
  rib: string;
  //Account: Account = new Account();
  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.rib = this.route.snapshot.params['rib'];

   /* this.AccountService.getAccountByRib(this.rib).subscribe(data => {
      this.Account = data;
    }, error => console.log(error));
  }*/

 /* onSubmit(){
    this.AccountService.updateAccount( this.rib,this.Account).subscribe( data =>{
      this.goToAccountList();
      Swal.fire({  
        position: 'top-end',  
        icon: 'success',  
        title: 'Your update has been saved',  
        showConfirmButton: false,  
        timer: 1500  
      })  
    }
    , error => console.log(error));
  }*/

 
}
}