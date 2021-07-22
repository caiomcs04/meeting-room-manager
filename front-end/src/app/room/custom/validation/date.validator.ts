import { AbstractControl } from '@angular/forms';

export function dateValidator(control: AbstractControl) {
  let value =new Date(control.value)
  let actualDate = new Date
  actualDate.setHours(0,0,0,0);


  if(actualDate>value){
    return {dateValidator:true}
  }
  return null
}
