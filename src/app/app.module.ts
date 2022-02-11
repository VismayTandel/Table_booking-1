import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReviewsComponent } from './reviews/reviews.component';
import { MatCardModule } from '@angular/material/card';
import { StarRatingModule } from 'angular-star-rating';
import { MenuComponent } from './menu/menu.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { FilterComponent } from './components/filter/filter.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home.component';

import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    FilterComponent,
    RestaurantCardComponent,
<<<<<<< HEAD
    
=======
    OrdersComponent,
    HomeComponent
>>>>>>> 72b79f4c8ce9d9a07aedf9511e7dc2b37079db3a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    StarRatingModule.forRoot(),
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
