import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/Client';
import { AuthentificationService } from 'src/app/UserService/authentification.service';
import { Router, RouterModule } from '@angular/router';
import { TokenStorageService } from 'src/app/UserService/token-storage-service.service';

import { ClientService } from 'src/app/UserService/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 client : Client
 errorMessage : String
token:any

form: any = {};
isLoggedIn = false;
isLoginFailed = false;

  constructor(private authS:AuthentificationService, private router:Router,private tokenStorage: TokenStorageService,private clientS:ClientService) {
    this.client ={}
    this.token=""
    this.form={}
   }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      console.log("connecté")
      this.isLoggedIn = true;
      console.log("infor", this.tokenStorage.getToken())
      console.log(this.tokenStorage.getUser());
      
    }
    else
    {
      console.log("connectez vous")
    }
  }

  
  login() {
   // let user=this.form.value
    this.authS.logn(this.client).subscribe(resp=> {
      // login successful if there's a jwt token in the response
      console.log(resp)
     // console.log(resp.headers.get('token'));
     // this.client=resp
       // the returned user object is a principal object
      
      console.log(this.client)
      if (this.client!=null) {
        // store user details  in local storage to keep user logged in between page refreshes
        //SessionStorage.setItem('username', this.client.email);
        this.tokenStorage.saveToken(resp.token);
        this.tokenStorage.saveUser(this.client)
        
        console.log(sessionStorage)
        
        this.reloadPage();
     }
      else {
        alert("Authentication failed.");
    } 
    });
    //this.router.navigateByUrl("/ClientPage")
  }
 
  
  
  logout() {
    //this.authS.logOut().subscribe(resp => { });
    sessionStorage.clear();
    console.log(sessionStorage)
    //this.router.navigateByUrl('/ClientPage');
    //this.router.navigateByUrl("/ClientPage")
    this.reloadPage()
  }
  
  reloadPage(): void {
    window.location.reload();
}

  }

 