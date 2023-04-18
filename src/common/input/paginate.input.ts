import {Field, InputType} from "@nestjs/graphql";


enum EOrderBy {
    ASC = 'ASC',
    DESC = 'DESC',
}

@InputType()
class OrderInput {
    @Field()
    orderField: string

    @Field()
    orderBy: EOrderBy
}

@InputType()
export class PaginateInput {
    @Field()
    readonly currentPage: number;

    @Field()
    readonly pageLimit: number;

    @Field({nullable: true})
    readonly order?: OrderInput
}


