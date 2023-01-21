export interface BikeSchedule {
    bikeName: string,
    lastOdometerReading: number,
    odometerUnits: DistanceUnit,
    bikeImage: string,
    schedule: ScheduleItem[]
}

export interface ScheduleItem {
    name: string,
    interval: number,
    intervalType: IntervalType,
    nextServiceMileage?: number
    nextServiceDate?: string
    entries: ScheduleItemEntry[]
}

export interface ScheduleItemEntry {
    odometerReading: number,
    entryDate: string
}

export enum DistanceUnit {
    MILES = "MILES", KM = "KM"
}

export enum IntervalType {
    MONTHS = "MONTHS", DISTANCE = "DISTANCE"
}