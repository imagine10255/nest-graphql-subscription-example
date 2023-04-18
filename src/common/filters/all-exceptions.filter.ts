import {
    ExceptionFilter,
    Catch,
    ArgumentsHost,
    HttpException,
    HttpStatus,
} from '@nestjs/common';
import {HttpAdapterHost} from '@nestjs/core';
import CatchInfoException from '../exception/catchInfo.exception';
import SystemException from "../exception/system.exception";
import {GqlArgumentsHost, GqlExceptionFilter, GraphQLArgumentsHost} from "@nestjs/graphql";

interface IResponseBody {
    message: string,
    code: string,
}

/**
 * 最終錯誤處理輸出位置
 */

@Catch()
export class AllExceptionsFilter implements ExceptionFilter, GqlExceptionFilter {
    constructor(private readonly httpAdapterHost: HttpAdapterHost) {}


    catch(exception: unknown & SystemException, host: ArgumentsHost) {
        const { httpAdapter } = this.httpAdapterHost;

        const contextType = host.getType<string>();
        // by graphql
        if(contextType === 'graphql'){
            const gqlHost = GqlArgumentsHost.create(host);
            return exception;
        }


        const ctx = host.switchToHttp();
        const httpStatusCode = exception instanceof HttpException
            ? exception.getStatus() ?? HttpStatus.INTERNAL_SERVER_ERROR:
            HttpStatus.INTERNAL_SERVER_ERROR ;

        const path = httpAdapter.getRequestUrl(ctx.getRequest());
        const baseResponseBody: IResponseBody = {
            message: exception.message,
            code: exception.code ?? `SERVICE_HTTP_${httpStatusCode}`,
        };

        const isDebug = process.env.APP_DEBUG === 'true';
        const devInfo = isDebug && exception instanceof CatchInfoException ? {path, ...exception.devInfo}: undefined;

        // console.log('devInfo', {...baseResponseBody, ...devInfo});

        httpAdapter.reply(
            ctx.getResponse(),
            {...baseResponseBody, devInfo},
            httpStatusCode
        );
    }
}
