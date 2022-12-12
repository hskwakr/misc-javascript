// Validation
interface ValidatableContext {
  type: 'number' | 'string';
  name: string;
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

function validate(validatableInput: Validatable): [boolean, string[]] {
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

// ProjectList Class
class ProjectList {
  // Template element which have form componet
  templateElement: HTMLTemplateElement;
  // Element to display
  hostElement: HTMLDivElement;
  // Element to attacth to host element
  element: HTMLElement;

  constructor(private type: 'active' | 'finished') {
    // Get template element
    const templateEl = document.getElementById('project-list');
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
    // The first element in contents should be select element
    const el = importedNode.firstElementChild;
    if (el) {
      this.element = el as HTMLElement;
    } else {
      throw new Error('Missing Element To Attach');
    }
    this.element.id = `${this.type}-projects`;

    this.attach();
    this.renderContent();
  }

  // Fill the content
  private renderContent() {
    const listId = `${this.type}-project-list`;

    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }

  // Attach the element into host element to display
  private attach() {
    this.hostElement.insertAdjacentElement('beforeend', this.element);
  }
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
    const el = importedNode.firstElementChild;
    if (el) {
      this.element = el as HTMLFormElement;
    } else {
      throw new Error('Missing Element To Attach');
    }
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
      name: 'title',
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: ValidatableString = {
      type: 'string',
      name: 'description',
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: ValidatableNumber = {
      type: 'number',
      name: 'people',
      value: enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    // Validate
    const [titleIsValid, titleErrors] = validate(titleValidatable);
    const [descriptionIsValid, descptionErrors] = validate(
      descriptionValidatable
    );
    const [peopleIsValid, peopleErrors] = validate(peopleValidatable);

    // Check validation result
    const isValid = titleIsValid && descriptionIsValid && peopleIsValid;
    if (!isValid) {
      const errors = titleErrors.concat(descptionErrors).concat(peopleErrors);

      const errorMessages = errors.map((v) => ' ' + v);
      const message = 'Invalid input, please try again:' + errorMessages;

      // Show error message
      alert(message);
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
const activePrgList = new ProjectList('active');
const finishPrgList = new ProjectList('finished');
