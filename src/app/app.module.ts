  import { NgModule } from '@angular/core';
	import { AppComponent } from './app.component';
	import { RouterService } from './services/router.service';
	import { NotesService } from './services/notes.service';
	import { AuthenticationService } from './services/authentication.service';
	import { HeaderComponent } from './header/header.component';
	import { DashboardComponent } from './dashboard/dashboard.component';
	import { LoginComponent } from './login/login.component';
	import { CanActivateRouteGuard } from './can-activate-route.guard';
	import { BrowserModule } from '@angular/platform-browser';
	import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
	import { HttpClientModule } from '@angular/common/http';
	import { MatToolbarModule } from '@angular/material/toolbar';
	import { LayoutModule } from '@angular/cdk/layout';
	import { MatButtonModule } from '@angular/material/button';
	import { MatSidenavModule } from '@angular/material/sidenav';
	import { MatIconModule } from '@angular/material/icon';
	import { MatListModule } from '@angular/material/list';
	import { MatCardModule } from '@angular/material/card';
	import { MatExpansionModule } from '@angular/material/expansion';
	import { MatFormFieldModule } from '@angular/material/form-field';
	import { MatInputModule } from '@angular/material/input';
	import { FormsModule, ReactiveFormsModule } from '@angular/forms';
	import { RouterModule, Routes } from '@angular/router';
	
	const appRoutes: Routes = [
	  { path: 'login', component: LoginComponent },
	  { path: 'dashboard', component: DashboardComponent, canActivate: [CanActivateRouteGuard] },
	  {
	    path: '',
	    redirectTo: '/dashboard',
	    pathMatch: 'full'
	  }
	];
	
	@NgModule({
	  declarations: [AppComponent,
	    HeaderComponent,
	    LoginComponent,
	    DashboardComponent],
	  imports: [
	    RouterModule.forRoot(appRoutes,
	      { enableTracing: false } 
	    ),
	    BrowserModule,
	    BrowserAnimationsModule,
	    HttpClientModule,
	    MatToolbarModule,
	    LayoutModule,
	    MatToolbarModule,
	    MatButtonModule,
	    MatSidenavModule,
	    MatIconModule,
	    MatListModule,
	    MatCardModule,
	    MatExpansionModule,
	    MatFormFieldModule,
	    MatInputModule,
	    FormsModule,
	    ReactiveFormsModule],
	  providers: [RouterService,
	    NotesService,
	    AuthenticationService,
	    CanActivateRouteGuard],
	  bootstrap: [AppComponent]
	})
	
	export class AppModule { }