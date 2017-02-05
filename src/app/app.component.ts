import { Component } from '@angular/core';

@Component({
  selector: 'bs-app',
  template: `
  <h1>{{pageTitle}}<h1>
  <div>App Component Test</div>
  <p>Testing Angular 2 with {{boyfriend}}</p>
  <bs-welcome></bs-welcome>
  `
})

export class AppComponent {
  pageTitle: string = 'Dev Book Store';
  boyfriend: string = 'Simon';
  showBook(): void {

  }
}
