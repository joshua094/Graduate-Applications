const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'graduate-applications',
  location: 'us-central1'
};
exports.connectorConfig = connectorConfig;

const insertApplicationRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'InsertApplication');
}
insertApplicationRef.operationName = 'InsertApplication';
exports.insertApplicationRef = insertApplicationRef;

exports.insertApplication = function insertApplication(dc) {
  return executeMutation(insertApplicationRef(dc));
};

const getApplicationsForUserRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetApplicationsForUser');
}
getApplicationsForUserRef.operationName = 'GetApplicationsForUser';
exports.getApplicationsForUserRef = getApplicationsForUserRef;

exports.getApplicationsForUser = function getApplicationsForUser(dc) {
  return executeQuery(getApplicationsForUserRef(dc));
};

const updateApplicationStatusRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateApplicationStatus', inputVars);
}
updateApplicationStatusRef.operationName = 'UpdateApplicationStatus';
exports.updateApplicationStatusRef = updateApplicationStatusRef;

exports.updateApplicationStatus = function updateApplicationStatus(dcOrVars, vars) {
  return executeMutation(updateApplicationStatusRef(dcOrVars, vars));
};

const getUniversityByNameRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUniversityByName', inputVars);
}
getUniversityByNameRef.operationName = 'GetUniversityByName';
exports.getUniversityByNameRef = getUniversityByNameRef;

exports.getUniversityByName = function getUniversityByName(dcOrVars, vars) {
  return executeQuery(getUniversityByNameRef(dcOrVars, vars));
};
