import {Component} from 'angular2/core';

@Component({
    selector:'courses',
    template:`
    <h2>Courses</h2>
    <h1>{{sultan}}</h1>
    {{title}}
    <ul>
        <li *ngFor="#course of courses">{{course}}</li>
    </ul>
    `
})
export class CoursesComponent{
    title:string = "This is just Title";
    sultan:string="Sultan The Real Hero";
    courses = ["Course1","Course2","Course3"]
}