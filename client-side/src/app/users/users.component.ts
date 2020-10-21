import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

import { HostListener, ViewChild} from '@angular/core';
import { MdbTableDirective } from 'angular-bootstrap-md';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  @ViewChild(MdbTableDirective, {static: true})mdbTable:MdbTableDirective;
  elements: User[];
  headElements = ['ID', 'Username', 'Name', 'Role', 'Email', 'Action'];
  searchText: string = '';
  previous: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.mdbTable.setDataSource(this.elements);
    this.previous = this.mdbTable.getDataSource();
    
    this.getUsers();
  }
  
  @HostListener('input') oninput() {
    console.log("input hostListener -->" + this.searchText);
    this.searchItems();
  }

  searchItems() {
    const prev = this.mdbTable.getDataSource();
    if (!this.searchText) {
        this.mdbTable.setDataSource(this.previous);
        this.elements = this.mdbTable.getDataSource();
        
    }
    if (this.searchText) {
        this.elements = this.mdbTable.searchLocalDataByMultipleFields(this.searchText.toLocaleLowerCase(), ['Username', 'Name']);
        this.mdbTable.setDataSource(this.elements);
        
    }
}

getUsers(): void {
  this.userService.getUsers()
      .subscribe(users => this.elements = users);
}

}
