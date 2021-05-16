import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StrategyComponent} from './strategy/strategy.component';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {DisclaimersComponent} from './disclaimers/disclaimers.component';
import {OurteamComponent} from './ourteam/ourteam.component';
import { DalphateamComponent } from './dalphateam/dalphateam.component';
import { DalphaportfolioComponent } from './dalphaportfolio/dalphaportfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import {ResponsibilityComponent} from 'src/app/pages/responsibility/responsibility.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { SignupComponent} from 'src/app/components/signup/signup.component';
import {PressComponent} from './press/press.component';

const routes: Routes = [
  { path: '', loadChildren: './home/home.module#HomeModule' },
  {path:'strategy', component: StrategyComponent},
  {path:'portfolio', component: PortfolioComponent},
  {path:'disclaimers', component: DisclaimersComponent},
  {path:'ourteam', component: OurteamComponent},
  {path:'dalphateam', component: DalphateamComponent},
  {path:'dalphaportfolio', component: DalphaportfolioComponent},
  {path:'contactus', component: ContactusComponent},
  {path:'responsibility', component: ResponsibilityComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'signin', component: SigninComponent},
  {path:'signup', component: SignupComponent},
  {path:'press', component: PressComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})

export class PagesRoutingModule { }
