import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { OverviewPage } from '../overview/overview';
import { CategoriesPage } from '../categories/categories';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = OverviewPage;
  tab3Root = CategoriesPage;

  constructor() {

  }
}
