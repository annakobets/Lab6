import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Record} from '../shared/record.model'
import { Observable } from 'rxjs';

@Injectable()
export class RecordService {

  constructor(private http: HttpClient) {
  }
  createRecord(record: Record) {
    return this.http.post('http://localhost:3000/record', record);
  }
  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>('http://localhost:3000/record');
  }

  updateRecord(data: Record, ) {
    return this.http.put(`http://localhost:3000/record/${data.id}`, data);
  }
}