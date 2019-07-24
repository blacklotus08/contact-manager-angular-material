import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ContactManagerAppComponent } from './contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';



const routes : Routes =  [
  { path: '', component: ContactManagerAppComponent,
    children : [
      { path : ':id', component: MainContentComponent },
      { path : '', component: MainContentComponent }

    ]
  },
  { path: '**' , redirectTo: ''}
];


@NgModule({
  declarations: [
    ContactManagerAppComponent, 
    ToolbarComponent, 
    MainContentComponent, 
    SidenavComponent, 
    NotesComponent, 
    NewContactDialogComponent
  ],
  entryComponents: [
    NewContactDialogComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  providers : [
    UserService
  ]
})
export class ContactmanagerModule { }
