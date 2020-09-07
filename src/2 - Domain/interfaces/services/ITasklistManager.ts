import TasklistDto from '../../dtos/TasklistDto';

export default interface ITasklistManager {
  create(tasklistDto: TasklistDto): TasklistDto;
}
