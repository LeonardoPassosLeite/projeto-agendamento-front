import { Routes } from '@angular/router';
import { ProdutoComponent } from './Pages/produto/produto.component';
import { EmployeeCardComponent } from './shared/cards/employee-card/employee-card.component';
import { DropdownComponent } from './shared/forms/dropdown/dropdown.component';
import { InputComponent } from './shared/forms/input/input.component';
import { NumberInputComponent } from './shared/forms/number-input/number-input.component';
import { DatepickerComponent } from './shared/forms/datepicker/datepicker.component';
import { ProdutoDetailComponent } from './Pages/produto/produto-detail/produto-detail.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    { path: 'dashboard', component: DropdownComponent },
    { path: 'produtos', component: ProdutoComponent },
    { path: 'produto-detail', component: ProdutoDetailComponent },
    { path: 'funcionarios', component: EmployeeCardComponent },
    { path: 'dropdown', component: DropdownComponent },
    { path: 'input', component: InputComponent },
    { path: 'number-input', component: NumberInputComponent },
    { path: 'datepicker', component: DatepickerComponent },
];
