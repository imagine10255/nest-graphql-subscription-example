import {Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException} from '@nestjs/common';

import {catchError, Observable, throwError, TimeoutError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { GqlExecutionContext } from '@nestjs/graphql';

interface Response<T> {
    data: T;
}

/**
 * 封装正确的返回格式
 * {
 *  data,
 *  code: 200,
 *  message: 'success'
 * }
 */
@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<any> {
        const ctx = GqlExecutionContext.create(context);
        const graphqlRequest = ctx.getContext().req;
        const restfulRequest = context.switchToHttp().getRequest();

        if (restfulRequest) {
            return next.handle().pipe(
                map(data => {
                    return {
                        data,
                        code: 200,
                        message: 'success',
                    };
                }),
            );
        } else if (graphqlRequest) {
            return next.handle().pipe(tap());
        }
        return next.handle();
    }
}
