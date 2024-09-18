import { Routes } from '@angular/router';
import { ProdutoComponent } from './Pages/produto/produto.component';
import { ProdutoCardComponent } from './shareds/components/cards/produto-card/produto-card.component';
import { EmployeeCardComponent } from './shareds/components/cards/employee-card/employee-card.component';
import { DropdownComponent } from './shareds/components/dropdown/dropdown.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    { path: 'dashboard', component: DropdownComponent },
    { path: 'produtos', component: ProdutoComponent },
    { path: 'product-card', component: ProdutoCardComponent },
    { path: 'funcionarios', component: EmployeeCardComponent },
    { path: 'dropdown', component: DropdownComponent },
];
