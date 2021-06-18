import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';
import {NgbPopover} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public currentRoute: any;
  count: any = localStorage.count;;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.loadCartItems();
  }

  ngDoCheck() {
    this.count = localStorage.count;;
  }

  loadCartItems() {
    this.api.getCartItems().subscribe((items) => {
      localStorage.setItem('count', String(items.length));
      this.count = localStorage.count;
    })
  }

  toggleCart(popover) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open();
    }
  }
  onWindowScroll(ev) {

  }

}
