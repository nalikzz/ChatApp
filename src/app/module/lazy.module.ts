import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ContainViewComponent } from './contain-view/contain-view.component';
import { SideNavComponent } from './contain-view/side-nav/side-nav.component';
import { DetailComponent } from './contain-view/detail/detail.component';
import { HeaderComponent } from './contain-view/header/header.component';
import { MaterialModule } from './Share/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  
  {path: 'home', component: ContainViewComponent}
];

@NgModule({
  declarations: [ ContainViewComponent, SideNavComponent, DetailComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FlexLayoutModule
  ]
})
export class LazyModule { }
