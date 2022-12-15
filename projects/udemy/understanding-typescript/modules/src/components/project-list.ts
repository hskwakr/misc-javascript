import Component from './base-component.js';
import { DragTarget } from '../models/drag-drop.js';
import { Project } from '../models/project.js';
import { Autobind } from '../decorators/autobind.js';
import { ProjectItem } from './project-item.js';
import { projectState } from '../state/project-state.js';
import { ProjectStatus } from '../models/project.js';

// ProjectList Class
export class ProjectList
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
  dragOverHandler(event: DragEvent) {
    const transfer = event.dataTransfer;

    // Check the drag is allowed
    if (!transfer || transfer.types[0] !== 'text/plain') {
      return;
    }

    // To allow drop action to this object
    event.preventDefault();

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

  @Autobind
  dropHandler(event: DragEvent) {
    const transfer = event.dataTransfer;
    if (!transfer) {
      throw new Error('Unexpected event handler calling');
    }

    // Get the project id dropped
    const prjId = transfer.getData('text/plain');

    // Set the new status depends on type
    let newStatus: ProjectStatus;
    switch (this.type) {
      case 'active':
        newStatus = ProjectStatus.Active;
        break;
      case 'finished':
        newStatus = ProjectStatus.Finished;
        break;
    }

    // Move to the list
    projectState.moveProject(prjId, newStatus);
  }
}
