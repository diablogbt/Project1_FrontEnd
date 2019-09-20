import { ResourceList } from '../resource-page/ResourceList';
import { ColumnName } from './ColumnName';

export class ProjectList {
  pid = 0;
  project_name = '';
  resources: ResourceList[];
  columns: ColumnName[];

  constructor() { }
}
