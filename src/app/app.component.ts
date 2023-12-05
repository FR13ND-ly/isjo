import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { DescriptionComponent } from './description/description.component';
import { SliderComponent } from './slider/slider.component';
import { MessageComponent } from './message/message.component';
import { ProgramComponent } from './program/program.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { VenueComponent } from './venue/venue.component';
import { RomaniaComponent } from './romania/romania.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FaqComponent } from './faq/faq.component';
import { NewsComponent } from './news/news.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, HeroComponent, DescriptionComponent, SliderComponent, MessageComponent, ProgramComponent, AccomodationComponent, VenueComponent, RomaniaComponent, GalleryComponent, FaqComponent, NewsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ijso';
}
