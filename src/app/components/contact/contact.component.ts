import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

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

    console.log(form.value);

    const dataMail = {
      nombre: form.value.name,
      correo: form.value.email,
    }

    this.emailService.sendMail(dataMail)
    .subscribe({
      next: (data) => {
        console.log(data);

      },
      error: (error) => {
        console.log(error);

      }
    });


    this.contactForm.reset();

  }

}
