import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SimpleForm';

  info;
constructor(private formBuilder: FormBuilder){
this.info = this.formBuilder.group({
name: '',
email: '',
presentaddress:'',
landmark:'',
city:'',
state:'',
contact: '',
language:'',
})
}

onSubmit(values: any){
console.warn("Form Submit", values)
}
}
