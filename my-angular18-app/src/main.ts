import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { PreloadAllModules, provideRouter, Router, withPreloading } from '@angular/router';
import { API_URL, FEATURES, USER_NAME } from './app/app.tokens';
import { routes } from './app/app.routes';
import { signal, inject } from '@angular/core';


bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes,withPreloading(PreloadAllModules)),
    { provide: API_URL, useValue: 'https://www.facebook.com' },
    { provide: FEATURES, useValue: 'search', multi: true },
    { provide: FEATURES, useValue: 'share', multi: true },
    { provide: USER_NAME, useValue: 'Ibrahim' }
  ],
  
});


