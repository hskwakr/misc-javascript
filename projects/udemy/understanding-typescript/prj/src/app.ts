// Drag & Drop Interfaces

// Element can drag and drop
interface Draggable {
  // Start of drag event
  dragStartHandler(event: DragEvent): void;
  // End of drag event
  dragEndHandler(event: DragEvent): void;
}

// Target for the draggable elements
interface DragTarget {
  // Signal that dragging something over the target
  dragOverHandler(event: DragEvent): void;
  // React to the drop happens
  dropHandler(event: DragEvent): void;
  // Useful for:
  // - no drop happens
  // - it's canceled
  // - the user moves the element away
  dragLeaveHandler(event: DragEvent): void;
}

// Project Type
enum ProjectStatus {
  Active,
  Finished,
}

class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}

// State Management
type Listener<T> = (items: T[]) => void;

abstract class State<T> {
  // Subscription
  protected listeners: Listener<T>[] = [];

  // Add a listener to get subscription
  // when the state is changed
  addListener(listenerFn: Listener<T>) {
    this.listeners.push(listenerFn);
  }
}

class ProjectState extends State<Project> {
  // State of projects
  private projects: Project[] = [];

  // Singleton
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  // Get the instance
  // The instance should be unique
  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new ProjectState();
    return this.instance;
  }

  // Add a project to the project list
  addProject(title: string, description: string, numOfPeople: number) {
    const newProject = new Project(
      Math.random().toString(),
      title,
      description,
      numOfPeople,
      ProjectStatus.Active
    );
    this.projects.push(newProject);

    // Call listerners functions
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// Global state to manage project list
const projectState = ProjectState.getInstance();

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

// Component Base Class
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  // Template element which have form componet
  templateElement: HTMLTemplateElement;
  // Element to display
  hostElement: T;
  // Element to attacth to host element
  element: U;

  constructor(
    tempateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    // Get template element
    const templateEl = document.getElementById(tempateId);
    if (templateEl) {
      this.templateElement = templateEl as HTMLTemplateElement;
    } else {
      throw new Error('Missing Template Element');
    }

    // Get host element
    const hostEl = document.getElementById(hostElementId);
    if (hostEl) {
      this.hostElement = hostEl as T;
    } else {
      throw new Error('Missing App Element');
    }

    // Get contents of templete element
    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );

    // Get the element to attach
    const el = importedNode.firstElementChild;
    if (el) {
      this.element = el as U;
    } else {
      throw new Error('Missing Element To Attach');
    }

    // Set the element id
    if (newElementId) {
      this.element.id = newElementId;
    }

    this.attach(insertAtStart);
  }

  // Attach the element into host element to display
  private attach(insertAtBeginning: boolean) {
    this.hostElement.insertAdjacentElement(
      insertAtBeginning ? 'afterbegin' : 'beforeend',
      this.element
    );
  }

  // Congigure the component
  abstract configure(): void;
  // Fill the content
  abstract renderContent(): void;
}

// ProjectItem Class
class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  private project: Project;

  get peopleAmount() {
    if (this.project.people === 1) {
      return '1 person';
    }

    return `${this.project.people} people`;
  }

  constructor(hostId: string, project: Project) {
    super('single-project', hostId, false, project.id);
    this.project = project;

    this.configure();
    this.renderContent();
  }

  configure() {
    this.element.addEventListener('dragstart', this.dragStartHandler);
    this.element.addEventListener('dragend', this.dragEndHandler);
  }

  renderContent() {
    const h2 = this.element.querySelector('h2');
    if (!h2) {
      throw new Error('Missing h2 element in list item');
    }
    const h3 = this.element.querySelector('h3');
    if (!h3) {
      throw new Error('Missing h3 element in list item');
    }
    const p = this.element.querySelector('p');
    if (!p) {
      throw new Error('Missing p element in list item');
    }

    h2.textContent = this.project.title;
    h3.textContent = this.peopleAmount + ' assigned';
    p.textContent = this.project.description;
  }

  @Autobind
  dragStartHandler(event: DragEvent) {
    console.log(event);
  }

  @Autobind
  dragEndHandler(_: DragEvent) {
    console.log('DragEnd');
  }
}

// ProjectList Class
class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  // Project list from global state
  assignedProjects: Project[];

  constructor(private type: 'active' | 'finished') {
    super('project-list', 'app', false, `${type}-projects`);
    // Initialize
    this.assignedProjects = [];

    this.configure();
    this.renderContent();
  }

  // Update the display of project list
  private renderProjects() {
    // Get the element for the list
    const listEl = this.element.querySelector('ul');
    if (!listEl) {
      throw new Error('Missing ul element in project list');
    }

    // Clear the list content
    listEl.innerHTML = '';

    // Add items to the list
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(listEl.id, prjItem);
    }
  }

  // Set up event listeners
  configure() {
    // Register listener functions to drag and drop
    this.element.addEventListener('dragover', this.dragOverHandler);
    this.element.addEventListener('dragleave', this.dragLeaveHandler);
    this.element.addEventListener('drop', this.dropHandler);

    // Register listener function to get global state
    projectState.addListener((projects: Project[]) => {
      // Filter the projects by type
      const relevantProjects = projects.filter((prj) => {
        switch (this.type) {
          case 'active':
            return prj.status === ProjectStatus.Active;
          case 'finished':
            return prj.status === ProjectStatus.Finished;
        }
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  // Fill the content
  renderContent() {
    const listId = `${this.type}-project-list`;

    this.element.querySelector('ul')!.id = listId;
    this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
  }

  @Autobind
  dragOverHandler(_: DragEvent) {
    // Get the element for the list
    const listEl = this.element.querySelector('ul');
    if (!listEl) {
      throw new Error('Missing ul element in project list');
    }

    // Change style
    listEl.classList.add('droppable');
  }

  @Autobind
  dragLeaveHandler(_: DragEvent) {
    // Get the element for the list
    const listEl = this.element.querySelector('ul');
    if (!listEl) {
      throw new Error('Missing ul element in project list');
    }

    // Change style
    listEl.classList.remove('droppable');
  }

  dropHandler(_: DragEvent) {}
}

// ProjectInput Class
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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

const prjInput = new ProjectInput();
const activePrgList = new ProjectList('active');
const finishPrgList = new ProjectList('finished');
