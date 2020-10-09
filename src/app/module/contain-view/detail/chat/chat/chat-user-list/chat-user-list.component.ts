import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-user-list',
  templateUrl: './chat-user-list.component.html',
  styleUrls: ['./chat-user-list.component.css']
})
export class ChatUserListComponent implements OnInit {
  userNmaes = ['Nalik','Nalik1','Nalik2']

  constructor() { }

  ngOnInit() {
  }

}
