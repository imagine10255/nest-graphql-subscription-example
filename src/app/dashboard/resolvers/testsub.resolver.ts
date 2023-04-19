import {Resolver, Mutation, Subscription, ObjectType, Field} from '@nestjs/graphql';
import {PubSub} from 'graphql-subscriptions';


@ObjectType()
class MyComment {
    @Field()
    id: String
    @Field()
    content: String
}

const pubSub = new PubSub();
const PONG_EVENT_NAME = 'pong';


@Resolver('MyComment')
export class TestsubResolvers {

    @Mutation(returns => MyComment)
    async addComment() {
        const newComment = {id: '1234567', content: 'test comment'};
        pubSub.publish(PONG_EVENT_NAME, {[PONG_EVENT_NAME]: newComment });
        return newComment;
    }

    @Subscription((returns) => MyComment)
    pong({name: PONG_EVENT_NAME}) {
        return pubSub.asyncIterator(PONG_EVENT_NAME);
    }
}
