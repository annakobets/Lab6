import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Record } from '../../shared/record.model';
import { RecordService } from '../../shared/record.service';

@Component({
  selector: 'app-edite-recipe',
  templateUrl: './edite-recipe.component.html',
  styleUrls: ['./edite-recipe.component.css']
})
export class EditeRecipeComponent implements OnInit {

  @Input() records: Record[] = [];
  @Output() onRecordEdit = new EventEmitter<Record>();

  currentRecordId = 1;
  currentRecord: Record | undefined;
  
  constructor(private recordService: RecordService) { }
  ngOnInit() {
    this.onRecordChange();
  }
  onRecordChange() {
    this.currentRecord = this.records
      .find(c => c.id === +this.currentRecordId);
  }
  

  onSubmit(form: NgForm) {
  const {name, date, description} = form.value;

  const record = new Record(name, date, description, +this.currentRecordId);

  this.recordService.updateRecord(record)
    .subscribe((data: Record) => {    //Ни одна перегрузка не соответствует этому вызову
      this.onRecordEdit.emit(data);
      console.log('Категория успешно отредактирована.');
    });
}

}
