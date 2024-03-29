import { D, A } from "@mobily/ts-belt";

export const ERROR_CODES = {
  INVALID_BODY: 400001,
  WRONG_PASSWORD: 400002,
  MISSING_COOKIE: 400003,
  INVALID_JWT: 4000004,
  FAILED_CREATE_DB: 400005,
  UNIQUE_CONSTRAINT: 400006,
  INVALID_CLIENT_SECRET: 400007,
  ACCESS_TOKEN_EXPIRED: 4010001,
  REFRESH_TOKEN_EXPIRED: 401002,
  NOT_FOUND: 404001,
  DATA_NOT_FOUND_DB: 404002,
  MISSING_AUTHENTICATION_BEARER: 404003,
  ACCESS_TOKEN_NOT_FOUND: 404004,
  MISSING_REFRESH_TOKEN: 404005,
  SERVER_ERROR: 500001,
  ZOD_UNCAUGHT_ERROR: 500002,
  PRISMA_UNCAUGHT_ERROR: 5000003,
  NOT_FOUND_UNCAUGHT_ERROR: 5000004,
  UNCAUGHT_ERROR: 500005,
  INTERNAL_SERVER_ERROR: 500101,
} as const;

// check that error codes should be unique
const values = A.uniq(D.values(ERROR_CODES));
const keys = D.keys(ERROR_CODES);

if (values.length !== keys.length) {
  throw new Error("Please make ERROR_CODES  values uniques");
}
