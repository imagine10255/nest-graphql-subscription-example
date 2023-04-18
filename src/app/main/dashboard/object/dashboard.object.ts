import {Field, ObjectType} from "@nestjs/graphql";


@ObjectType()
export class DashboardCount{
    @Field({description: '本日新增任務'})
    todayNewTask: number

    @Field({description: '未處理任務'})
    notProcessedTask: number

    @Field({description: '本月累積任務'})
    thisMonthTask: number

    @Field({description: '本月累積已處理任務'})
    thisMonthCloseTask: number
}

@ObjectType()
export class DashboardOSInfo{
    @Field()
    cpuCount: number

    @Field()
    memoryTotal: number

    @Field()
    gcHeapStats: number
}
