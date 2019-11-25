import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-playerserach',
  templateUrl: './playerserach.component.html',
  styleUrls: ['./playerserach.component.css']
})
export class PlayerserachComponent implements OnInit {
  searchplayer:FormGroup;
  submitted: boolean;
  isShown: boolean = false ;
  show:boolean = false;
  buttonName:any = 'Show';

  constructor( private fb: FormBuilder) { }

  ngOnInit() {

    this.searchplayer = this.fb.group({
      stype:['',Validators.required],
      tookajob:['',Validators.required],
      Descrp:['',Validators.required],
      gender:['',Validators.required],
      agency:['',Validators.required],
      FirstName:['',Validators.required],
      LirstName:['',Validators.required],
      subscription:['',Validators.required],
      BirthDay:['',Validators.required]
   });
  }

  onSubmit(){
   
    this.submitted = true;
	

        // stop here if form is invalid
     if (this.searchplayer.invalid) {
		
		   return;
		   
     }

        // display form values on success
		alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchplayer.value, null, 4));
		console.log(this.searchplayer)
    }

    toggleShow() {

      this.isShown = ! this.isShown;
      
      }
      toggle() {
        this.show = !this.show;
    
        // CHANGE THE NAME OF THE BUTTON.
        if(this.show)  
          this.buttonName = "Hide";
        else
          this.buttonName = "Show";
      }

  }

