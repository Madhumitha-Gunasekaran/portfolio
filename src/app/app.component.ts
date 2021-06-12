import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contactForm: FormGroup = new FormGroup({
    Name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required,Validators.email]),
    description:new FormControl('',Validators.required)
  });
  title = 'app';
  experience=true;
  educ=false;
  blogs=[{
    title:'MxGraph',
    explanation:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
    image:'assets/download.jfif'
  },{
  title:'Angular Unit Testing',
  explanation:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  image:'assets/unittest.png'
  },
  // {title:'Angular Unit Testing',
  // explanation:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
  // image:'assets/graph.png'
  // }
]
  experince(): void{
    this.educ=false;
  this.experience=true;
  }
  education(): void{
    this.experience=false;
  this.educ=true;
  }
  submit(): void{
    const user={
      name:this.contactForm.controls.Name.value,
      email:this.contactForm.controls.email.value,
      description:this.contactForm.controls.description.value
    }
    console.log(user,'user');
  }
  downloadPDF(){
    let link = document.createElement("a");
        link.download = "Madhumitha_G.pdf";
        link.href = "assets/Madhumitha_gunasekaran_CV.pdf";
        link.click();
  }
}
