import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { InputsSeismicComponent } from './inputs-seismic/inputs-seismic.component';
import { InputsProjectComponent } from './inputs-project/inputs-project.component';
import { FormsModule }   from '@angular/forms';
import { GoogleMapsService } from './services/google-maps.service';
import { USSeismicDesignService } from './services/us-seismic-design.service';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FilterBoxPriceComponent } from './filter-box-price/filter-box-price.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SliderFormComponent } from './slider-form/slider-form.component';
import { SliderModule } from 'primeng/slider';
//import { ClickOutsideModule } from 'ng4-click-outside';
import { ClickOutsideDirective } from './click-outside.directive';
import { FilterBoxDeskTypeComponent } from './filter-box-desk-type/filter-box-desk-type.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsSeismicComponent,
    InputsProjectComponent,
    SearchBarComponent,
    FilterBoxPriceComponent,
    SliderFormComponent,
    ClickOutsideDirective,
    ClickOutsideDirective,
    FilterBoxDeskTypeComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    SliderModule,
    //ClickOutsideModule,
    ],
  providers: [GoogleMapsService, USSeismicDesignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
