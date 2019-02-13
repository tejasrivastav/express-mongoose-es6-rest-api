import { NextFunction, Request, Response } from 'express';
import { IUserDocument } from "../user/user.model";

export interface CustomRequest extends Request {
  user?: IUserDocument;
}
