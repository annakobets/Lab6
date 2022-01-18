import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Record} from '../models/record.model'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RecordService {

  constructor(private http: HttpClient) {
  }
  createRecord(record: Record) {
    return this.http.post('http://localhost:3000/records', record);
  }
  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('http://localhost:3000/records');
  }

  updateRecord(data: Record) {
    return this.http.put(`http://localhost:3000/records/${data.id}`, data)
    .pipe(map((data)=> Record.of(data)));
  }
}