// AppError.ts
interface ErrorObj {
  statusCode: number;
  message: string;
}

export class AppError extends Error {
  private errorObj: ErrorObj;

  constructor(errorObj: ErrorObj, message: string) {
    super(message);
    this.message = message;
    this.errorObj = errorObj;
  }

  getMessage(): string {
    return this.message;
  }

  getErrorObj(): ErrorObj {
    return this.errorObj;
  }
}
