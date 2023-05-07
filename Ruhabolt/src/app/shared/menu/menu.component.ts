import { Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    this.user = JSON.parse(localStorage.getItem("user") || "[]")
  }

  user: any
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem("user") || "[]")
  }

  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() onClickLogout = new EventEmitter();

  close() {
    this.onCloseSidenav.emit(true);
  }

  logout() {
    this.onClickLogout.emit();
  }

}
