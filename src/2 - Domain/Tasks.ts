import ActivityTypeEnum from './ActivityTypeEnum';
import StatusEnum from './StatusEnum';
import Tags from './Tags';

export default class Tasks {
  id!: string;
  title!: string;
  notes!: string;
  priority!: number;
  remindMeOn!: Date;
  activityType!: ActivityTypeEnum;
  status!: StatusEnum;
  tasklistId!: string;
  tags!: Tags[];
  create!: Date;
}
