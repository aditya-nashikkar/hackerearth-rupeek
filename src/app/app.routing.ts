import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RupeekComponent } from './components/rupeek/rupeek.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/rupeek',
        pathMatch: 'full'
    },
    {
        path:'rupeek',
        component: RupeekComponent
    },
    {
        path:'rupeek/:id1/:id2/:id3/:id4/:id5/:id6/:id7',
        component: RupeekComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);