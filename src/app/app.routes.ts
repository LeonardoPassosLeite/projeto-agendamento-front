import { Routes } from '@angular/router';
import { ProdutoComponent } from './Pages/produto/produto.component';
import { EmployeeCardComponent } from './shared/cards/employee-card/employee-card.component';
import { DropdownComponent } from './shared/forms/dropdown/dropdown.component';
import { InputComponent } from './shared/forms/input/input.component';
import { NumberInputComponent } from './shared/forms/number-input/number-input.component';
import { ProdutoCardComponent } from './shared/cards/produto-card/produto-card.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    { path: 'dashboard', component: DropdownComponent },
    { path: 'produtos', component: ProdutoComponent },
    { path: 'product-card', component: ProdutoCardComponent },
    { path: 'funcionarios', component: EmployeeCardComponent },
    { path: 'dropdown', component: DropdownComponent },
    { path: 'input', component: InputComponent },
    { path: 'number-input', component: NumberInputComponent },
];
