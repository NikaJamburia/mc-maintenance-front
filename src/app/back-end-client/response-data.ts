import { HttpErrorResponse } from "@angular/common/http";

export interface SingleMessageResponse {
    message: string
}

export function getServerErrorText(error: HttpErrorResponse): string {
    return error.error.message === undefined 
        ? "Server error"
        : error.error.message
}