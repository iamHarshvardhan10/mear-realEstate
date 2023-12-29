export const errorHandler = (statusCode , message)=>{
    const error = new error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}
