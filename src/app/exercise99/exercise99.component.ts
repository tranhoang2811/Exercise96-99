import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-exercise99',
  templateUrl: './exercise99.component.html',
  styleUrls: ['./exercise99.component.css'],
})
export class Exercise99Component {
  public calculateForm: FormGroup;
  public result: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.calculateForm = this.formBuilder.group({
      a: this.formBuilder.control(''),
      b: this.formBuilder.control(''),
      c: this.formBuilder.control(''),
    });
  }

  public findMax(): void {
    const a: number = parseFloat(this.calculateForm.get('a')?.value);
    const b: number = parseFloat(this.calculateForm.get('b')?.value);
    const c: number = parseFloat(this.calculateForm.get('c')?.value);
    const max: Number = Math.max(a, b, c);
    this.result = max.toString();
  }

  public findMin(): void {
    const a: number = parseFloat(this.calculateForm.get('a')?.value);
    const b: number = parseFloat(this.calculateForm.get('b')?.value);
    const c: number = parseFloat(this.calculateForm.get('c')?.value);
    const min: Number = Math.min(a, b, c);
    this.result = min.toString();
  }

  public sinA(): void {
    const a: number = parseFloat(this.calculateForm.get('a')?.value);
    const sin: number = Math.sin(a);
    this.result = sin.toString();
  }

  public cosA(): void {
    const a: number = parseFloat(this.calculateForm.get('a')?.value);
    const cos: number = Math.cos(a);
    this.result = cos.toString();
  }

  public aPowB(): void {
    const a: number = parseFloat(this.calculateForm.get('a')?.value);
    const b: number = parseFloat(this.calculateForm.get('b')?.value);
    const pow: number = Math.pow(a, b);
    this.result = pow.toString();
  }
}
