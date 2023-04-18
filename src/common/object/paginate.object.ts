import {Field, InputType, ObjectType} from '@nestjs/graphql';


@ObjectType()
export class Meta {
    @Field()
    currentPage: number;

    @Field()
    pageLimit: number;
}


@ObjectType()
export class Info {
    @Field()
    totalItems: number;

    @Field()
    totalPages: number;
}


@ObjectType()
export class Pagination{
    @Field(() => Meta)
    meta: Meta
    @Field(() => Info)
    info: Info
}



@InputType()
@ObjectType()
export class DateRange {
    @Field()
    start: string;

    @Field()
    end: string;
}


