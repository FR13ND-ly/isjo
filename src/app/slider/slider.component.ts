import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, interval, map } from 'rxjs';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss'
})
export class SliderComponent implements OnInit {

  slider : string[] = [
    'https://ijso2023.in.th/wp-content/uploads/2023/10/IJSO-annouce-edit-01-1500x630.png',
    'https://ijso2023.in.th/wp-content/uploads/2023/11/Items-1500x630.png',
    'https://ijso2023.in.th/wp-content/uploads/2023/11/PDPA-1500x630.jpg',
    'https://ijso2023.in.th/wp-content/uploads/2023/11/IJSO-annouce-003covid19-ATK-check-edit28Nov2023-01-1500x630.png',
    'https://ijso2023.in.th/wp-content/uploads/2023/11/IJSO-annouce-006-01-1500x630.jpg',
    'https://ijso2023.in.th/wp-content/uploads/2023/11/IJSO-annouce-002transportation-edit28Nov2023-01-1500x630.png'
  ]

  imageIndex$ : BehaviorSubject<number> = new BehaviorSubject<number>(0);
  interval$! : Subscription;

  ngOnInit(): void {
    this.interval$ = interval(5000).subscribe(() => this.onNext())
  }

  image$ : Observable<string> = this.imageIndex$.pipe(
    map((i : number) => this.slider[i])
  )

  next() {
    this.imageIndex$.next((this.imageIndex$.value + 1) % this.slider.length)
  }

  onNext() {
    this.next()
    this.setInterval()
  }

  onPrevious() {
    this.imageIndex$.next(!this.imageIndex$.value ? this.slider.length - 1 : this.imageIndex$.value - 1)
    this.setInterval()
  }

  setInterval() {
    this.interval$.unsubscribe()
    this.interval$ = interval(5000).subscribe(() => this.onNext())
  }

}
