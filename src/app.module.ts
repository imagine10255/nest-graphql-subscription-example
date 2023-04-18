import {APP_INTERCEPTOR, APP_FILTER} from '@nestjs/core';
import {Module} from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { join } from 'path';

// Config
import {ResponseInterceptor} from 'common/interceptors/response.interceoptor';
import {AllExceptionsFilter} from 'common/filters/all-exceptions.filter';

// Modules
import {DashboardModule} from 'app/main/dashboard/dashboard.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import {GraphQLError } from 'graphql';
import {ConfigModule} from '@nestjs/config';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [],
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            debug: true,
            installSubscriptionHandlers: true,
            subscriptions: {
                'graphql-ws': true,
                'subscriptions-transport-ws': {
                    path: '/graphql'
                },
            },
            playground: false, // 改true 會跟 polloServerPluginLandingPage 衝突
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
            plugins: [ApolloServerPluginLandingPageLocalDefault()],
            buildSchemaOptions: {
                dateScalarMode: 'timestamp',
                numberScalarMode: 'integer',
            },
            formatError: (error: GraphQLError) => {
                const graphQLFormattedError = {
                    message: error.message,
                    code: error.extensions.exception?.code ?? error.extensions.code,
                    path: error.path,
                };
                return graphQLFormattedError;
            },
            context: ({ req }) => ({ req })
        }),

        // Main
        DashboardModule,

    ],
    controllers: [],
    providers: [
        {provide: APP_INTERCEPTOR, useClass: ResponseInterceptor},
        {provide: APP_FILTER, useClass: AllExceptionsFilter},
    ],
})
export class AppModule {
}
