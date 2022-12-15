import Component from './base-component.js';
import { Draggable } from '../models/drag-drop.js';
import { Project } from '../models/project.js';
import { Autobind } from '../decorators/autobind.js';

// ProjectItem Class
export class ProjectItem
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
    const transfer = event.dataTransfer;
    if (!transfer) {
      throw new Error('Unexpected event handler calling');
    }

    transfer.setData('text/plain', this.project.id);
    transfer.effectAllowed = 'move';
  }

  @Autobind
  dragEndHandler(_: DragEvent) {
    console.log('DragEnd');
  }
}
