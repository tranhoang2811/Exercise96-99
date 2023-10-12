import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise9798',
  templateUrl: './exercise9798.component.html',
  styleUrls: ['./exercise9798.component.css'],
})
export class Exercise9798Component implements OnInit {
  public registrationForm: FormGroup;
  public isSubmitting: boolean = false;
  public isNameInvalid: boolean = false;
  public isCourseInvalid: boolean = false;
  public isAgreementInvalid: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required]),
      email: this.formBuilder.control(''),
      phone: this.formBuilder.control(''),
      course: this.formBuilder.control('', [Validators.required]),
      shift: this.formBuilder.control(''),
      agreement: this.formBuilder.control(false, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.registrationForm.valueChanges.subscribe(this.validateForm);
  }

  public onSubmit(): void {
    this.isSubmitting = true;
    const agreementControl = this.registrationForm.get('agreement');
    if (agreementControl) {
      this.isAgreementInvalid = !agreementControl.value;
    }
    this.registrationForm.markAllAsTouched();
    this.validateForm();
  }

  private validateForm(): void {
    const nameControl = this.registrationForm.get('name');
    const courseControl = this.registrationForm.get('course');
    if (nameControl) {
      this.isNameInvalid =
        nameControl.invalid &&
        (nameControl.dirty || nameControl.touched || this.isSubmitting);
    }
    if (courseControl) {
      this.isCourseInvalid =
        courseControl.invalid &&
        (courseControl.dirty || courseControl.touched || this.isSubmitting);
    }
  }
}
