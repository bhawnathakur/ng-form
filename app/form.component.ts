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

                
            
         const user = new User(
this.myForm.value.email,
this.myForm.value.password,
this.myForm.value.firstName,
import { User } from './user.model';
import { Component ,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';
@Component({
    
  selector: 'my-form',
  templateUrl: 'app/form.component.html',
})
export class FormComponent  implements OnInit {
 constructor(private toastyService:ToastyService, private toastyConfig: ToastyConfig) { 
        // Assign the selected theme name to the `theme` property of the instance of ToastyConfig. 
        // Possible values: default, bootstrap, material
        this.toastyConfig.theme = 'material';
    }

    


public submitted : Boolean= false;
myForm: FormGroup;

onSubmit(){
this.submitted=true;
    console.log("submitted");

                
            
         const user = new User(
this.myForm.value.email,
this.myForm.value.password,
this.myForm.value.firstName,
this.myForm.value.lastName,
this.myForm.value.mobile,
this.myForm.value.ssn
        ) 
        if(this.myForm.valid)
        {
console.log(user);

        }
        else
        {
this.addToast()

        }
      

           }


//nSubmit ends
ngOnInit(){

    this.myForm = new FormGroup({

       

        firstName : new FormControl(null,Validators.required),
         lastName : new FormControl(null,Validators.required),
         email : new FormControl(null,[
Validators.required,
Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")

         ]),
         password : new FormControl(null,Validators.required),
          mobile : new FormControl(null,[
Validators.required ,  Validators.pattern("([0-9][0-9][0-9]-[0-9][0-9][0-9]-[0-9][0-9][0-9][0-9])|([0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9])")
 ]),
   ssn : new FormControl(null,[
Validators.required ,  Validators.pattern("([0-9][0-9][0-9]-[0-9][0-9]-[0-9][0-9][0-9][0-9])")
 ]),
      })
      
}
/*
phoneno:string = "^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$"; 
  myValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value.match(this.phoneno)) {
      return {someval: true};
    }
    return null;
  }

 */

addToast() {
        // Just add default Toast with title only
        this.toastyService.default('Hi there');
        // Or create the instance of ToastOptions
        var toastOptions:ToastOptions = {
            title:"not valid",
            msg: "The message",
            showClose: true,
            timeout: 5000,
            theme: 'default',
            onAdd: (toast:ToastData) => {
                console.log('Toast ' + toast.title + ' has been added!');
            },
            onRemove: function(toast:ToastData) {
                console.log('Toast ' + toast.id + ' has been removed!');
            }
        };
        // Add see all possible types in one shot
        this.toastyService.info(toastOptions);
       /* this.toastyService.success(toastOptions);
        this.toastyService.wait(toastOptions);
        this.toastyService.error(toastOptions);
        this.toastyService.warning(toastOptions); */
    }



  }
