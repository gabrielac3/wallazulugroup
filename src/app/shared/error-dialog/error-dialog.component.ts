import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.scss']
})
export class ErrorDialogComponent {


  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any=[]) {
    }
  ngOnInit(): void {

  }

  procesarTexto(texto: string): string {
    return texto.replace(/\./g, '<br>');
  }

    close(){
      this.dialogRef.close(true);
  }



}
