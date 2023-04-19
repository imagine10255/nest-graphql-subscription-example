import {Module} from '@nestjs/common';

// Service
import {DashboardService} from './services/dashboard.service';

// Resolver
import DashboardResolver from "./resolvers/dashboard.resolver";
import CommentResolvers from './resolvers/comment.resolver';


@Module({
    imports: [],
    providers: [
        DashboardService,
        DashboardResolver,
        CommentResolvers,
    ],
    exports: [],
})
export class DashboardModule {}

