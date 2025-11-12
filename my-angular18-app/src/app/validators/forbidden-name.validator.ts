import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(forbiddenWord: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = control.value?.toLowerCase() === forbiddenWord.toLowerCase();
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
