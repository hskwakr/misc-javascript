// Validation
export interface ValidatableContext {
  type: 'number' | 'string';
  name: string;
  value: string;
  required?: boolean;
}

export interface ValidatableNumber extends ValidatableContext {
  type: 'number';
  min?: number;
  max?: number;
}

export interface ValidatableString extends ValidatableContext {
  type: 'string';
  minLength?: number;
  maxLength?: number;
}

export type Validatable = ValidatableNumber | ValidatableString;

export function validate(validatableInput: Validatable): [boolean, string[]] {
  let isValid = true;
  let errors: string[] = [];

  // Check for general rule
  if (validatableInput.required) {
    const isRequired = validatableInput.value.trim().length !== 0;
    isValid = isValid && isRequired;
    if (!isRequired) {
      errors.push(`the property ${validatableInput.name} must be present`);
    }
  }

  // Check for string rule
  if (validatableInput.type === 'string') {
    if (validatableInput.minLength != null) {
      const isGreater =
        validatableInput.value.length >= validatableInput.minLength;
      isValid = isValid && isGreater;
      if (!isGreater) {
        errors.push(
          `the property ${validatableInput.name} must have a length greater than ${validatableInput.minLength}`
        );
      }
    }
    if (validatableInput.maxLength != null) {
      const isLower =
        validatableInput.value.length <= validatableInput.maxLength;
      isValid = isValid && isLower;
      if (!isLower) {
        errors.push(
          `the property ${validatableInput.name} must have a length lower than ${validatableInput.maxLength}`
        );
      }
    }
  }

  // Check for number rule
  if (validatableInput.type === 'number') {
    if (validatableInput.min != null) {
      const isGreater = Number(validatableInput.value) >= validatableInput.min;
      isValid = isValid && isGreater;
      if (!isGreater) {
        errors.push(
          `the property ${validatableInput.name} must have a value greater than ${validatableInput.min}`
        );
      }
    }
    if (validatableInput.max != null) {
      const isLower = Number(validatableInput.value) <= validatableInput.max;
      isValid = isValid && isLower;
      if (!isLower) {
        errors.push(
          `the property ${validatableInput.name} must have a value lower than ${validatableInput.min}`
        );
      }
    }
  }

  return [isValid, errors];
}
