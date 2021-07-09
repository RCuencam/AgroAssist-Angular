import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import { FarmersApiService } from 'src/app/services/farmers-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  farmers:Array<Farmer>=[]
  lastFarmer:Farmer;
  constructor(private farmers_service : FarmersApiService) {
    this.lastFarmer={} as Farmer
   }

  ngOnInit(): void {
    this.getAllFarmers()
  }

  getAllFarmers():void{
    this.farmers_service.getAllFarmers().subscribe((response:any)=>{
      this.farmers=response;
      this.lastFarmer=response[response.length-1]
      console.log(this.farmers);
      console.log(this.lastFarmer);
      
      
      
    })
  }
}
