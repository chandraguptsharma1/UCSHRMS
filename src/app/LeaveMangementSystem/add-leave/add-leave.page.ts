import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-leave',
  templateUrl: './add-leave.page.html',
  styleUrls: ['./add-leave.page.scss'],
})
export class AddLeavePage implements OnInit {

  onChange(selectedValue){
    console.info("Selected:",selectedValue);
  }

  constructor() { }

  ngOnInit() {
    this.onChange;
    
  }

}
