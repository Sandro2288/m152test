import { Component, Input, OnInit } from '@angular/core';
import { nlclub } from '../nlclub.model';

@Component({
  selector: 'app-nlclubitem',
  templateUrl: './nlclubitem.component.html',
  styleUrls: ['./nlclubitem.component.css']
})
export class NlclubitemComponent implements OnInit {

	@Input () club: nlclub;

  constructor() { }

  ngOnInit() {
  }

}
