import { Component, OnInit } from '@angular/core';
import { nlclub } from '../nlclub.model';
import { environment } from '../../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nlclublist',
  templateUrl: './nlclublist.component.html',
  styleUrls: ['./nlclublist.component.css']
})
export class NlclublistComponent implements OnInit {

	nationalLeague: Map<string, nlclub>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.nationalLeague = new Map();

    for (const club of environment.clubs) {
      this.nationalLeague.set(club[0], new nlclub(club[0]));
    }

  }

}
