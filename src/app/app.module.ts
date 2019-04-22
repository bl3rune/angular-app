import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { LandingComponent } from './core/landing/landing.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { DelimiterComponent } from './delimiter/delimiter.component';
import { RegexComponent } from './regex/regex.component';
import { DistinctComponent } from './distinct/distinct.component';
import { DiffComponent } from './diff/diff.component';
import { SortComponent } from './sort/sort.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ConverterComponent } from './converter/converter.component';

const appRoutes: Routes = [
  { path: '', component: LandingComponent, data: { title: 'Home' } },
  { path: 'delimit', component: DelimiterComponent, data: { title: 'Delimiter' } },
  { path: 'regex', component: RegexComponent, data: { title: 'Regex Checker' } },
  { path: 'distinct', component: DistinctComponent, data: { title: 'Distinct Elements' } },
  { path: 'diff', component: DiffComponent, data: { title: 'Diff Viewer' } },
  { path: 'sort', component: SortComponent, data: { title: 'Sorter' } },
  { path: 'convert', component: ConverterComponent, data: { title: 'Converter' } },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    PageNotFoundComponent,
    DelimiterComponent,
    RegexComponent,
    DistinctComponent,
    DiffComponent,
    SortComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
