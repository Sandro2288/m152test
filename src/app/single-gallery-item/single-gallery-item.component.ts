import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-gallery-item',
  templateUrl: './single-gallery-item.component.html',
  styleUrls: ['./single-gallery-item.component.css']
})
export class SingleGalleryItemComponent implements OnInit {

	@Input() imgURL: String;
	@Input() name: String;
	@Input() height: String;

  constructor() { }

  ngOnInit() {
  }

}
