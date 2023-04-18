import {Query, Resolver} from '@nestjs/graphql';

// Services
import {DashboardService} from '../services/dashboard.service';
import {DashboardOSInfo} from "../object/dashboard.object";

@Resolver()
class DashboardResolver {
    constructor(
        private readonly dashboardService: DashboardService,
    ) {
    }


    @Query(returns => DashboardOSInfo, {name: 'dashboardOSInfo', description: '取得系統資訊'})
    async getOSInfo(): Promise<DashboardOSInfo> {
        const data = await this.dashboardService.findOSInfo();
        return data;
    }

}


export default DashboardResolver;
