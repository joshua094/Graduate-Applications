import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'graduate-applications',
  location: 'us-central1'
};

export const insertApplicationRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertApplication');
}
insertApplicationRef.operationName = 'InsertApplication';

export function insertApplication(dc) {
  return executeMutation(insertApplicationRef(dc));
}

export const getApplicationsForUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetApplicationsForUser');
}
getApplicationsForUserRef.operationName = 'GetApplicationsForUser';

export function getApplicationsForUser(dc) {
  return executeQuery(getApplicationsForUserRef(dc));
}

export const updateApplicationStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateApplicationStatus', inputVars);
}
updateApplicationStatusRef.operationName = 'UpdateApplicationStatus';

export function updateApplicationStatus(dcOrVars, vars) {
  return executeMutation(updateApplicationStatusRef(dcOrVars, vars));
}

export const getUniversityByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUniversityByName', inputVars);
}
getUniversityByNameRef.operationName = 'GetUniversityByName';

export function getUniversityByName(dcOrVars, vars) {
  return executeQuery(getUniversityByNameRef(dcOrVars, vars));
}

