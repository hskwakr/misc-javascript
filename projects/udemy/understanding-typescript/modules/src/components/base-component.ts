// Component Base Class
export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
