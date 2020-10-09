import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../Share/material/material.module';
import { ContainViewComponent } from './contain-view.component';
import { ChatModule } from './detail/chat/chat.module';
import { ChatComponent } from './detail/chat/chat/chat.component';
import { DetailComponent } from './detail/detail.component';
import { SettingModule } from './detail/setting/setting.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SettingComponent } from './detail/setting/setting/setting.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [

  {
    path: 'home', component: ContainViewComponent,
    children: [
      { path: '', redirectTo: 'chat', pathMatch: 'full' },
      { path: 'chat', component: ChatComponent },
      { path: 'setting', component: SettingComponent },
    ]
  },
  {
    path: 'login', component: LoginFormComponent,
  },


];

@NgModule({
  declarations: [ContainViewComponent, SideNavComponent, DetailComponent, LoginFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule,
    ChatModule,
    SettingModule
  ]
})
export class HomeModule { }
