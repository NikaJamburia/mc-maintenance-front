import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDate'
})
export class JsonDatePipe implements PipeTransform {

  transform(value: number[]): string {
    return `${this.calendarNumber(value[2])}/${this.calendarNumber(value[1])}/${this.calendarNumber(value[0])}`;
  }

  private calendarNumber(n: number): string {
    return n >= 10 ? n.toString() : `0${n}`
  }

}
