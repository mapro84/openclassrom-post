import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'posts';

  posts = [
    { 
      title: "My first post", 
      content: 'Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500', 
      loveIts: 2, 
      created_at: new Date() 
    },
    { 
      title: "My second post", 
      content: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte', 
      loveIts: 0, 
      created_at: new Date() 
    },
    { 
      title: "Another post", 
      content: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L\'avantage du Lorem Ipsum sur un texte générique comme \'Du texte', 
      loveIts: -1, 
      created_at: new Date() 
    }
  ];

  constructor() {}

}
