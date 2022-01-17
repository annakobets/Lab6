import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/shared/models/message';
import { Record } from '../../../shared/models/record.model';
import { RecordService } from '../../../shared/services/record.service';

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
  message!: Message;
  
  constructor(private recordService: RecordService) { }

   ngOnInit() {
    this.message = new Message('success', '');
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
    .subscribe((data: Record) => {    
      this.onRecordEdit.emit(data);
        this.message.text = 'Пост успешно отредактирован';
        window.setTimeout(() => this.message.text = '', 5000);
    });
}

}
