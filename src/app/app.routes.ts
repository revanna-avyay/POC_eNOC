import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'userhome', component: UserhomeComponent},
];
