import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bases-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  public isLogged = false;

  constructor() { }

  ngOnInit(): void {
  }

}
