export const createErrorLog = (
  serviceName: string = "",
  servicePath: string = "",
  errorCodes: number,
  errorObject: any,
  additionalData?: any,
) =>
  JSON.stringify({
    path: `/${serviceName}/${servicePath.replace(/^\//, "")}`,
    serviceName,
    servicePath,
    errorCodes,
    errorObject: errorObject,
    additionalData,
  });
