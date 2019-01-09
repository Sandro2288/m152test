import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit {

	 mountains: {
	 	imgURL,
	 	name,
	 	height
	 }[];

  constructor() {
  	this.mountains = [{
  		imgURL : "././assets/img/bristen.jpg",
  		name : "Bristen",
  		height : "3073"
  	},
  	{
  		imgURL : "././assets/img/bristen.jpg",
  		name : "Bristen2",
  		height : "3073"
  	},
  	{
  		imgURL : "././assets/img/bristen.jpg",
  		name : "Bristen3",
  		height : "3073"
  	},
  	]
  }

  ngOnInit() {
  }

}
