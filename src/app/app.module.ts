import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerModule } from './components/spinner/spinner.module';
import { StorageServiceService } from './core/services/auth/storage-service.service';
import { RestService } from './core/services/rest.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationService } from './configuration/configuration.service';
import { UserDialogComponent } from './configuration/user/dialog/dialog.component';
import { TokenInterceptor } from './core/services/auth/token.interceptor';
import { AutoLogoutService } from './auto-logout.service';
import { MaterialModule } from './material/material.module';
import { PipesModule } from './shared/pipes/pipe.module';


@NgModule({
  declarations: [AppComponent,  UserDialogComponent, ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule.forRoot(),
    FormsModule,
    HttpClientModule,
    MaterialModule,
    SpinnerModule,
    ReactiveFormsModule,
    PipesModule
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    RestService, AutoLogoutService,
    ConfigurationService, StorageServiceService
  ],
  entryComponents: [ UserDialogComponent]
})
export class AppModule { }
