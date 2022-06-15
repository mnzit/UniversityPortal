import { Component } from '@angular/core';
import { GuardsCheckEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  
}


// Login Feature

// Login Module (Module)
// Components -> Login Component (Component)
// If not logged in -> http://www.localhost:4200/ directs to login component else display the secure component, (Route)
// If not logged in -> http://www.localhost:4200/login directs to login component else display the secure component (Route)
// Protect the secure resource (guards)
// Call the backend webservice (service)
// Attach the authenticated token to every request you make by intercepting it and adding the authorization token (interceptor)
// Login -> Response -> Resolver layer will Request Backend for dashboard data using service layer-> show the dashboard component with data (resolver) [Component -> Resolver -> Component]
// Guards, Route, Interceptor, Resolver, Service, Component, Module
