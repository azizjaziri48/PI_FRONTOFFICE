import {Component, Input, NgZone, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Cloudinary} from '@cloudinary/angular-5.x';
import {FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-form-guarantor',
  templateUrl: './form-guarantor.component.html',
  styleUrls: ['./form-guarantor.component.css']
})
export class FormGuarantorComponent implements OnInit {


  constructor() {
  }








  ngOnInit(): void {
   



  }


  urlll:any;
  filename:any;
  // tslint:disable-next-line:typedef
 
  selectedFile: File;
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];

  }



}


