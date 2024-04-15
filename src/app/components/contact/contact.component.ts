import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EmailService } from 'src/app/services/email.service';
import { ErrorDialogComponent } from 'src/app/shared/error-dialog/error-dialog.component';
import { SuccessDialogComponent } from 'src/app/shared/success-dialog/success-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  public contactForm: FormGroup = this.fb.group({
    name: [null, [Validators.required]],
    lastname: [null, [Validators.required]],
    email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    phone: [null, [Validators.required, Validators.pattern("^[0-9]+$")]],
    address: [null],
    message: [null, [Validators.required]],
  })

  isMobile: boolean = false;
  isTablet: boolean = false;
  isLaptop: boolean = false;

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService,
    public dialog: MatDialog,
) { }

ngOnInit() {

  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  const mobile = screenWidth < 768;
  const tablet = screenWidth >= 768 && screenWidth < 992;
  const laptop = screenWidth >= 992;

  if (mobile) {
    this.isMobile = true;
  } else if (tablet) {
    this.isTablet = true;
  } else {
    this.isLaptop = true;
  }
}

  submitContact(form: any) {

    if (this.contactForm.invalid) {
      return
    }

    this.emailService.sendMail(form.value)
    .subscribe({
      next: (data) => {
        this.openInfoDialog('0ms', '0ms', `${data.message}`);

      },
      error: (error) => {
        console.log(error);
        this.openErrorDialog('0ms', '0ms', error.error.error);
      }
    });

    this.contactForm.reset();

  }

  openErrorDialog(enterAnimationDuration: string, exitAnimationDuration: string, informacion: any): void {
    this.dialog.open(ErrorDialogComponent, {
        width: '400px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: informacion,
    });
}

openInfoDialog(enterAnimationDuration: string, exitAnimationDuration: string, informacion: any): void {
    this.dialog.open(SuccessDialogComponent, {
        width: '400px',
        enterAnimationDuration,
        exitAnimationDuration,
        data: informacion,
    })
}

}
