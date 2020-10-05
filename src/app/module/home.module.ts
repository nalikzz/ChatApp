import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainViewComponent } from './contain-view/contain-view.component';
import { SideNavComponent } from './contain-view/side-nav/side-nav.component';
import { DetailComponent } from './contain-view/detail/detail.component';
import { MaterialModule } from './Share/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatModule } from './contain-view/detail/chat/chat.module';
import { SettingModule } from './contain-view/detail/setting/setting.module';
import { ChatComponent } from './contain-view/detail/chat/chat/chat.component';
import { SettingComponent } from './contain-view/detail/setting/setting/setting.component';

const routes: Routes = [
  
  {path: 'home', component: ContainViewComponent}
  
];

@NgModule({
  declarations: [ ContainViewComponent, SideNavComponent, DetailComponent],
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
