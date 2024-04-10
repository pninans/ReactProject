import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 template:"<app-student></app-student>"

})
export class AppComponent {
   title:string='my-app'
   getGreeting() {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
   
  
    if (currentHour >= 0 && currentHour < 12) {
    return  "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
     return  "Good afternoon";
    } else {
      return  "Good evening";
    }
  
    
  }
  
 
  constructor(){

  }
}
