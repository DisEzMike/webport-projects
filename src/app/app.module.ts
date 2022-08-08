import { CachingInterceptor } from './helpers/caching.interceptor';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './web/home/home.component';
import { ScheduleComponent } from './web/schedule/schedule.component';
import { PageComponent } from './web/schedule/page/page.component';

import { FlexLayoutModule } from '@angular/flex-layout';

// material modules
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, ScheduleComponent, PageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [
    authInterceptorProviders,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
