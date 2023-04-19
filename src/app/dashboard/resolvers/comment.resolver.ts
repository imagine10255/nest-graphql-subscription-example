import {Resolver, Mutation, Subscription, ObjectType, Field} from '@nestjs/graphql';
import {PubSub} from 'graphql-subscriptions';
import {ulid} from 'ulid';


@ObjectType()
class Comment {
    @Field()
    id: String

    @Field()
    content: String
}

const pubSub = new PubSub();

enum EVENT_NAME {
    COMMENT = 'subscriptionComment',
}

@Resolver('Comment')
class CommentResolvers {

    @Mutation(returns => Comment, {name: 'addComment'})
    async addComment() {
        const newComment = {id: ulid(), content: 'test comment'};
        pubSub.publish(EVENT_NAME.COMMENT, {[EVENT_NAME.COMMENT]: newComment });

        return newComment;
    }

    @Subscription((returns) => Comment, {name: EVENT_NAME.COMMENT})
    subscriptionComment() {
        return pubSub.asyncIterator(EVENT_NAME.COMMENT);
    }
}

export default CommentResolvers
