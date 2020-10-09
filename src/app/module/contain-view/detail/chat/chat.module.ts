import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatUserListComponent } from './chat/chat-user-list/chat-user-list.component';
import { ChatDetailComponent } from './chat/chat-detail/chat-detail.component';
import { MaterialModule } from 'src/app/module/Share/material/material.module';



@NgModule({
  declarations: [ChatComponent, ChatUserListComponent, ChatDetailComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ChatModule { }
