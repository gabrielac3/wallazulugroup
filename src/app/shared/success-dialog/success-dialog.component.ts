import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.scss']
})
export class SuccessDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any = []
) {
  this.closeAfterDelay();
}

ngOnInit(): void {

}

procesarTexto(texto: string): string {
    return texto.replace(/\./g, '<br>');
}

close() {
    this.dialogRef.close(true)
}

private closeAfterDelay() {
  setTimeout(() => {
    this.dialogRef.close();
  }, 3000);
}

}
