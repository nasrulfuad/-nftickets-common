import { ValidationError } from "express-validator";
import { CustomErrorAbstract } from "./CustomErrorsAbstract";

export class RequestValidationError extends CustomErrorAbstract {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    /** Only because we are extending a built in class */
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      field: error.param,
    }));
  }
}
