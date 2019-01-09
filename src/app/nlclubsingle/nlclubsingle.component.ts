import { Component, Input, OnInit } from '@angular/core';
import { nlclub } from '../nlclub.model';
import { environment } from '../../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nlclubsingle',
  templateUrl: './nlclubsingle.component.html',
  styleUrls: ['./nlclubsingle.component.css']
})
export class NlclubsingleComponent implements OnInit {


  public club: nlclub;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    let id: string;
    id = this.route.snapshot.params['id'];
    this.club = new nlclub(id);
    
  }

}
