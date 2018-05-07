import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.css']
})
export class PostListComponentComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() { }

  ngOnInit() {
  }

  private getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0){
      return 'red';
    } else {
      return '';
    }
  }

  private getBackgroundColor() {
    if(this.loveIts > 0) {
      return '#9fff80';
    } else if(this.loveIts < 0){
      return '#ffcccc';
    } else {
      return '';
    }
  }

  private setLoveIts(point: number) {
    this.loveIts = this.loveIts + point;
  }

}
