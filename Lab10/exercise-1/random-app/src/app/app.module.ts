import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeoresComponent } from './heores/heores.component';
import { RemoveSpacesPipe } from './remove-spaces.pipe';
import { DirectivePipe } from './directive.pipe';

@NgModule({
  declarations: [
    //AppComponent,
    HeoresComponent,
    RemoveSpacesPipe,
    DirectivePipe
  ],
  imports: [
    BrowserModule,
   // AppRoutingModule,
    FormsModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }