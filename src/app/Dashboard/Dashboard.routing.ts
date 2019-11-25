import { Routes } from '@angular/router';

import { ECommerceComponent } from './E-Commerce/E-Commerce.component';
import { WebAnalyticsComponent } from './WebAnalytics/WebAnalytics.component';
import { PlayerserachComponent } from './playerserach/playerserach.component';

export const DashboardRoutes: Routes = [{
   path: '',
   // redirectTo: 'ecommerce',
   redirectTo: 'web-analytics',
   pathMatch: 'full',
},
{
   path: '',
   children: [
      {
         path: 'ecommerce',
         component: ECommerceComponent
      },
      {
         path: 'web-analytics',
         component: WebAnalyticsComponent
      },
      {
         path: 'playerserach',
         component: PlayerserachComponent
      }
   ]
}
];
