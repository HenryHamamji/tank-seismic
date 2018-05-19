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

@NgModule({
  declarations: [
    AppComponent,
    InputsSeismicComponent,
    InputsProjectComponent,
    SearchBarComponent,
    FilterBoxPriceComponent,
    SliderFormComponent
    ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    SliderModule
    ],
  providers: [GoogleMapsService, USSeismicDesignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
