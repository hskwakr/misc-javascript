import { Component } from './base-component.js';
import { Autobind } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';
import {
  validate,
  ValidatableString,
  ValidatableNumber,
} from '../util/validation.js';

// ProjectInput Class
export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  // Form components
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

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

      // Set to global state
      projectState.addProject(title, descption, people);

      // Clear inputs
      this.clearInputs();
    }
  }

  // Set up event listeners
  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent() {}
}
