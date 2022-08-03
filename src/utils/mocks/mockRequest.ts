import { Request } from "express";
import { Params } from "express-serve-static-core";

interface mockRequest {
  params?: Params;
}

export function makeMockRequest({ params }: mockRequest) {
  // todo
  const request = {
    params: params || {},
  } as unknown;

  return request as Request;
}
