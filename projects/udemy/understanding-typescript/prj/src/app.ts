class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  constructor() {
    const templateEl = document.getElementById('project-input');
    if (templateEl) {
      this.templateElement = templateEl as HTMLTemplateElement;
    } else {
      throw new Error('Missing Template Element');
    }

    const hostEl = document.getElementById('app');
    if (hostEl) {
      this.hostElement = hostEl as HTMLDivElement;
    } else {
      throw new Error('Missing App Element');
    }

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement('afterbegin', this.element);
  }
}

const prjInput = new ProjectInput();
