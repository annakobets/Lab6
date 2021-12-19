import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/shared/models/message';
import { Record } from '../../shared/record.model';
import { RecordService } from '../../shared/record.service';

@Component({
  selector: "app-add-recipe",
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

   // @ts-ignore
  message: Message;
  constructor(private recordService: RecordService) { }

  @Output() onRecordAdd = new EventEmitter<Record>();

  ngOnInit(): void 
  {
    this.message = new Message('success', '');
  }

  private showMessage(message: Message) {
    this.message = message;
  
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  
  onSubmit(form: NgForm) 
  {
    const {name, date, description} = form.value;
    const record = new Record(name, date, description);
  
    this.recordService.createRecord(record)
      .subscribe(() => 
      { this.showMessage({
        text: 'Новый пост успешно создан',
        type: 'success'
      });
        form.reset();
        this.onRecordAdd.emit(record);
      });
  }

}
