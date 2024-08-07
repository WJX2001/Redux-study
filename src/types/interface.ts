import { ReactNode } from 'react';
import { ErrorShowType } from './enum';
import { ProDescriptionsItemProps } from '@ant-design/pro-components';

// 与后端约定的响应数据格式
export interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

// 通用表格列的字段数据格式
export interface tableColumnsType {
  dataIndex: string;
}

export interface routeLocationType {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: string | null;
}

export interface btnContainerItemType {
  type?: 'text' | 'link' | 'ghost' | 'default' | 'primary' | 'dashed';
  text: ReactNode;
  disabled?: boolean;
  loading?: boolean;
  propsPermission?: string;
  handleClickCallback: () => void;
}

export interface TaskItemType {
  jobs?: TaskItemType[];
  catalogPath?: string;
  depFlowPath?: string | null;
  jobId: string;
  jobName: string;
  sourceDbTypeDesc?: string | null;
  sourceDbType?: string | null;
  sourceName?: string;
  targetDbType?: string;
  targetDbTypeDesc?: string | null;
  targetName?: string;
  taskType: string;
  taskTypeDesc: string | null;
}

export interface SubFlowItemType {
  subFlowName: string | null;
  subFlowId: string;
  parentFlowId: string | undefined;
  locations?: string;
}

export interface JobDefinitionItemType {
  flowId: string | null | undefined;
  jobId: string;
  jobName: string;
  taskType: string;
  subFlowId: string | undefined;
  rankOrder: string;
  depFlowPath?: string;
  catalogName?: string;
  enableFlag: string;
  executeDate: string | null;
  executeRule: string | null;
  flowNotify: any;
}

export interface JobItemType {
  flowId?: string | null;
  jobId?: string;
  jobName?: string;
  taskType?: string;
  taskTypeDesc?: string | null;
  subFlowId?: string | undefined;
  rankOrder?: string;
  depFlowPath?: string;
  enableFlag?: string;
  executeDate?: string | null;
  executeRule?: string | null;
  flowNotify?: any;
  subFlowName?: string | null;
  parentFlowId?: string | undefined;
  locations?: string;
}

export interface FlowNotifyType {
  runStatus?: string;
  notifyType?: string;
  notifyMethod?: string;
  serverId?: string;
  topicName?: string;
  wxRobotLink?: string;
  notifier?: string;
  mobiles?: string;
  relationId?: string;
  relationType?: string;
}
export interface FlowDefinitionType {
  failRetryInterval?: number;
  failRetryTimes?: number;
  flowId?: string;
  flowName?: string;
  flowNotify?: FlowNotifyType | null;
  locations?: string | null;
  maxTimeout?: number;
  memo?: string | null;
  parallelNum?: number;
  params?: Array<any>;
  depCreateMode?: string;
  flowModule?: string | null;
  saveMode?: string;
}
export interface WorkflowStateProps {
  depList?: Array<any>;
  externalDepList?: Array<any>;
  jobDefinitionList?: Array<any>;
  subFlowDefinitionList?: Array<any>;
  thirdDepList?: Array<any>;
  flowDefinition?: FlowDefinitionType;
}

export interface TranferItemType {
  paramName: string;
  paramKey: string;
  showStyle: string;
  value: string;
  requestPath: string;
}
export interface LinkConfigJsonType {
  full?: {
    read: { supportStrategyList: any[]; [key: string]: string | any[] };
    write: { supportStrategyList: any[]; [key: string]: string | any[] };
  };
  inc?: {
    read: { supportStrategyList: any[]; [key: string]: string | any[] };
    write: { supportStrategyList: any[]; [key: string]: string | any[] };
  };
  transfer?: TranferItemType[];
}

export interface BatchIntegrationTaskItemType {
  isBuild: boolean;
  jobName: string;
  tableId: string;
  sourceTable: string;
  targetTable: string;
  isValid: boolean;
}

export interface FieldMappingsType {
  uuid: string;
  tableId: string;
  sourceFieldName: string;
  sourceFieldLength: number;
  sourceFieldType: string;
  sourceFieldPrecision: number | null;
  sourceFieldDesc: string | null;
  targetFieldName: string;
  targetFieldLength: number;
  targetFieldType: string;
  targetFieldPrecision: number | null;
  targetFieldDesc: string | null;
  isPk: string; // 目标字段是否主键 ：0 否 1 是
  isPartition: string | null; // 目标字段是否分区字段：0 否 1 是
  isDistributeKey: string | null; // 目标字段是否分布建 ： 0 否 1 是
  isTech: string; // 目标字段是否技术字段：0 否 1 是
  isEncrypted: string; // 目标字段是否加密：0 否 1 是
}
export interface TableFieldMappingType {
  tableId: string;
  isBuild: boolean;
  sourceDBType: string;
  sourceServerId: string;
  sourceSchema: string;
  sourceTable: string;
  targetDBType: string;
  targetServerId: string;
  sourceServerName?: string;
  targetServerName?: string;
  targetSchema: string;
  targetTable: string;
  fieldMappings: FieldMappingsType[];
  sourceFieldNames: string[];
  targetFieldNames: string[];
}

export interface BatchIntegrationStateProps {
  linkId: string;
  templateId?: string;
  sourceLogicServerId: string;
  targetLogicServerId: string;
  catalogId: string;
  tableId: string;
  jobName: string;
  jobDisplayName: string;
  jobDesc: string;
  jobConfigId: string;
  jobId: string;
  validVersionName: string;
  validVersionDesc: string;
  selectSql: string;
  syncStrategy: string;
  tableFieldMapping: TableFieldMappingType;
  fullStrategy: {
    filterCondition: string;
    readStrategyCode: number;
    writeStrategyCode: number;
    parallel: number;
    sourceHint:'',
    targetHint:'',
  };
  incStrategy: {
    filterCondition: string;
    readStrategyCode: number;
    writeStrategyCode: number;
    incSql: string;
    flopColumn: string;
    incPeriod: number;
    backOffset: number;
    frontOffset: number;
    incBeginDate: string;
    incEndDate: string;
    parallel?: string;
    deleteCondition: string;
    etlCmpDCondition: string;
    etlCmpICondition: string;
    sourceHint:'',
    targetHint:'',
  };
  preJobFollows: FollowDataSource[];
  postJobFollows: FollowDataSource[];
  tsTableName: string;
  processCondition: string;
}

// type FollowDataSource = FollowDataSourceItem[];
export interface batchAddTask {
  buildJobs: Array<{
    jobName: string;
    sourceTable: string;
    targetTable: string;
  }>;
  sourceServerId: string;
  sourceSchema: string;
  targetServerId: string;
  targetSchema: string;
  tableMatchRule: string;
  jobNameRule: string;
  mappingPriority: number; // 1, 2 技术字段优先级
  templateId: string;
}

export interface AllData {
  read: {
    beginTime: string;
    flopColumns: string;
    incPeriod: number;
    strategyCode: number;
    supportStrategyList: [{ strategyCode: number; strategyName: string }];
  };
  write: {
    strategyCode: number;
    supportStrategyList: [
      {
        strategyCode: number;
        strategyName: string;
      },
    ];
  };
}

// 详情接口返回的所有增量和全量数据的类型
export interface AllDataType {
  full: {
    read: {
      strategyCode: number;
      supportStrategyList: [{ strategyCode: number; strategyName: string }];
    };
    write: {
      strategyCode: number;
      supportStrategyList: [{ strategyCode: number; strategyName: string }];
    };
  };
  inc: {
    read: {
      beginTime: string;
      flopColumns: string;
      incPeriod: number;
      strategyCode: number;
      supportStrategyList: [{ strategyCode: number; strategyName: string }];
    };
    write: {
      strategyCode: number;
      supportStrategyList: [{ strategyCode: number; strategyName: string }];
    };
  };
}

export interface CreateTaskData {
  templateId?: string;
  sourceSchemaGlobalParam?: string;
  targetSchemaGlobalParam?: string;
}

// 批量集成 设置一个对象专门用来保存每个任务的校验情况
export interface BatchIntegrationTaskItemValidate {
  tableId: string;
  formValidRes: boolean;
  tableValidRes: boolean;
  jobDisplayName: string;
  isValid?: boolean;
}

// 批量集成 进程信息
export interface FollowDataSource {
  followNum?: number;
  createTime: string;
  createUser: string;
  enableFlag: string;
  followFlag: string;
  followName: string;
  followRunScene: string;
  followType: string;
  memo: string;
  updateTime: string;
}


// 调度周期管理 主表单数据
export interface SchedulePeriodManageMainFormData {
  triggerName: string;
  schedulerName: string;
  batchId: string;
  jobIds:string;
  classType: string;
  cron: string;
  startDate: string;
  endDate: string;
  enableFlag: string;
  createUser: string;
  createTime: string;
  updateUser: string;
  updateTime: string;
  memo: string;
  kettleId: string;
  executeType: number;
  params: [{name: string,value: string}]
  flowName: string;
  sourceSystem: number;
  jobDisplayName: string
}

export interface KettleExtractDataSourceFormData{
  sourceId: string;
  systemCode:string;
  sourceName: string;
  sourceDesc: string;
  dbName:string;
  hostIp: string;
  portNumber: string;
  userName: string;
  password: string;
  databaseTypeName: string;
  databaseType: string;
  driverClass: string;
  active: string;
  dbCheckFlag: string;
  dbCheckStatus: string;
}




// table通用接口
export  interface CustomProDescriptionsItemProps extends ProDescriptionsItemProps {
  width?: number;
  fixed?: string;
  align?: string;
  sorter?: true
}

// 离线加工主表单部分单行数据
export interface OfflineProcessingTableData {
  id: string;
  name: string;
  classType: string;
  batchId: string;
  jobName: string;
  sourceSystem?: string
}

// 离线加工详情页面基础信息
export interface OfflineProcessingDetailBaseInfo {
  id: string;
  triggerName: string;
  name: string;
  classType: string;
  status: string;
  batchId: string;
  startTime: string;
  endTime: string;
  consumingTime: string;
  url: string;
  createUser: string;
  triggerType: number;
  totalNum: number;
  successNum: number;
  failNum: number;
  unableRunNum: number
  allFlag: number;
  writeNum: number;
  jobConfigType: string;
  createTime: string;
  jobOperType: string;
  incBeginDate: string;
  incEndDate: string;
}

// 离线加工详情页面任务类型差异化配置
export interface OfflineProcessingDetailTaskTypeConfig 
  {
    label: string;
    value: string;
    desc: string;
    taskType: string;
    // 实例页面基础信息表单label和key的映射关系
    baseInfoLabels: Array<{ label: string; key: string }>;
    hasStepList: boolean;
    hasAssemblyLog: boolean;
  }


  // 报文格式
export interface PostMessageFormat {
  id: string;
  title: string;
  content: string;
}