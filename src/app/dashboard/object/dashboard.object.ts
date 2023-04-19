import {Field, ObjectType} from "@nestjs/graphql";



@ObjectType()
export class DashboardOSInfo{
    @Field()
    cpuCount: number

    @Field()
    memoryTotal: number

    @Field()
    gcHeapStats: number
}
