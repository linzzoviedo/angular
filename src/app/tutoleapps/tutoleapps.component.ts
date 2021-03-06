import { Component, OnInit } from '@angular/core';
import { Tutoleapp } from '../tutoleapp';
import { TutoleappService } from '../tutoleapp.service';

@Component({
  selector: 'app-tutoleapps',
  templateUrl: './tutoleapps.component.html',
  styleUrls: ['./tutoleapps.component.css']
})

export class TutoleappsComponent implements OnInit {
  selectedTutoleapp: Tutoleapp;
  tutoleapp: Tutoleapp[];
  constructor(private tutoleappService: TutoleappService) { }
  ngOnInit() {
    this.getTutoleapps();
  }

  getTutoleapps(): void {
    this.tutoleappService.getTutoleapps()
    .subscribe(tutoleapps => this.tutoleapp = tutoleapps.slice(1, 5));
  }
}
