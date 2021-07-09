import { Component, OnInit } from '@angular/core';
import { Farmer } from 'src/app/models/farmer';
import {FormControl, Validators} from '@angular/forms';
import { FarmersApiService } from 'src/app/services/farmers-api.service';

@Component({
  selector: 'app-add-farmer',
  templateUrl: './add-farmer.component.html',
  styleUrls: ['./add-farmer.component.css']
})
export class AddFarmerComponent implements OnInit {
  newFarmer: Farmer;
  constructor(private farmers_service : FarmersApiService) {
    this.newFarmer={} as Farmer
    this.newFarmer.id=0
   }

  ngOnInit(): void {
  }

  postFarmer(): void{
    this.farmers_service.addFarmer(this.newFarmer).subscribe((response : any)=>{
      console.log(response);
      
    })
    
  }
}
