// Validation
interface ValidatableContext {
  type: 'number' | 'string';
  value: string;
  required?: boolean;
}

interface ValidatableNumber extends ValidatableContext {
  type: 'number';
  min?: number;
  max?: number;
}

interface ValidatableString extends ValidatableContext {
  type: 'string';
  minLength?: number;
  maxLength?: number;
}

type Validatable = ValidatableNumber | ValidatableString;

function validate(validatableInput: Validatable) {
  let isValid = true;

  // Check for general rule
  if (validatableInput.required) {
    isValid = isValid && validatableInput.value.trim().length !== 0;
  }

  // Check for string rule
  if (validatableInput.type === 'string') {
    if (validatableInput.minLength != null) {
      console.log(validatableInput.value.length);
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (validatableInput.maxLength != null) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
  }

  // Check for number rule
  if (validatableInput.type === 'number') {
    if (validatableInput.min != null) {
      isValid =
        isValid && Number(validatableInput.value) >= validatableInput.min;
    }
    if (validatableInput.max != null) {
      isValid =
        isValid && Number(validatableInput.value) <= validatableInput.max;
    }
  }

  return isValid;
}

// Autobind decorator
function Autobind(
  _1: any,
  _2: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjustableDescriptor: PropertyDescriptor = {
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjustableDescriptor;
}

// ProjectInput Class
class ProjectInput {
  // Template element which have form componet
  templateElement: HTMLTemplateElement;
  // Element to display
  hostElement: HTMLDivElement;
  // Element to attacth to host element
  element: HTMLFormElement;

  // Form components
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    // Get template element
    const templateEl = document.getElementById('project-input');
    if (templateEl) {
      this.templateElement = templateEl as HTMLTemplateElement;
    } else {
      throw new Error('Missing Template Element');
    }

    // Get host element
    const hostEl = document.getElementById('app');
    if (hostEl) {
      this.hostElement = hostEl as HTMLDivElement;
    } else {
      throw new Error('Missing App Element');
    }

    // Get contents of templete element
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    // Get the element to attach
    // The first element in contents should be form element
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    // Get form components
    this.titleInputElement = this.element.querySelector(
      '#title'
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  // Gather user inputs into one
  private gatherUserInput(): [string, string, number] | undefined {
    // Get user inputs from elements
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    // Define validate condition
    const titleValidatable: ValidatableString = {
      type: 'string',
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: ValidatableString = {
      type: 'string',
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: ValidatableNumber = {
      type: 'number',
      value: enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    const titleIsValid = validate(titleValidatable);
    const descriptionIsValid = validate(descriptionValidatable);
    const peopleIsValid = validate(peopleValidatable);

    const formIsValid = titleIsValid && descriptionIsValid && peopleIsValid;
    if (!formIsValid) {
      alert('Invalid input, please try again.');
      return;
    }

    return [enteredTitle, enteredDescription, +enteredPeople];
  }

  // Clear every form input fields
  private clearInputs() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  // Handle form submit event
  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();

    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, descption, people] = userInput;
      console.log(title, descption, people);

      this.clearInputs();
    }
  }

  // Set up event listeners
  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  // Attach the element into host element to display
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
