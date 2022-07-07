import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'up-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  isLoading!: boolean;

  constructor(private loaderService: LoaderService) {
    this.loaderService.getLoader().subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
  }
}
