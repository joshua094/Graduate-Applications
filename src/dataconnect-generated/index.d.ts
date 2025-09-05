import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface Application_Key {
  id: UUIDString;
  __typename?: 'Application_Key';
}

export interface Contact_Key {
  id: UUIDString;
  __typename?: 'Contact_Key';
}

export interface GetApplicationsForUserData {
  applications: ({
    id: UUIDString;
    program: {
      name: string;
      university: {
        name: string;
      };
    };
      status: string;
      createdAt: TimestampString;
      updatedAt: TimestampString;
  } & Application_Key)[];
}

export interface GetUniversityByNameData {
  universities: ({
    id: UUIDString;
    name: string;
    city: string;
    state: string;
    country: string;
    website?: string | null;
  } & University_Key)[];
}

export interface GetUniversityByNameVariables {
  name: string;
}

export interface InsertApplicationData {
  application_insert: Application_Key;
}

export interface Program_Key {
  id: UUIDString;
  __typename?: 'Program_Key';
}

export interface Requirement_Key {
  id: UUIDString;
  __typename?: 'Requirement_Key';
}

export interface University_Key {
  id: UUIDString;
  __typename?: 'University_Key';
}

export interface UpdateApplicationStatusData {
  application_update?: Application_Key | null;
}

export interface UpdateApplicationStatusVariables {
  id: UUIDString;
  status: string;
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface InsertApplicationRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertApplicationData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<InsertApplicationData, undefined>;
  operationName: string;
}
export const insertApplicationRef: InsertApplicationRef;

export function insertApplication(): MutationPromise<InsertApplicationData, undefined>;
export function insertApplication(dc: DataConnect): MutationPromise<InsertApplicationData, undefined>;

interface GetApplicationsForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetApplicationsForUserData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetApplicationsForUserData, undefined>;
  operationName: string;
}
export const getApplicationsForUserRef: GetApplicationsForUserRef;

export function getApplicationsForUser(): QueryPromise<GetApplicationsForUserData, undefined>;
export function getApplicationsForUser(dc: DataConnect): QueryPromise<GetApplicationsForUserData, undefined>;

interface UpdateApplicationStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateApplicationStatusVariables): MutationRef<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateApplicationStatusVariables): MutationRef<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
  operationName: string;
}
export const updateApplicationStatusRef: UpdateApplicationStatusRef;

export function updateApplicationStatus(vars: UpdateApplicationStatusVariables): MutationPromise<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
export function updateApplicationStatus(dc: DataConnect, vars: UpdateApplicationStatusVariables): MutationPromise<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;

interface GetUniversityByNameRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUniversityByNameVariables): QueryRef<GetUniversityByNameData, GetUniversityByNameVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUniversityByNameVariables): QueryRef<GetUniversityByNameData, GetUniversityByNameVariables>;
  operationName: string;
}
export const getUniversityByNameRef: GetUniversityByNameRef;

export function getUniversityByName(vars: GetUniversityByNameVariables): QueryPromise<GetUniversityByNameData, GetUniversityByNameVariables>;
export function getUniversityByName(dc: DataConnect, vars: GetUniversityByNameVariables): QueryPromise<GetUniversityByNameData, GetUniversityByNameVariables>;

