import { User } from './user.model';
import { Component ,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
    
  selector: 'my-form',
  templateUrl: 'app/form.component.html',
})
export class FormComponent  implements OnInit { 
public submitted : Boolean= false;
myForm: FormGroup;

onSubmit(){
this.submitted=true;
    console.log("submitted");

if(!this.myForm.valid){
//alert("not valid")
        }
        else
        {
            //alert("is valid");
            
         const user = new User(
this.myForm.value.email,
this.myForm.value.password,
this.myForm.value.firstName,
this.myForm.value.lastName

        ) 
      

        }
    }


//nSubmit ends
ngOnInit(){

    this.myForm = new FormGroup({

       

        firstName : new FormControl(null,Validators.required,Validators.pattern("/^[a-z0-9]+$/i")),
         lastName : new FormControl(null,Validators.required,Validators.pattern("/^[a-z0-9]+$/i")),
         email : new FormControl(null,[
Validators.required,
Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")

         ]),
         password : new FormControl(null,Validators.required),
  

    })
}
  }