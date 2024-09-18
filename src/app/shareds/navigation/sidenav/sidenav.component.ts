import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

export interface MenuItem {
  label: string;
  icon?: string;
  route?: string;
  submenu?: MenuItem[];
}

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  submenuOpen = false;
  selectedMenuTitle: string | null = null;
  activeSubmenu: MenuItem[] | null = null;

  constructor(private router: Router) { }

  menuItems: MenuItem[] = [
    {
      label: 'Cadastros',
      icon: 'person_add',
      route: '',
      submenu: [
        { label: "Produtos", icon: '', route: "/produtos" },
        { label: "Clientes", icon: '', route: "/dropdown" },
        { label: "Funcionarios", icon: '', route: "/produtos" },
        { label: "Categorias", icon: '', route: "/produtos" },
      ]
    },
    {
      label: 'Vendas',
      icon: 'settings',
      route: '/settings',
      submenu: [
        { label: 'Pedidos', icon: '', route: '/settings/subitem1' },
        { label: 'Clientes', icon: '', route: '/settings/subitem2' },
        { label: 'Faturas', icon: '', route: '/settings/subitem2' },
        { label: 'Relatórios de vendas', icon: '', route: '/settings/subitem2' },
        { label: 'Descontos e promoções', icon: '', route: '/settings/subitem2' },
        { label: 'Produtos', icon: '', route: '/settings/subitem2' },
        { label: 'Pagamentos', icon: '', route: '/settings/subitem2' },
        { label: 'Vendedores', icon: '', route: '/settings/subitem2' },
        { label: 'Metas', icon: '', route: '/settings/subitem2' },
        { label: 'Cotações', icon: '', route: '/settings/subitem2' },
      ],
    },
    {
      label: 'Configurações',
      icon: 'help',
      route: '/help',
    },
    {
      label: 'Componentes',
      icon: 'help',
      route: '/help',
    },
  ];

  selectMenu(item: MenuItem) {
    this.selectedMenuTitle = item.label;
    this.activeSubmenu = item.submenu || null;
    this.submenuOpen = !!item.submenu;
  }

  navigateTo(subItem: MenuItem) {
    this.router.navigate([subItem.route]);
  }

  closeSubmenu() {
    this.submenuOpen = false;
    this.selectedMenuTitle = null;
    this.activeSubmenu = null;
  }
}