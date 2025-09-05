# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*GetApplicationsForUser*](#getapplicationsforuser)
  - [*GetUniversityByName*](#getuniversitybyname)
- [**Mutations**](#mutations)
  - [*InsertApplication*](#insertapplication)
  - [*UpdateApplicationStatus*](#updateapplicationstatus)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## GetApplicationsForUser
You can execute the `GetApplicationsForUser` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getApplicationsForUser(): QueryPromise<GetApplicationsForUserData, undefined>;

interface GetApplicationsForUserRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetApplicationsForUserData, undefined>;
}
export const getApplicationsForUserRef: GetApplicationsForUserRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getApplicationsForUser(dc: DataConnect): QueryPromise<GetApplicationsForUserData, undefined>;

interface GetApplicationsForUserRef {
  ...
  (dc: DataConnect): QueryRef<GetApplicationsForUserData, undefined>;
}
export const getApplicationsForUserRef: GetApplicationsForUserRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getApplicationsForUserRef:
```typescript
const name = getApplicationsForUserRef.operationName;
console.log(name);
```

### Variables
The `GetApplicationsForUser` query has no variables.
### Return Type
Recall that executing the `GetApplicationsForUser` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetApplicationsForUserData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetApplicationsForUser`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getApplicationsForUser } from '@dataconnect/generated';


// Call the `getApplicationsForUser()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getApplicationsForUser();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getApplicationsForUser(dataConnect);

console.log(data.applications);

// Or, you can use the `Promise` API.
getApplicationsForUser().then((response) => {
  const data = response.data;
  console.log(data.applications);
});
```

### Using `GetApplicationsForUser`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getApplicationsForUserRef } from '@dataconnect/generated';


// Call the `getApplicationsForUserRef()` function to get a reference to the query.
const ref = getApplicationsForUserRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getApplicationsForUserRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.applications);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.applications);
});
```

## GetUniversityByName
You can execute the `GetUniversityByName` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUniversityByName(vars: GetUniversityByNameVariables): QueryPromise<GetUniversityByNameData, GetUniversityByNameVariables>;

interface GetUniversityByNameRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUniversityByNameVariables): QueryRef<GetUniversityByNameData, GetUniversityByNameVariables>;
}
export const getUniversityByNameRef: GetUniversityByNameRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUniversityByName(dc: DataConnect, vars: GetUniversityByNameVariables): QueryPromise<GetUniversityByNameData, GetUniversityByNameVariables>;

interface GetUniversityByNameRef {
  ...
  (dc: DataConnect, vars: GetUniversityByNameVariables): QueryRef<GetUniversityByNameData, GetUniversityByNameVariables>;
}
export const getUniversityByNameRef: GetUniversityByNameRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUniversityByNameRef:
```typescript
const name = getUniversityByNameRef.operationName;
console.log(name);
```

### Variables
The `GetUniversityByName` query requires an argument of type `GetUniversityByNameVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUniversityByNameVariables {
  name: string;
}
```
### Return Type
Recall that executing the `GetUniversityByName` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUniversityByNameData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetUniversityByName`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUniversityByName, GetUniversityByNameVariables } from '@dataconnect/generated';

// The `GetUniversityByName` query requires an argument of type `GetUniversityByNameVariables`:
const getUniversityByNameVars: GetUniversityByNameVariables = {
  name: ..., 
};

// Call the `getUniversityByName()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUniversityByName(getUniversityByNameVars);
// Variables can be defined inline as well.
const { data } = await getUniversityByName({ name: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUniversityByName(dataConnect, getUniversityByNameVars);

console.log(data.universities);

// Or, you can use the `Promise` API.
getUniversityByName(getUniversityByNameVars).then((response) => {
  const data = response.data;
  console.log(data.universities);
});
```

### Using `GetUniversityByName`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUniversityByNameRef, GetUniversityByNameVariables } from '@dataconnect/generated';

// The `GetUniversityByName` query requires an argument of type `GetUniversityByNameVariables`:
const getUniversityByNameVars: GetUniversityByNameVariables = {
  name: ..., 
};

// Call the `getUniversityByNameRef()` function to get a reference to the query.
const ref = getUniversityByNameRef(getUniversityByNameVars);
// Variables can be defined inline as well.
const ref = getUniversityByNameRef({ name: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUniversityByNameRef(dataConnect, getUniversityByNameVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.universities);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.universities);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## InsertApplication
You can execute the `InsertApplication` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
insertApplication(): MutationPromise<InsertApplicationData, undefined>;

interface InsertApplicationRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<InsertApplicationData, undefined>;
}
export const insertApplicationRef: InsertApplicationRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
insertApplication(dc: DataConnect): MutationPromise<InsertApplicationData, undefined>;

interface InsertApplicationRef {
  ...
  (dc: DataConnect): MutationRef<InsertApplicationData, undefined>;
}
export const insertApplicationRef: InsertApplicationRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the insertApplicationRef:
```typescript
const name = insertApplicationRef.operationName;
console.log(name);
```

### Variables
The `InsertApplication` mutation has no variables.
### Return Type
Recall that executing the `InsertApplication` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `InsertApplicationData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface InsertApplicationData {
  application_insert: Application_Key;
}
```
### Using `InsertApplication`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, insertApplication } from '@dataconnect/generated';


// Call the `insertApplication()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await insertApplication();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await insertApplication(dataConnect);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
insertApplication().then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

### Using `InsertApplication`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, insertApplicationRef } from '@dataconnect/generated';


// Call the `insertApplicationRef()` function to get a reference to the mutation.
const ref = insertApplicationRef();

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = insertApplicationRef(dataConnect);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.application_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.application_insert);
});
```

## UpdateApplicationStatus
You can execute the `UpdateApplicationStatus` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateApplicationStatus(vars: UpdateApplicationStatusVariables): MutationPromise<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;

interface UpdateApplicationStatusRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateApplicationStatusVariables): MutationRef<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
}
export const updateApplicationStatusRef: UpdateApplicationStatusRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateApplicationStatus(dc: DataConnect, vars: UpdateApplicationStatusVariables): MutationPromise<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;

interface UpdateApplicationStatusRef {
  ...
  (dc: DataConnect, vars: UpdateApplicationStatusVariables): MutationRef<UpdateApplicationStatusData, UpdateApplicationStatusVariables>;
}
export const updateApplicationStatusRef: UpdateApplicationStatusRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateApplicationStatusRef:
```typescript
const name = updateApplicationStatusRef.operationName;
console.log(name);
```

### Variables
The `UpdateApplicationStatus` mutation requires an argument of type `UpdateApplicationStatusVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateApplicationStatusVariables {
  id: UUIDString;
  status: string;
}
```
### Return Type
Recall that executing the `UpdateApplicationStatus` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateApplicationStatusData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateApplicationStatusData {
  application_update?: Application_Key | null;
}
```
### Using `UpdateApplicationStatus`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateApplicationStatus, UpdateApplicationStatusVariables } from '@dataconnect/generated';

// The `UpdateApplicationStatus` mutation requires an argument of type `UpdateApplicationStatusVariables`:
const updateApplicationStatusVars: UpdateApplicationStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateApplicationStatus()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateApplicationStatus(updateApplicationStatusVars);
// Variables can be defined inline as well.
const { data } = await updateApplicationStatus({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateApplicationStatus(dataConnect, updateApplicationStatusVars);

console.log(data.application_update);

// Or, you can use the `Promise` API.
updateApplicationStatus(updateApplicationStatusVars).then((response) => {
  const data = response.data;
  console.log(data.application_update);
});
```

### Using `UpdateApplicationStatus`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateApplicationStatusRef, UpdateApplicationStatusVariables } from '@dataconnect/generated';

// The `UpdateApplicationStatus` mutation requires an argument of type `UpdateApplicationStatusVariables`:
const updateApplicationStatusVars: UpdateApplicationStatusVariables = {
  id: ..., 
  status: ..., 
};

// Call the `updateApplicationStatusRef()` function to get a reference to the mutation.
const ref = updateApplicationStatusRef(updateApplicationStatusVars);
// Variables can be defined inline as well.
const ref = updateApplicationStatusRef({ id: ..., status: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateApplicationStatusRef(dataConnect, updateApplicationStatusVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.application_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.application_update);
});
```

