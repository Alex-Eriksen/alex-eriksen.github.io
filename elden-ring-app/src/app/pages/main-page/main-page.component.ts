import { Component, ElementRef, OnInit } from '@angular/core';
import { AddItemComponent } from 'src/app/components/add-equipment/add-item.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void
  {
    AddItemComponent.OnItemAdded.subscribe((message) => this.HandleNotification(message));
  }

  private HandleNotification(message: string): void
  {

  }
}
