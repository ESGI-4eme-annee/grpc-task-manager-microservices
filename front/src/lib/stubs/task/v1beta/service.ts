// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "task/v1beta/service.proto" (package "task.v1beta", syntax proto3)
// tslint:disable
import { UsingStreamResponse } from './request';
import { UsingStreamRequest } from './request';
import { UsingResponse } from './request';
import { UsingRequest } from './request';
import { RemoveFieldResponse } from './request';
import { RemoveFieldRequest } from './request';
import { AddFieldResponse } from './request';
import { AddFieldRequest } from './request';
import { StreamTasksResponse } from './request';
import { StreamTasksRequest } from './request';
import { UpdateDateResponse } from './request';
import { UpdateDateRequest } from './request';
import { DeleteTaskResponse } from './request';
import { DeleteTaskRequest } from './request';
import { UpdateTaskResponse } from './request';
import { UpdateTaskRequest } from './request';
import { CreateTaskResponse } from './request';
import { CreateTaskRequest } from './request';
import { GetTaskResponse } from './request';
import { GetTaskRequest } from './request';
import { ListTasksResponse } from './request';
import { ListTasksRequest } from './request';
import { ServiceType } from '@protobuf-ts/runtime-rpc';
/**
 * @generated ServiceType for protobuf service task.v1beta.TaskService
 */
export const TaskService = new ServiceType('task.v1beta.TaskService', [
	{ name: 'ListTasks', options: {}, I: ListTasksRequest, O: ListTasksResponse },
	{ name: 'GetTask', options: {}, I: GetTaskRequest, O: GetTaskResponse },
	{ name: 'CreateTask', options: {}, I: CreateTaskRequest, O: CreateTaskResponse },
	{ name: 'UpdateTask', options: {}, I: UpdateTaskRequest, O: UpdateTaskResponse },
	{ name: 'DeleteTask', options: {}, I: DeleteTaskRequest, O: DeleteTaskResponse },
	{ name: 'UpdateDate', options: {}, I: UpdateDateRequest, O: UpdateDateResponse },
	{
		name: 'StreamTasks',
		serverStreaming: true,
		options: {},
		I: StreamTasksRequest,
		O: StreamTasksResponse
	}
]);
/**
 * @generated ServiceType for protobuf service task.v1beta.FieldService
 */
export const FieldService = new ServiceType('task.v1beta.FieldService', [
	{ name: 'AddField', options: {}, I: AddFieldRequest, O: AddFieldResponse },
	{ name: 'RemoveField', options: {}, I: RemoveFieldRequest, O: RemoveFieldResponse }
]);
/**
 * @generated ServiceType for protobuf service task.v1beta.UsageService
 */
export const UsageService = new ServiceType('task.v1beta.UsageService', [
	{ name: 'Using', options: {}, I: UsingRequest, O: UsingResponse },
	{
		name: 'UsingStream',
		serverStreaming: true,
		options: {},
		I: UsingStreamRequest,
		O: UsingStreamResponse
	}
]);