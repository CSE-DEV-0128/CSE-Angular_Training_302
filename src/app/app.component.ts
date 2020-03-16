import { Component } from '@angular/core';

import {
  Employee,
  Pokemon,
  EmployeeLoaderService
} from './employee-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  employeeData: Employee[] = [];
  pokeData: Pokemon[] = [];

  constructor(svc: EmployeeLoaderService) {
    svc
      .loadEmployees()
      .subscribe((data: Employee[]) => (this.employeeData = data));

      svc
      .loadPokemon()
      .subscribe((data: Pokemon[]) => (this.pokeData = data));
  }
}
