import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecordService } from 'src/app/shared/services/record.service';
import { Record } from 'src/app/shared/models/record.model';
import { Message } from 'src/app/shared/models/message';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

   // @ts-ignore
   message: Message;
   // @ts-ignore
   form: FormGroup;
  constructor(private recordService: RecordService) { }

  
  ngOnInit(): void {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
    });
    this.message = new Message('success', '');
  }

  private showMessage(message: Message) {
    this.message = message;

    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit() {
    const { name, date, description } = this.form.value;
    const record = new Record(name, date, description);

    this.recordService.createRecord(record)
      .subscribe(() => {
        this.showMessage({
          text: 'Новый пост успешно создан',
          type: 'success'
        });
        this.form.reset();

      });
  }

}
