import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import { HomeModule } from './home/home.module';
import { PagesRoutingModule } from './pages-routing.module';
import { StrategyComponent } from './strategy/strategy.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { DisclaimersComponent } from './disclaimers/disclaimers.component';
import { OurteamComponent } from './ourteam/ourteam.component';
import {PortfolioCardComponent} from './portfolio/portfolioCard.component';
import { DalphateamComponent } from './dalphateam/dalphateam.component';
import { DalphaportfolioComponent } from './dalphaportfolio/dalphaportfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import {SharedModule} from './shared.module';
import {PressComponent} from './press/press.component'
import {ResponsibilityComponent} from 'src/app/pages/responsibility/responsibility.component';
import { DashboardComponent } from 'src/app/components/dashboard/dashboard.component';
import { SigninComponent } from 'src/app/components/signin/signin.component';
import { SignupComponent } from 'src/app/components/signup/signup.component';

@NgModule({
  declarations: [ StrategyComponent, DashboardComponent, SigninComponent,SignupComponent, ResponsibilityComponent, PortfolioComponent, DisclaimersComponent, OurteamComponent, PortfolioCardComponent,  DalphateamComponent, DalphaportfolioComponent, PressComponent ],
  imports: [
    CommonModule,
    FormsModule,
    HomeModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
