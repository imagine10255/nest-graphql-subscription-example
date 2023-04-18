import {Field, ID, ObjectType} from "@nestjs/graphql";


@ObjectType()
export class ResultMessage {
    @Field()
    message: string
}


@ObjectType()
export class ResultUpdateData extends ResultMessage{
    @Field()
    updateCount: number
}

@ObjectType()
export class ResultDeleteData extends ResultMessage{
    @Field()
    deleteCount: number
}


@ObjectType()
export class ResultCreateData extends ResultMessage{
    @Field()
    newId: string;
}

@ObjectType()
export class ResultCreateData2 extends ResultMessage{
    @Field(of => ID)
    newId: string;
}


@ObjectType()
export class ResultDownloadData extends ResultMessage{
    @Field()
    name: string;

    @Field()
    mineType: string;

    @Field()
    buffer: string;
}

