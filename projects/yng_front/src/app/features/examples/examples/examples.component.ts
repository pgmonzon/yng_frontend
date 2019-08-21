import { Store, select } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

import {
  routeAnimations,
  selectIsAuthenticated
} from '../../../core/core.module';

import { State } from '../examples.state';

@Component({
  selector: 'yng-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: 'todos', label: 'yng.examples.menu.todos' },
    { link: 'stock-market', label: 'yng.examples.menu.stocks' },
    { link: 'theming', label: 'yng.examples.menu.theming' },
    { link: 'crud', label: 'yng.examples.menu.crud' },
    {
      link: 'simple-state-management',
      label: 'yng.examples.menu.simple-state-management'
    },
    { link: 'form', label: 'yng.examples.menu.form' },
    { link: 'notifications', label: 'yng.examples.menu.notifications' },
    { link: 'elements', label: 'yng.examples.menu.elements' },
    { link: 'authenticated', label: 'yng.examples.menu.auth', auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
