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
import { RestprofileComponent } from './restprofile/restprofile.component';
import { HeadingComponent } from './heading/heading.component';
import { FilterComponent } from './components/filter/filter.component';
import { RestaurantCardComponent } from './components/restaurant-card/restaurant-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './components/home.component';
import { OrdersComponent } from './orders/orders.component';
import { AuthComponent } from './auth/auth.component';
import { DailogComponent } from './auth/dailog/dailog.component';
//import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatTabsModule} from '@angular/material/tabs';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
//import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
//import {FormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
//import {MatDialogModule} from '@angular/material/dialog';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { MatCardContent } from '@angular/material/card';
import { MatLabel } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    RestprofileComponent,
    HeadingComponent,
    FilterComponent,
    RestaurantCardComponent,
    HomeComponent,
    OrdersComponent,
    AuthComponent,
    DailogComponent,
    MatCheckboxModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    ScrollingModule,
    MatCardContent,
    MatLabel
    
    

   
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
