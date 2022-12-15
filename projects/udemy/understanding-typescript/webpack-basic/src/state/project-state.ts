import { Project, ProjectStatus } from '../models/project';

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

export class ProjectState extends State<Project> {
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

    this.updateListeners();
  }

  // Move a project into another list
  moveProject(projectId: string, newStatus: ProjectStatus) {
    const project = this.projects.find((p) => p.id === projectId);

    if (project && project.status !== newStatus) {
      // Move to another list
      project.status = newStatus;
      this.updateListeners();
    }
  }

  // Call listernes functions
  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

// Global state to manage project list
export const projectState = ProjectState.getInstance();
