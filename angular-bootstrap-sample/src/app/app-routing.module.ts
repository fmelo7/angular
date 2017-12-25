import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GridComponent } from './components/grid/grid.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './components/contact/contact.component';
import { TypographyComponent } from './components/typography/typography.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
    data: {
      title: 'Home'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Services'
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: {
      title: 'Portfolio'
    },
    children: [
      {
        path: 'grid',
        component: GridComponent,
        data: {
          title: 'Grid'
        }
      },
      {
        path: 'typography',
        component: TypographyComponent,
        data: {
          title: 'Typography'
        }
      }
    ]
  },
  {
    path: 'contactus',
    component: ContactComponent,
    data: {
      title: 'Contact Us'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
