import { Field, InputType } from '@nestjs/graphql';
import { MaxLength } from 'class-validator';

@InputType()
export class NewNewsInput {
  @Field()
  @MaxLength(30)
  title: string;
}
