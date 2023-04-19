# Nest Graphql Subscription Example

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

# NestJS Server For GraphQL Subscription

This project uses NestJS version 9x

## Running the app

```bash
# development
$ yarn isntall
$ yarn dev

# open http://localhost:8080/graphql
```

## Try DSL
```graphql
subscription Subscription {
    subscriptionComment {
        id
        content
    }
}

mutation Trigger {
  addComment {
    id
    content
  }
}

```


## QA
```typescript
{"message": "server must support graphql-ws or subscriptions-transport-ws protocol"}
```
fix http://localhost:8080/graphql/ to http://localhost:8080/graphql

```typescript
// Error received at 09:14:26
{"isTrusted": true}

Internal error occurred during message handling. Please check your implementation. Error: Subscription field must return Async Iterable. Received: undefined.
```
check providers: [{provide: APP_INTERCEPTOR, useClass: ResponseInterceptor}],

## License

Nest is [MIT licensed](LICENSE).

## Purpose of application

To demonstrate the use of GraphQL Subscription within the NestJS framework and provide APIs accessible to respective clients.


## Reference
[nest6-graphql-subscription-redis](https://github.com/rychkog/gql-redis-subscriptions-article) 
