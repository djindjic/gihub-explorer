import { Component } from '@angular/core';

import { AppState } from '../../app.service';
import { Github } from '../../github-api';

@Component({
  selector: 'celebrities',
  styleUrls: [ './celebrities.component.scss' ],
  templateUrl: './celebrities.component.html'
})
export class Celebrities {
  list: any[];
  constructor(
    public appState: AppState,
    public github: Github
  ) {
      github.getUsers({
        location: appState.get('location'),
        sort: 'followers',
        order: 'desc'
      }).subscribe((data) => {
        this.list = data.items;
      });
  }

  ngOnInit() {
    console.log('hello `celebrities` component');
  }
}