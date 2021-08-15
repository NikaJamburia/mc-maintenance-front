import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonDateTime'
})
export class JsonDateTimePipe implements PipeTransform {

  transform(value: number[]): string {
    return `${value[3]}:${value[4]} ${value[2]}-${value[1]}-${value[0]}`;
  }

}
