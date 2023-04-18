import {Injectable, NestInterceptor, ExecutionContext, CallHandler} from '@nestjs/common';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const controller = context.getClass().name;
        const method = context.getHandler().name;
        const fromSource = `${controller}@${method}`;
        const now = Date.now();
        return next
            .handle()
            .pipe(
                tap(() => console.log(`using... ${fromSource} in ${Date.now() - now}ms`)),
            );
    }
}
