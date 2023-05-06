

import {BreakpointObserver, MediaMatcher} from '@angular/cdk/layout';
import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import { ComplaintsComponent } from '../complaints/complaints.component';
import { MatSidenav } from '@angular/material/sidenav';
import { SettingsService } from '../service/settings.service';
import { UserComponent } from 'src/app/user/user.component';
import { UsersComponent } from '../users/users.component';
import { NotificationsComponent } from '../notification/notifications/notifications.component';
import { MessagesComponent } from '../messages/messages.component';


export interface NavbarItem {
  label: string;
  link: string;
  color: string;
  component: any;
}
/** @title Responsive sidenav */
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnDestroy {
  title = 'NewsProject';
  sources: any = [];
  articles:any = [];
  selectedNewsChannel: string="Top 10 Trending News!";

  @ViewChild(MatSidenav) sideNav!: MatSidenav;

  // ngOnInit(): void {
  //   this.newsApi.initArticles().subscribe((res:any)=>{
  //     console.log(res);
  //     this.articles = res.articles;
  //   })
  //   this.newsApi.initSources().subscribe((res:any)=>{
  //     console.log(res);
  //     this.sources = res.sources;
  //   })

  // }
  // constructor(private observer : BreakpointObserver, private cd : ChangeDetectorRef,  private newsApi :SettingsService){

  // }
  // ngAfterViewInit(): void {
  //   this.sideNav.opened = true;
  //   this.observer.observe(['(max-width:800px)'])
  //   .subscribe((res)=>{
  //     if(res?.matches){
  //       this.sideNav.mode="over";
  //       this.sideNav.close();
  //     }else{
  //       this.sideNav.mode = 'side';
  //       this.sideNav.open();
  //     }
  //   })
  //   this.cd.detectChanges();
  // }
  // searchSource(source:any){
  //   this.newsApi.getArticlesByID(source.id)
  //   .subscribe((res:any)=>{
  //     this.selectedNewsChannel = source.name
  //     this.articles = res.articles;
  //   })
  // }

  navbarItems: NavbarItem[] = [
    { label: 'Complaints', link: '/dashboard/complaints',color: 'red', component: ComplaintsComponent,  },
    { label: 'UserManangement', link: '/dashboard/user',color: 'red', component: UsersComponent,  },
    { label: 'Notifications', link: '/dashboard/notifications',color: 'black', component: NotificationsComponent },
    { label: 'messaging', link: '/dashboard/messaging',color: 'black', component: UsersComponent },
 
  ];

  mobileQuery: MediaQueryList;
  panelOpenState = false;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 1},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }


}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */