import { FormGroup } from "@angular/forms"

export abstract class BaseFormComponent {

    constructor(public form: FormGroup) {}

    errorClasses(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string {
        if(this.isInValid(element)) {
          return "border-danger"
        }
        return ""
      
      }
    
      isInValid(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): boolean {
        let controlName = element.getAttribute("formControlName")!
        let control = this.form.controls[controlName]
        return control.invalid && (control.dirty || control.touched)
      }

      getErrors(element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement): string[] {
        let controlName = element.getAttribute("formControlName")!
        let control = this.form.controls[controlName]
    
        let errorMessages = []        
            
        if (control.errors) {
          if (control.errors.required) {
            errorMessages.push("Field is required")
          }
          if (control.errors.min) {
            errorMessages.push(`Value cant be less then ${element.getAttribute("min")!}`)
          }
          if (control.errors.max) {
            errorMessages.push(`Value cant be more then ${element.getAttribute("max")!}`)
          }
          if (control.errors.minlength) {
            errorMessages.push(`Value cant be shorter then ${control.errors.minlength.requiredLength} symbols`)
          }
          if (control.errors.maxlength) {
            errorMessages.push(`Value cant be longer then ${control.errors.maxlength.requiredLength} symbols`)
          }
          if (control.errors.pattern) {
            errorMessages.push(element.getAttribute('patternError')!)
          }
          if(control.errors.custom) {
            errorMessages.push(control.errors.custom.errorText);            
          }
          return errorMessages
        }
        return []
      
      }

}