import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/Auth.service';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector		: 'anglo-login',
  templateUrl	: './Login.component.html',
  styleUrls		: ['./Login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm 				: FormGroup;
	newTarget	   		: string = "new";
	emailPattern 			: string = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$";
	
	ReviewsSlides : any [] = [
      { 
      	// images: '/assets/img/user-3.jpg',
      	// name:"Mia Mabanta",
      	// heading:"UI Developer",
      	content:"Login"
      },
    //   { 	images: '/assets/img/user-28.jpg',
	//       name:"Astell Mercell",
	//       heading:"Director of Brand Development at Quartz",
	//       content:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
    //   },
    //   { 
    //   	images: '/assets/img/user-4.jpg',
    //   	name:"Emmy Loren",
    //   	heading:"UX Developer",
    //   	content:"Sed consequat lobortis risus, vitae congue nulla tempor id. Curabitur eu augue id nibh tristique tristique. Phasellus vel est nisi"
    //   },
   ];

	social_icon:any[]=[
		{
			icon:"fa fa-facebook",
			link:"https://www.facebook.com/",
			color:"text-color",
			color_class:"facebook"
		},	
		{
			icon:"fa fa-google",
			link:"https://www.google.com/",
			color:"text-color",
			color_class:"google"
		},
		{
			icon:"fa fa-twitter",
			link:"https://twitter.com/",
			color:"text-color",
			color_class:"twitter"
		},
		{
			icon:"fa fa-github-alt",
			link:"https://github.com/",
			color:"text-color",
			color_class:"github"
		},
	]
	
	constructor(private router : Router,
					private formBuilder  : FormBuilder,
					public authService : AuthService,
					public translate : TranslateService) { }

	ngOnInit() {
		this.loginForm=this.formBuilder.group({
			Username		: ['',[Validators.required,Validators.pattern(this.emailPattern)]],
			password	: ['',[Validators.required,Validators.minLength(6)]],
			validate	: ""
		})
	}

	/*
	 * signinFormOpen fuction is used to open the sign up page 
	 */
	signupFormOpen(){
		this.router.navigate(['/session/sign-up']);
	}

	/*
	 * logInFormOpen function is used to login on the anglo admin template.
	 */
	onSubmit(value){
		console.log(this.loginForm)
		if(this.loginForm.valid){
			this.authService.loginUser(value);
		}
		else{
			for( let i in this.loginForm.controls)
			{
				this.loginForm.controls[i].markAsTouched();
			}
		}		
	}
}
