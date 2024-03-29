import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { MatInputModule,
         MatTooltipModule,
         MatButtonModule,
         MatMenuModule,
         MatIconModule,
         MatCardModule,
         MatTabsModule,
         MatFormFieldModule,
         MatProgressSpinnerModule,
         MatOption,
         MatSelectModule,
         MatDatepickerModule,
         MatCheckboxModule} from '@angular/material';

import { DashboardRoutes } from './Dashboard.routing';
import { ECommerceComponent } from './E-Commerce/E-Commerce.component';
import { WebAnalyticsComponent } from './WebAnalytics/WebAnalytics.component';

import { WidgetsComponentsModule } from '../WidgetsComponents/WidgetsComponents.module';
import { PlayerserachComponent } from './playerserach/playerserach.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
};

@NgModule({
   imports: [
      CommonModule,
      FormsModule,
      RouterModule.forChild(DashboardRoutes),
      FlexLayoutModule,
      FormsModule,
      ReactiveFormsModule,
      TranslateModule,
      MatFormFieldModule,
      MatTooltipModule,
      MatSelectModule,
      MatDatepickerModule,
      MatInputModule,
      MatCheckboxModule,  
      DropzoneModule,
      MatButtonModule,
      MatMenuModule,
      MatIconModule,
      WidgetsComponentsModule,
      MatCardModule,
      MatTabsModule,
      MatProgressSpinnerModule
   ],
   declarations: [ 
      ECommerceComponent, 
      WebAnalyticsComponent, PlayerserachComponent
   ],
   providers: [
      {
         provide: DROPZONE_CONFIG,
         useValue: DEFAULT_DROPZONE_CONFIG
      }
   ],
})

export class DashboardModule {}
