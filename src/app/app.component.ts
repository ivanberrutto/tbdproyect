
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import {CommonModule} from '@angular/common';
import { HousingLocation } from './housinglocation';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    HomeComponent
  ],
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logohome.png" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
      <section>
        <form>
          <input type="text" placeholder="Filter by city">
          <button class="primary" type="button">Search</button>
        </form>
      </section>
      <section class="results">
        <app-housing-location></app-housing-location>
      </section>
    </main>
  `,

})
export class AppComponent {
  title = 'arhbo';
}





