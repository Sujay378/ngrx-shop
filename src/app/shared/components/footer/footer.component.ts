import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  links: { label: string; href: string }[] = [
    { label: 'link1', href: 'https://link1' },
    { label: 'link2', href: 'https://link2' },
    { label: 'link3', href: 'https://link3' },
  ];
}
