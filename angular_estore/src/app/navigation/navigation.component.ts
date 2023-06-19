import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  searchForm = new FormGroup({
    search: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  search(): void {
    //console.log(this.searchForm.value);
    console.log("searching...")
  }

}

