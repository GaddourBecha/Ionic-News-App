import { Component } from '@angular/core';

import {SettingsPage} from "../settings/settings";
import {RedditsPage} from "../reddits/reddits";
import {ContactPage} from "../contact/contact";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = RedditsPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
