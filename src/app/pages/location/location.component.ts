import { Component, Inject, OnInit } from '@angular/core';
import "ol/ol.css";
import Map from "ol/map";
import View from "ol/View";
import TileLayer from "ol/layer/tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from 'ol/proj';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { emptyCardItem } from '../store/app.action';
import { store} from '../stucture';

@Component({
  selector: 'app-location',
  imports: [],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit {
  map:any

  constructor(
    public dialogRef: MatDialogRef<LocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any , private router:Router ,  private store:Store<store>) {
      
      setTimeout(()=>{
        this.dialogRef.close();
      this.router.navigate(['/zomato'] )
      debugger
        this.store.dispatch(emptyCardItem({item:[]}))
      } , 5000)
    
     
      
     }

  ngOnInit(): void {
    
    console.log("999999")
    this.renderMap()
    this.enableLocation()
  }

  renderMap():void{
    this.map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

  }

  enableLocation():void{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => this.showPosition(position));
    }
  
      // setTimeout(()=> {alert("oops i can't detect your location without your permission")},2000)
     
    
  }

  showPosition(position:any):void{
    const lat = position.coords.latitude;
    const long =  position.coords.longitude

    console.log(lat , long , 'mmmm')
    const newView = new View({
      center: fromLonLat([long, lat]), // Convert lat/lon to OpenLayers format
      zoom: 12 // Adjust zoom level as needed
    });
  
    this.map.setView(newView);


  

  }

}
