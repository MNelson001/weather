// Base Angular imports
import { Component, Inject } from '@angular/core';

// Mat dialog imports for reference and data.
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  zip_code: string;
}

@Component({
  selector: 'app-zip-dialog',
  templateUrl: './zip-dialog.component.html',
  styleUrls: ['./zip-dialog.component.scss']
})

export class ZipDialogComponent {

  // Initial component variables
  agreement_checked: boolean;
  zip_entered: string = '';
  sufficient_zip: boolean = false;

  constructor(

    // Giving the capability of component to display itself within
    // a MatDialog call.

    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  // Simple event to get value of zip from input
  onKey(e) {
    this.zip_entered = e.target.value;
  }

  // Simple event to check if checkbox is checked
  checked(e) {
    this.agreement_checked = e.checked;
  }

  // Lifecycle hook to observe agreement and zip length in order to display submit button
  ngDoCheck() {
    if (this.agreement_checked && this.zip_entered.length === 5) {
      this.sufficient_zip = true;
    }
  }

  // Close dialog once submit is clicked
  closeDialog() {
    this.dialogRef.close();
  }

}
