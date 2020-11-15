import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactServiceService} from '../contact-service.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

  // email= new FormControl();
  // name=new FormControl();
  FormData: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactServiceService,
    ) { }

  ngOnInit() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])});
  }
  onSubmit(FormData) {
    console.log(FormData);
    // @ts-ignore
    this.contact.postMsg(FormData)
      .subscribe(res => {
        location.href = 'https://mailthis.to/confirm';
        console.log(res);
      }, error => {
          console.warn(error.resText);

          console.log({error});
        });
  }

  // save(){
  //   alert(`your email is ${this.email.value} and your name is ${this.name.value}`)
  // }

}
