
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";

const APP_ROUTES: Routes = [{ 
    path: 'Contact', 
    component: ContactComponent, 
    data: { 
      title: 'Heroes List' 
    }  
  },
  { 
    path: '', 
    component: HomeComponent, 
    data: {
      meta: {
        title: 'Home page',
        description: 'Description of the home page'
      }
    } 
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

