import { JSONObject } from "./Library/JSONTypes";

export type AppErrorOptions = {
  title: string;
  message: string;
  code: string;
  cause?: any;
  data?: JSONObject;
};

/**
 * AppError
 */
export class AppError extends Error {
  constructor(private options: AppErrorOptions) {
    super(options.message, { cause: options.cause });
    this.name = "AppError";
  }

  get title(): string {
    return this.options.title;
  }

  get message(): string {
    return this.options.message;
  }

  get code(): string {
    return this.options.code;
  }

  get cause(): any {
    return this.options.cause;
  }

  get data(): JSONObject {
    return this.options.data || {};
  }

  toJSON(): string {
    return JSON.stringify(this.options);
  }
}

export const isAppError = (err: any): err is AppError => {
  return err instanceof AppError;
};

export const create = (opt: AppErrorOptions): AppError => new AppError(opt);
