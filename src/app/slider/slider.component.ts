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
    '/assets/slider/1.webp',
    '/assets/slider/2.webp',
    '/assets/slider/3.webp'
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

  onSelect(index: number) {
    this.imageIndex$.next(index)
    this.setInterval()
  }
}
