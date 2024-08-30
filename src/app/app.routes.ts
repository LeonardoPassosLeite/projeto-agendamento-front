import { Routes } from '@angular/router';
import { ProdutoComponent } from './Pages/produto/produto.component';
import { ProdutoCardComponent } from './shareds/components/cards/produto-card/produto-card.component';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

    {
        path: 'produtos', component: ProdutoComponent
    },
    {
        path: 'product-card', component: ProdutoCardComponent
    },
];
