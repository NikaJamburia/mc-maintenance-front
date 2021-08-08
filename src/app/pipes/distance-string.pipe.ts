import { Pipe, PipeTransform } from '@angular/core';
import { OdometerReading } from '../dto/schedule-data';

@Pipe({
  name: 'distanceString'
})
export class DistanceStringPipe implements PipeTransform {

  transform(odometer: OdometerReading): string {
    return `${odometer.value} ${odometer.unit.toString().toLowerCase()}` ;
  }

}
