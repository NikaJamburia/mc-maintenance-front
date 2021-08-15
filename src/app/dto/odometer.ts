import { DistanceUnit, OdometerReading } from "./schedule-data";

export function miles(n: number): OdometerReading {
    return { value: n, unit: DistanceUnit.MILES }
}

export function km(n: number): OdometerReading {
    return { value: n, unit: DistanceUnit.KM }
}

export function toKm(distance: OdometerReading): OdometerReading {

    if(distance.unit === DistanceUnit.MILES) {
        return km(Math.trunc(distance.value * 1.60934))
    }

    return km(distance.value)
}

export function toMiles(distance: OdometerReading): OdometerReading {

    if(distance.unit === DistanceUnit.KM) {
        return miles(Math.trunc(distance.value / 1.60934))
    }

    return miles(distance.value)
}