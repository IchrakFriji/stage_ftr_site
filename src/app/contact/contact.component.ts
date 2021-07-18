import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup ,Validators ,FormBuilder,AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  myForm: FormGroup;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  namePattern= "[a-zA-Z ]*";

  constructor(public fb:FormBuilder) {
    this.myForm=this.fb.group({
      c_fname: ['',[Validators.required, Validators.minLength(3),Validators.pattern(this.namePattern)]],
      c_lname:['',[Validators.required, Validators.minLength(3),Validators.pattern(this.namePattern)]],
      c_email:['',[Validators.required,Validators.pattern(this.emailPattern)]],
      c_subject:['',[Validators.required, Validators.minLength(3),Validators.pattern(this.namePattern)]],
      c_message:['',[Validators.required, Validators.minLength(10),Validators.pattern(this.namePattern)]],
    })
  }
  get f() {
    return this.myForm.controls;
  }

  ngOnInit(): void {

  }

  contact(){
    console.log(this.myForm.value);
  }
}
