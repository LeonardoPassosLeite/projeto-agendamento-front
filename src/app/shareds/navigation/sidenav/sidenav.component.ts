import { Component } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MaterialModule } from '../../../../shareds/Commons/MaterialModule';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MaterialModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  closeSubMenu(menuTrigger: MatMenuTrigger) {
    setTimeout(() => menuTrigger.closeMenu(), 300)
  }
}
