import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'news' })
export class News {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;
}
