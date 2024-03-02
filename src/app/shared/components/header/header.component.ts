import { Component } from '@angular/core';
import {
  heroShoppingCartSolid,
  heroUserCircleSolid,
} from '@ng-icons/heroicons/solid';

type NavLink = { label: string; link: string; icon?: string };

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  navlinks: NavLink[] = [
    { label: 'Dashboard', link: '/dashboard' },
    { label: 'Cart', link: '/cart', icon: heroShoppingCartSolid },
    { label: 'Orders', link: '/orders' },
    { label: 'Profile', link: '/profile', icon: heroUserCircleSolid },
  ];
}
