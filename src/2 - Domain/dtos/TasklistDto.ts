import Tasks from '../Tasks';

export default class TasklistDto {
  id!: string;
  name!: string;
  tasks!: Tasks[];
}
