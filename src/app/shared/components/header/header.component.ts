import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import {
  heroShoppingCartSolid,
  heroUserCircleSolid,
} from '@ng-icons/heroicons/solid';
import { Observable, Subscription, fromEvent, map, of, timer } from 'rxjs';

type NavLink = { label: string; link: string; icon?: string };

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showLogoutControlSub$?: Subscription;
  showControl: boolean = false;

  navlinks: NavLink[] = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Cart', link: '/cart', icon: heroShoppingCartSolid },
    { label: 'Orders', link: '/orders' },
    { label: 'Profile', link: '/profile', icon: heroUserCircleSolid },
  ];

  onMouseover() {
    this.showLogoutControlSub$ && this.showLogoutControlSub$.unsubscribe();
    this.showControl = true;
  }

  onMouseout() {
    this.showLogoutControlSub$ && this.showLogoutControlSub$.unsubscribe();
    this.showLogoutControlSub$ = timer(3000).subscribe(
      () => (this.showControl = false),
    );
  }

  logout() {}
}
