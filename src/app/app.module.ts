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
import { FilterBoxSpaceTypeComponent } from './filter-box-space-type/filter-box-space-type.component';
import { SpaceTypeFormComponent } from './space-type-form/space-type-form.component';
import { CounterBtnComponent } from './counter-btn/counter-btn.component';
import { CalcsComponent } from './calcs/calcs.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FilterBoxDatePickerComponent } from './filter-box-date-picker/filter-box-date-picker.component';

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
    FilterBoxSpaceTypeComponent,
    SpaceTypeFormComponent,
    CounterBtnComponent,
    CalcsComponent,
    DateRangePickerComponent,
    FilterBoxDatePickerComponent
      ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot(),
    SliderModule,
    BrowserAnimationsModule,
    FlexLayoutModule
    ],
  providers: [GoogleMapsService, USSeismicDesignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
