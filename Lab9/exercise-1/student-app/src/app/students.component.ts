export class StudentsComponent{
    title = "My List of Students";
    //currentDate = Date;

    getTitle(){
        return this.title;
    }

    //getCurrentDate(){
      //  return this.currentDate;
    //}

}

import { Component } from '@angular/core';

@Component({
    selector: 'students',
    template: '<h2>Students</h2>'
    //template: '<h2>{{title}}</h2>'
})



