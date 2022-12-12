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

  // Handle form submit event
  @Autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  // Set up event listeners
  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  // Attach into host element to display the element
  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
