import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserhomeComponent } from './components/userhome/userhome.component';
import { LayoutComponent } from './components/layout/layout.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { CalenderViewComponent } from './components/calender-view/calender-view.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {path: '', component: LayoutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path: 'userhome', component: UserhomeComponent},
    {path: 'stepper', component: StepperComponent},
    {path: 'calender', component: CalenderViewComponent},
];
