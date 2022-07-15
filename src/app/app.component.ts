import { Component } from '@angular/core';
import { Candidate } from './interfaces/candidate';
import { User } from './interfaces/user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usr: User ={
    name:'Alex',
    age:42,
    favoriteColor :'Blue'
  };
  displayEdit: boolean= false;

  toggleEdit(): void{
    this.displayEdit = !this.displayEdit;
  }

  saveChanges(myForm: NgForm): void{
    this.usr.name = myForm.value.name;
    this.usr.age = myForm.value.age;
    this.usr.favoriteColor = myForm.value.favoriteColor;
    this.toggleEdit();
  }

  count=0;
  candidates: Candidate[] = [
    { name: "Vanilla", color: "WhiteSmoke", votes: 2 },
    { name: "Chocolate", color: "SaddleBrown", votes: 3 },
    { name: "Strawberry", color: "LightPink", votes: 0 }
  ];

  formCandidate: Candidate ={name: "", color: "", votes: 0}
  countUp(): void{
    this.count++
  }
  addCount(amount:number){
    this.count+=amount;
  }
  addVote(i: number){
    this.candidates[i].votes++;
    
  }
  addCandidate(): void {
    this.candidates.push(this.formCandidate);
    // clear the form, make a new object for next time
    this.formCandidate = {
      name: "",
      color: "",
      votes: 0
    }
  }
}

