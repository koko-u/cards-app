import { Component, signal } from '@angular/core'
import { CardModel } from './models/card.model'
import { CardComponent } from './components/card.component'

@Component({
  standalone: true,
  imports: [CardComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ``,
})
export class AppComponent {
  cards = signal<CardModel[]>([
    new CardModel(
      'Soccer',
      'CyberJoker',
      '/assets/images/child-613199_640.jpg',
      'Tempor fugiat proident irure magna.',
    ),
    new CardModel(
      'Running',
      'PixelPrincess',
      '/assets/images/man-8293794_640.jpg',
      'Deserunt amet et officia in occaecat minim minim officia quis fugiat.',
    ),
    new CardModel(
      'Mountain Climbing',
      'CodeNinja',
      '/assets/images/mountain-2158661_640.jpg',
      'Enim id eiusmod officia eu deserunt reprehenderit minim aliquip ex minim cillum elit sint.',
    ),
    new CardModel(
      'Snow Boarding',
      'ByteBabe',
      '/assets/images/snowboarding-2030851_640.jpg',
      'Magna exercitation eiusmod excepteur deserunt nostrud officia qui qui sint ex occaecat.',
    ),
  ])
}
