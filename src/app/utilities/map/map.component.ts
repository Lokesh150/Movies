import { Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import { latLng, LeafletMouseEvent, marker, Marker, tileLayer } from 'leaflet';
import { coordinates } from './coordinates';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  @Output()
  selectedCoordinates = new EventEmitter<coordinates>();

  @Input()
  theaterCoordinates:coordinates[]=[]

  ngOnInit(): void {
    this.layers=this.theaterCoordinates.map(value=> marker([value.latitude,value.longitude]));
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
    ],
    zoom: 15,
    center: latLng(17.496620603251074, 78.36157321929933)
  };

  layers: Marker<any>[]=[];

  handleMapClick(event : LeafletMouseEvent){
    const latitude = event.latlng.lat;
    const longitude = event.latlng.lng;
    this.layers=[];
    this.layers.push(marker([latitude,longitude]))
    this.selectedCoordinates.emit({latitude,longitude});
    console.log(latitude,longitude);
  }

}
