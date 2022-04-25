import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() public fromParent;

  @Output() public childInfo = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent(){
    this.childInfo.emit("This is from Child");
  }

}
