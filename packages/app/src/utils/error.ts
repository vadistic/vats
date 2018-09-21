export interface IAppError {
  message: string
  name?: string
  code?: number
  appError?: Error
}

export class AppError extends Error {
  public message
  public code
  public appError

  constructor(args: IAppError) {
    super(args.message)

    this.name = args.name || 'AppError'
    this.appError = args.appError || null
    this.message = args.message
    this.code = args.code

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, AppError.prototype)
  }
}
