import { Component, OnInit } from '@angular/core';
import { Agent } from '../../../models/agent';

import * as L from 'leaflet';
import { AgentService } from 'src/app/UserService/agent.service';
import { HttpRequest } from '@angular/common/http';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
map:any;
ag:Agent;
ipAddr:any
  constructor(private agentS:AgentService ) { 
    this.ag={}
    this.ipAddr=""
  }

  ngOnInit(): void {
   /*const myfrugalmap = L.map('frugalmap').setView([50.6311634, 3.0599573], 9);
 
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);*/
  this.createMap() ;
  /* this.agentS.getIPAddress().subscribe((res:any)=>{
    //this.ipAddr  = JSON.parse(res.ip);
        console.log(this.ipAddr)
        
     })*/

}

createMap() {
  const parcThabor = {
    lat: 48.114384,
    lng: -1.669494,
  };

  const zoomLevel = 12;

  this.map = L.map('frugalmap', {
    center: [parcThabor.lat, parcThabor.lng],
    zoom: zoomLevel
  });

  const mainLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 12,
    maxZoom: 17,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
  mainLayer.addTo(this.map);
  const descriptionWikipedia = `
    Le parc du Thabor, situé à Rennes à proximité du centre-ville,
    est un parc public aménagé sur plus de dix hectares dont la particularité est de mêler un jardin à la française,
    un jardin à l’anglaise et un important jardin botanique.`;
  const popupOptions = {
    coords: parcThabor,
    text: descriptionWikipedia,
    open: true
  };
 
}  

      
}



