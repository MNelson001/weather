// Base Angular Imports
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// MAterial Imports for Dialog
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

// Import of zip component to project into template.
import { ZipDialogComponent } from '../zip-dialog/zip-dialog.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // Initial component variables
  today_weather: {};
  hourly_weahter: [];
  daily_weather: [];

  // Make sure data is loaded before rendering data
  data_loaded: boolean = false;

  // Click counter
  clicks: number = 0;

  zip_code_ref: MatDialogRef<ZipDialogComponent>

  constructor(
    private http: HttpClient,
    private dialog: MatDialog
    ) { 

    // Upon startup the dialog opens requiring a zip-code.
    // You;ll notice it is default behavior of clicking outside to close
    // has been disabled.
    this.dialog.open(ZipDialogComponent, {
      width: '50%%',
      height: 'auto',
      disableClose: true
    })
    }

  ngOnInit() {

    this.http.get('https://j9l4zglte4.execute-api.us-east-1.amazonaws.com/api/ctl/weather').subscribe( (res) => {

      // Assign object props to component vars 
      // to be used in template
      // I've taken all 3 objects in the event
      // You would like to see additonal use of the infomration.
      this.today_weather = res['today'];
      this.hourly_weahter = res['hourly'];
      this.daily_weather = res['daily'];
      this.data_loaded = true;

    })
  }

  // Simple click counter and a desc of potential optimization.
  getDayDetails() {
    this.clicks++;
    console.log(`
      In order to optimize conversions, it would make sense to create
      additional routes and a component factory / dialog to allow 
      the user to see the weather info for that specific day.
    `)
  }
  

}
