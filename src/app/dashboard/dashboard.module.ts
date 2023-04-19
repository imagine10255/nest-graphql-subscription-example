import {Module} from '@nestjs/common';

// Service
import {DashboardService} from './services/dashboard.service';

// Controller
import DashboardResolver from "./resolvers/dashboard.resolver";
import {TestsubResolvers} from './resolvers/testsub.resolver';

// Modules



@Module({
    imports: [],
    providers: [
        DashboardService,
        DashboardResolver,
        TestsubResolvers,
    ],
    exports: [DashboardService],
})
export class DashboardModule {}

