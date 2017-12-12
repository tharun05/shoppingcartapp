import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter();
  constructor() { 
    console.log('from constructor')
  }

  ngOnInit() {
    console.log('oninit')
  }

  onSelect(feature:string){
    
    this.featureSelected.emit(feature);
  }

}
