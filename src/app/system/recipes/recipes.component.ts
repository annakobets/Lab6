import { Component, OnInit } from '@angular/core';
import { Record } from 'src/app/shared/models/record.model';
import { RecordService } from 'src/app/shared/services/record.service';

@Component({
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  constructor(private recordService: RecordService) { }

  records: Record []=[];
  isLoaded=false;

  ngOnInit(): void {
    this.recordService.getRecords()
    .subscribe((records: Record[])=>
    {this.records = records,
    this.isLoaded=true})
  }

}
