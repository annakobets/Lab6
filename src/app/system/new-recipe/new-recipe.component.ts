import { Component, OnInit } from '@angular/core';
import { RecordService } from '../../shared/services/record.service';
import {Record} from '../../shared/models/record.model';


@Component({

  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {
  records: Record[] = [];
  isLoaded = false;

  constructor(private recordService: RecordService) { }

  newRecordAdded(record: Record) {
    this.records.push(record);
  }

  recordWasEdited(record: Record) {
    const idx = this.records
      .findIndex(c => c.id === record.id);
    this.records[idx] = record;
  }
  ngOnInit(): void 
  {
    this.recordService.getRecords()
    .subscribe((records: Record[]) => {
      this.records = records;
      this.isLoaded = true;
    });
  }

}
