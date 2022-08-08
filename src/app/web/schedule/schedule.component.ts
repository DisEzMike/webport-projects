import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = [
    {
      id: 1,
      name: 'ตารางเวร',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
