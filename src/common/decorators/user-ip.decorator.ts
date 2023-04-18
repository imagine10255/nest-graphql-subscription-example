import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlExecutionContext } from "@nestjs/graphql";

export const UserIP = createParamDecorator(
    async (data: unknown, context: ExecutionContext) => {
        const gqlContext = GqlExecutionContext.create(context);
        const request = gqlContext.getContext().req;
        let userIP = request.ip;

        // 方法1：使用 x-forwarded-for 標頭取得 IP 位址
        const forwardedFor = request.headers['x-forwarded-for'];
        if (forwardedFor) {
            userIP = forwardedFor.split(',')[0];
        }

        // 方法2：使用 req.connection.remoteAddress 屬性取得 IP 位址
        if (!userIP) {
            userIP = request.connection.remoteAddress;
        }

        return userIP;
    },
);
