export interface BikeSchedule {
    bikeName: string,
    lastOdometerReading: OdometerReading,
    bikeImage: string,
    schedule: ScheduleItem[]
}

export interface OdometerReading {
    value: number,
    unit: DistanceUnit
}

export enum DistanceUnit {
    MILES, KM
}

export interface ScheduleItem {
    name: String,
    interval: OdometerReading,
    entries: ScheduleItemEntry[]
}

export interface ScheduleItemEntry {
    odometerReading: OdometerReading,
    entryDate: number[]
}