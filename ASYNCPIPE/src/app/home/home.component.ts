import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NewspaperService } from '../newspaper.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnDestroy {

  subscriptionMode: boolean;
  newspaperStack: number[];
  newspaper$: Observable<number>;
  newspaperSubscritpion: Subscription;
  unsubscribe$: Subject<void> = new Subject();

  constructor( public newspaperService: NewspaperService ) {
    this.subscriptionMode = false;
    this.newspaperStack = [];
    this.newspaper$ = this.newspaperService.getNewspaperDaily();
  }

  buyNewspaper() {
    this.newspaperStack.push(1);
  }

  readNewspaper() {
    this.newspaperStack = [];
  }

  subscribeToNewspaper() {
    this.subscriptionMode = true;
    this.newspaperSubscritpion = this.newspaper$
    .pipe(
      takeUntil(this.unsubscribe$)
    )
    .subscribe( (newspaper) => {
      console.log(newspaper);
      this.newspaperStack.push(newspaper);
    });
  }

  unSubscribeToNewspaper() {
    this.subscriptionMode = false;
    this.newspaperSubscritpion.unsubscribe();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

}
