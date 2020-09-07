import ITasklistManager from '../interfaces/services/ITasklistManager';
import TasklistDto from '../dtos/TasklistDto';
import { injectable, inject } from 'inversify';

@injectable()
class TasklistManager implements ITasklistManager {
  create(tasklistDto: TasklistDto): TasklistDto {
    throw new Error('Method not implemented.');
  }
}

export default TasklistManager;
